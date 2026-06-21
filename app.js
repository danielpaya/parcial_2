let currentSet = [];
let currentIndex = 0;
let selectedIndex = null;
let checked = false;

const STORAGE_KEY = "ia_parcial_quiz_progress_v1";

const els = {
  topicFilter: document.getElementById("topicFilter"),
  modeSelect: document.getElementById("modeSelect"),
  startBtn: document.getElementById("startBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  totalQuestions: document.getElementById("totalQuestions"),
  answeredCount: document.getElementById("answeredCount"),
  accuracy: document.getElementById("accuracy"),
  score: document.getElementById("score"),
  questionCounter: document.getElementById("questionCounter"),
  topicBadge: document.getElementById("topicBadge"),
  progressFill: document.getElementById("progressFill"),
  questionText: document.getElementById("questionText"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  prevBtn: document.getElementById("prevBtn"),
  checkBtn: document.getElementById("checkBtn"),
  nextBtn: document.getElementById("nextBtn")
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAnswer(questionId, selected, correct) {
  const progress = loadProgress();
  progress[questionId] = { selected, correct, answeredAt: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  updateStats();
  startQuiz();
}

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function uniqueTopics() {
  return [...new Set(QUESTIONS.map(q => q.topic))].sort();
}

function fillTopics() {
  uniqueTopics().forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    els.topicFilter.appendChild(option);
  });
}

function buildSet() {
  const topic = els.topicFilter.value;
  const mode = els.modeSelect.value;
  const progress = loadProgress();

  let set = QUESTIONS.filter(q => topic === "all" || q.topic === topic);

  if (mode === "wrong") {
    set = set.filter(q => progress[q.id] && progress[q.id].correct === false);
  }

  if (mode === "random") {
    set = shuffle(set);
  }

  return set;
}

function startQuiz() {
  currentSet = buildSet();
  currentIndex = 0;
  selectedIndex = null;
  checked = false;
  renderQuestion();
  updateStats();
}

function renderQuestion() {
  els.feedback.className = "feedback hidden";
  els.feedback.innerHTML = "";
  selectedIndex = null;
  checked = false;

  if (!currentSet.length) {
    els.questionText.textContent = "No hay preguntas para este filtro. Cambia el tema o el modo.";
    els.options.innerHTML = "";
    els.questionCounter.textContent = "0 de 0";
    els.topicBadge.textContent = "Sin preguntas";
    els.progressFill.style.width = "0%";
    els.prevBtn.disabled = true;
    els.checkBtn.disabled = true;
    els.nextBtn.disabled = true;
    return;
  }

  const q = currentSet[currentIndex];
  els.questionText.textContent = q.question;
  els.topicBadge.textContent = q.topic;
  els.questionCounter.textContent = `Pregunta ${currentIndex + 1} de ${currentSet.length}`;
  els.progressFill.style.width = `${((currentIndex + 1) / currentSet.length) * 100}%`;

  els.options.innerHTML = "";
  q.options.forEach((optionText, index) => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" />
      <span>${escapeHTML(optionText)}</span>
    `;
    label.addEventListener("click", () => selectOption(index));
    els.options.appendChild(label);
  });

  els.prevBtn.disabled = currentIndex === 0;
  els.checkBtn.disabled = false;
  els.nextBtn.disabled = currentIndex === currentSet.length - 1;
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, tag => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[tag]));
}

function selectOption(index) {
  if (checked) return;
  selectedIndex = index;
  document.querySelectorAll(".option").forEach((el, i) => {
    el.classList.toggle("selected", i === index);
    const input = el.querySelector("input");
    input.checked = i === index;
  });
}

function checkAnswer() {
  if (selectedIndex === null) {
    els.feedback.className = "feedback warn";
    els.feedback.innerHTML = "<strong>Selecciona una respuesta primero.</strong>";
    return;
  }

  const q = currentSet[currentIndex];
  const isCorrect = selectedIndex === q.correctIndex;
  checked = true;

  document.querySelectorAll(".option").forEach((el, i) => {
    el.classList.remove("selected");
    if (i === q.correctIndex) el.classList.add("correct");
    if (i === selectedIndex && !isCorrect) el.classList.add("incorrect");
  });

  saveAnswer(q.id, selectedIndex, isCorrect);

  if (isCorrect) {
    els.feedback.className = "feedback good";
    els.feedback.innerHTML = `
      <strong>Correcto.</strong><br>
      ${escapeHTML(q.explanation)}
    `;
  } else {
    const chosen = q.options[selectedIndex];
    const correct = q.options[q.correctIndex];
    els.feedback.className = "feedback bad";
    els.feedback.innerHTML = `
      <strong>Incorrecto.</strong><br>
      <strong>Elegiste:</strong> ${escapeHTML(chosen)}.<br>
      <strong>Correcta:</strong> ${escapeHTML(correct)}.<br><br>
      ${escapeHTML(q.explanation)}<br><br>
      <strong>Por qué no la elegida:</strong> tu opción no responde la parte central de la pregunta. En este caso, el concepto clave apunta a «${escapeHTML(correct)}», no a «${escapeHTML(chosen)}».
    `;
  }

  els.checkBtn.disabled = true;
  updateStats();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentIndex < currentSet.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function updateStats() {
  const progress = loadProgress();
  const answered = Object.values(progress);
  const correct = answered.filter(x => x.correct).length;
  const total = QUESTIONS.length;
  const accuracy = answered.length ? Math.round((correct / answered.length) * 100) : 0;

  els.totalQuestions.textContent = total;
  els.answeredCount.textContent = answered.length;
  els.accuracy.textContent = `${accuracy}%`;
  els.score.textContent = `${correct}/${answered.length}`;
}

els.startBtn.addEventListener("click", startQuiz);
els.resetProgressBtn.addEventListener("click", resetProgress);
els.checkBtn.addEventListener("click", checkAnswer);
els.prevBtn.addEventListener("click", prevQuestion);
els.nextBtn.addEventListener("click", nextQuestion);

fillTopics();
startQuiz();
