const QUESTIONS = [
  {
    "id": 1,
    "question": "¿Qué perfil profesional diseña la estructura técnica de los sistemas de IA en una empresa, decidiendo qué modelos usar y cómo desplegarlos?",
    "options": [
      "Ingeniero MLOps",
      "Gerente de Producto de IA",
      "Arquitecto de Soluciones de IA",
      "Desarrollador de Agentes de IA"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Arquitecto de Soluciones de IA». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 2,
    "question": "Si queremos estar 95% seguros (c=0.95) de encontrar la cima global con p=0.1, ¿cuántos reinicios necesitamos según la Fórmula 3?",
    "options": [
      "10 reinicios",
      "29 reinicios",
      "5 reinicios",
      "100 reinicios"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «29 reinicios». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 3,
    "question": "En la estructura de un OKR, ¿qué es el Objective (Objetivo)?",
    "options": [
      "Un resultado cuantificable que indica si el objetivo se está logrando",
      "Un objetivo inspirador y cualitativo que describe la dirección de la organización",
      "Una métrica operativa que mide la eficiencia de un proceso específico",
      "Un indicador financiero que muestra el retorno sobre inversión"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Un objetivo inspirador y cualitativo que describe la dirección de la organización». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 4,
    "question": "¿Qué es una 'cresta' (ridge) como trampa de Hill Climbing?",
    "options": [
      "Un estado con recompensa máxima que el algoritmo siempre encuentra",
      "Un borde afilado de un techo donde bajar parece inevitable — el algoritmo se queda quieto por miedo a bajar aunque avanzar lo llevaría a una cima mayor",
      "Un ciclo infinito donde el algoritmo visita los mismos estados repetidamente",
      "Una zona de penalización que detiene inmediatamente la búsqueda"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Un borde afilado de un techo donde bajar parece inevitable — el algoritmo se queda quieto por miedo a bajar aunque avanzar lo llevaría a una cima mayor». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 5,
    "question": "La frase 'El mejor momento para prepararse para el futuro fue hace cinco años. El segundo mejor momento es hoy.' ¿Qué idea central refuerza?",
    "options": [
      "Que los estudiantes de semestres bajos no tienen ventaja sobre los de semestres altos",
      "Que la IA llegará a reemplazar completamente a los ingenieros en cinco años",
      "Que los estudiantes están en el lugar y momento correctos para prepararse para los roles de IA que están naciendo ahora",
      "Que estudiar IA solo es relevante para estudiantes de últimos semestres"
    ],
    "correctIndex": 2,
    "topic": "General",
    "explanation": "La respuesta correcta es «Que los estudiantes están en el lugar y momento correctos para prepararse para los roles de IA que están naciendo ahora». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 6,
    "question": "¿En qué situación es preferible usar Thompson Sampling sobre UCB1?",
    "options": [
      "Cuando el entorno cambia frecuentemente y los betas antiguos se vuelven obsoletos",
      "Cuando el producto o servicio es nuevo, la audiencia es nueva y se necesita aprender rápidamente quiénes son los mejores segmentos sin historial previo",
      "Cuando hay más de 100 acciones disponibles y el cómputo es limitado",
      "Cuando se requiere una garantía matemática exacta de Regret O(ln T)"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Cuando el producto o servicio es nuevo, la audiencia es nueva y se necesita aprender rápidamente quiénes son los mejores segmentos sin historial previo». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 7,
    "question": "¿Cuál es el nombre formal que la literatura de IA da al algoritmo de Ascenso de Colina?",
    "options": [
      "Stochastic Gradient Ascent",
      "Hill Climbing",
      "Simulated Annealing",
      "Gradient Boosting"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Hill Climbing». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 8,
    "question": "La inicialización optimista en ε-Greedy consiste en:",
    "options": [
      "Establecer Q(k) = 0 para todas las acciones al inicio",
      "Establecer Q(k) = r_max (el máximo posible de recompensa) para forzar que el agente explore todas las acciones antes de explotar",
      "Elegir aleatoriamente la acción inicial y luego aplicar Greedy Puro",
      "Reducir ε a 0 durante los primeros K pasos de inicialización"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Establecer Q(k) = r_max (el máximo posible de recompensa) para forzar que el agente explore todas las acciones antes de explotar». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 9,
    "question": "¿Cuál de las siguientes es una 'trampa' del algoritmo de Ascenso de Colina?",
    "options": [
      "Converger demasiado rápido al óptimo global sin explorar",
      "Los óptimos locales: cimas pequeñas rodeadas de vecinos más bajos donde el algoritmo cree haber terminado",
      "Requerir demasiada memoria para guardar todos los estados visitados",
      "Nunca converger cuando el espacio de búsqueda es continuo"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Los óptimos locales: cimas pequeñas rodeadas de vecinos más bajos donde el algoritmo cree haber terminado». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 10,
    "question": "En el ejemplo de D1 Colombia, el agente Greedy Puro asignó el 90% del inventario a la referencia A (granola). ¿Qué problema ilustra esto?",
    "options": [
      "Que la granola era efectivamente la mejor opción para D1",
      "Que el agente confundió el ruido inicial de la promoción con la señal real de demanda, sin explorar las demás referencias",
      "Que D1 no tenía suficiente capital para probar las otras referencias",
      "Que la estrategia Greedy Puro solo falla cuando hay más de 5 opciones disponibles"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Que el agente confundió el ruido inicial de la promoción con la señal real de demanda, sin explorar las demás referencias». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 11,
    "question": "¿Cuándo conviene usar Policy Iteration sobre Value Iteration?",
    "options": [
      "Cuando el MDP tiene millones de estados y muchas acciones",
      "Cuando el MDP es de tamaño mediano, la evaluación exacta es accesible y se requiere convergencia rápida",
      "Cuando no se conoce el modelo de transición P",
      "Cuando el factor de descuento γ es igual a 0"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Cuando el MDP es de tamaño mediano, la evaluación exacta es accesible y se requiere convergencia rápida». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 12,
    "question": "La Fórmula 2 del Reinicio Aleatorio es P = 1 - (1-p)^N. Si p = 0.1 y N = 10, ¿cuál es la probabilidad de ganar al menos una vez?",
    "options": [
      "10%",
      "35% aproximadamente",
      "65% aproximadamente",
      "99%"
    ],
    "correctIndex": 2,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «65% aproximadamente». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 13,
    "question": "La estrategia Greedy Puro tiene la siguiente limitación fundamental:",
    "options": [
      "Requiere conocer de antemano las probabilidades de cada palanca",
      "Explora demasiado y nunca converge a la mejor acción",
      "Queda atrapado en el primer buen resultado encontrado — nunca vuelve a explorar, nunca descubre si hay algo mejor",
      "Solo funciona cuando todas las palancas tienen la misma probabilidad de éxito"
    ],
    "correctIndex": 2,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Queda atrapado en el primer buen resultado encontrado — nunca vuelve a explorar, nunca descubre si hay algo mejor». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 14,
    "question": "La Fórmula 1 del Reinicio Aleatorio establece que E[R] = 1/p. Si p = 0.1, ¿cuántos intentos se necesitan en promedio para el primer éxito?",
    "options": [
      "1 intento",
      "5 intentos",
      "10 intentos",
      "100 intentos"
    ],
    "correctIndex": 2,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «10 intentos». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 15,
    "question": "¿Qué caracteriza al pensamiento estratégico en una organización?",
    "options": [
      "Optimiza las operaciones diarias para reducir costos y mejorar eficiencia inmediata",
      "Analiza el entorno y toma decisiones que generen ventajas competitivas sostenibles — anticipa el futuro en lugar de solo gestionarlo",
      "Define los KPI que cada equipo debe medir para alcanzar sus metas mensuales",
      "Reemplaza al liderazgo humano con algoritmos de inteligencia artificial"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Analiza el entorno y toma decisiones que generen ventajas competitivas sostenibles — anticipa el futuro en lugar de solo gestionarlo». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 16,
    "question": "En el problema de despacho energético de XM y Ecopetrol, ¿cuáles son los tres tipos de plantas de energía evaluadas?",
    "options": [
      "Nuclear, eólica y geotérmica",
      "Agua (hidroeléctrica), gas (térmica) y sol (solar)",
      "Carbón, petróleo y gas natural",
      "Eólica, biomasa y geotérmica"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Agua (hidroeléctrica), gas (térmica) y sol (solar)». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 17,
    "question": "El perfil de Ingeniero MLOps requiere principalmente:",
    "options": [
      "Python o R, estadística, visualización de datos",
      "Visión de negocio, Scrum/Agile, empatía con el usuario",
      "DevOps + Machine Learning, Docker, Kubernetes, CI/CD y monitoreo de modelos en producción",
      "Lógica y pensamiento estructurado, dominio del lenguaje, curiosidad por la IA"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «DevOps + Machine Learning, Docker, Kubernetes, CI/CD y monitoreo de modelos en producción». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 18,
    "question": "¿Cuál es la complejidad computacional de Value Iteration por iteración?",
    "options": [
      "O(|S|²·|A|)",
      "O(|S|·|A|)",
      "O(|S|²·|A|) — por cada estado, acción y estado destino",
      "O(|A|²·|S|)"
    ],
    "correctIndex": 2,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «O(|S|²·|A|) — por cada estado, acción y estado destino». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 19,
    "question": "Un gestor de portafolio que redistribuye capital diariamente según los precios actuales del mercado es un ejemplo de MDP porque:",
    "options": [
      "Conoce con certeza cómo cambiará el mercado mañana",
      "Su estado son los precios actuales, su acción es cómo distribuir el capital, y el resultado futuro es estocástico",
      "No necesita probabilidades porque solo usa promedios históricos",
      "Aplica Hill Climbing para maximizar el retorno diario"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Su estado son los precios actuales, su acción es cómo distribuir el capital, y el resultado futuro es estocástico». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 20,
    "question": "¿Dónde trabaja en Colombia un Analista de Datos con IA (AI Data Analyst)?",
    "options": [
      "Rappi, Nequi, startups de tecnología financiera",
      "Empresas de outsourcing tecnológico, Mercado Libre, plataformas de e-learning",
      "TransMilenio, Bancolombia, startups fintech, retail (D1, Jumbo)",
      "Ecopetrol, Claro, grandes integradores tecnológicos"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «TransMilenio, Bancolombia, startups fintech, retail (D1, Jumbo)». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 21,
    "question": "En el contexto del algoritmo Hill Climbing, una 'meseta' (plateau) es:",
    "options": [
      "Una zona con muchos vecinos de mayor altura que guían fácilmente al óptimo",
      "Un terreno plano donde el suelo no sube ni baja — el algoritmo no sabe hacia dónde ir",
      "El punto de inicio aleatorio del algoritmo de Reinicio Aleatorio",
      "Una zona con recompensa negativa que el algoritmo siempre evita"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Un terreno plano donde el suelo no sube ni baja — el algoritmo no sabe hacia dónde ir». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 22,
    "question": "¿Qué hace un Ingeniero MLOps?",
    "options": [
      "Diseña instrucciones para modelos de lenguaje y las optimiza",
      "Garantiza que los modelos de IA funcionen correctamente al salir del laboratorio, monitoreando rendimiento y manteniendo la infraestructura",
      "Ayuda a empresas a incorporar la IA en sus procesos estratégicos",
      "Dirige el desarrollo de productos que usan IA conectando equipo técnico con el negocio"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Garantiza que los modelos de IA funcionen correctamente al salir del laboratorio, monitoreando rendimiento y manteniendo la infraestructura». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 23,
    "question": "¿Qué calcula la función de valor V(s)?",
    "options": [
      "La recompensa inmediata que recibe el agente al estar en el estado s",
      "La recompensa acumulada esperada desde el estado s actuando óptimamente",
      "La probabilidad de llegar al estado s desde el estado inicial",
      "El número de pasos necesarios para alcanzar el estado terminal"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «La recompensa acumulada esperada desde el estado s actuando óptimamente». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 24,
    "question": "Según el dato BID 2025, ¿cuál es la situación de Colombia en transformación digital respecto a Latinoamérica?",
    "options": [
      "Colombia está en el puesto medio de transformación digital",
      "Colombia lidera la transición digital en Latinoamérica — es una ventaja, no una amenaza",
      "Colombia tiene el 58% de empleos en transformación, la tasa más baja de la región",
      "Colombia depende principalmente de exportación de talento técnico"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Colombia lidera la transición digital en Latinoamérica — es una ventaja, no una amenaza». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 25,
    "question": "¿Qué perfil profesional de IA contratan principalmente la Superintendencia de Industria y Comercio, los grandes bancos y consultoras como Deloitte en Colombia?",
    "options": [
      "Científico de Datos",
      "Arquitecto de Soluciones de IA",
      "Especialista en Ética de IA",
      "Gerente de Producto de IA"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Especialista en Ética de IA». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 26,
    "question": "El ejemplo del hospital que mide el 'tiempo promedio de atención en urgencias' ilustra:",
    "options": [
      "Un KPI de Innovación porque mejora la velocidad de atención con tecnología",
      "Un KPI de Cliente que funciona como indicador crítico de servicio para ese sector",
      "Un OKR financiero porque reduce costos de atención médica",
      "Un KPI Operativo que no tiene relación con la satisfacción del paciente"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Un KPI de Cliente que funciona como indicador crítico de servicio para ese sector». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 27,
    "question": "¿Cuántos elementos componen la tupla formal de un MDP?",
    "options": [
      "Tres: estados, acciones y recompensa",
      "Cuatro: estados, acciones, transición y recompensa",
      "Cinco: S, A, P, R y gamma",
      "Seis: S, A, P, R, gamma y política"
    ],
    "correctIndex": 2,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Cinco: S, A, P, R y gamma». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 28,
    "question": "La variante ε-Decreciente tiene la fórmula ε_t = ε_0/t. Si ε_0 = 6.0, ¿cuál es el valor de ε en el paso t=100?",
    "options": [
      "0.60",
      "0.06",
      "6.0",
      "0.006"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «0.06». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 29,
    "question": "En el problema de las 8 Reinas, Hill Climbing simple falla el 86% de las veces. Con p = 0.14, ¿cuántos reinicios se necesitan en promedio?",
    "options": [
      "14 reinicios",
      "7 reinicios",
      "1 reinicio",
      "100 reinicios"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «7 reinicios». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 30,
    "question": "En la Fórmula 3 del Reinicio Aleatorio, N ≥ ln(1-c)/ln(1-p) sirve para:",
    "options": [
      "Calcular el número promedio de reinicios hasta el primer éxito",
      "Determinar cuántos reinicios se necesitan para estar casi seguros (nivel de confianza c) de encontrar la cima global",
      "Estimar la probabilidad de ganar en exactamente N intentos",
      "Calcular el tiempo de cómputo total del algoritmo"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Determinar cuántos reinicios se necesitan para estar casi seguros (nivel de confianza c) de encontrar la cima global». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 31,
    "question": "En Policy Iteration, la fase de Policy Improvement busca una política nueva π' tal que:",
    "options": [
      "V^π'(s) < V^π(s) para algún estado s",
      "V^π'(s) ≥ V^π(s) para todo estado s, con al menos una mejora estricta",
      "La nueva política elige siempre la acción de menor costo",
      "V^π'(s) = 0 para los estados terminales"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «V^π'(s) ≥ V^π(s) para todo estado s, con al menos una mejora estricta». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 32,
    "question": "El caso Blockbuster vs Netflix ilustra:",
    "options": [
      "Cómo los KPI operativos pueden salvar una empresa en crisis",
      "Cómo tener buenos indicadores de rentabilidad física pero no desarrollar estrategia digital frente al crecimiento del streaming fue fatal para Blockbuster",
      "Cómo los OKR fueron adoptados por Netflix para superar a Blockbuster",
      "Cómo el pensamiento estratégico garantiza siempre la supervivencia empresarial"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Cómo tener buenos indicadores de rentabilidad física pero no desarrollar estrategia digital frente al crecimiento del streaming fue fatal para Blockbuster». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 33,
    "question": "En Thompson Sampling, la fórmula de la media de Beta(α, β) es E[Beta(α,β)] = α/(α+β). Si Davivienda observó α=82 éxitos y β=18 fracasos para el Segmento A, ¿cuál es la media posterior estimada?",
    "options": [
      "0.82",
      "0.18",
      "0.60",
      "4.56"
    ],
    "correctIndex": 0,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «0.82». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 34,
    "question": "¿Cuáles son las cuatro características que distinguen a los OKR?",
    "options": [
      "Cuantitativos, anuales, jerárquicos y evaluados por el CEO",
      "Ambiciosos, claros y comprensibles, medibles y transparentes",
      "Operativos, financieros, de cliente y de innovación",
      "Corto plazo, largo plazo, internos y externos"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Ambiciosos, claros y comprensibles, medibles y transparentes». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 35,
    "question": "¿Qué significa p en las fórmulas del Reinicio Aleatorio?",
    "options": [
      "El número de pasos por reinicio",
      "La probabilidad de que un solo intento (reinicio) encuentre la zona de la montaña global",
      "El parámetro de descuento temporal del algoritmo",
      "La penalización aplicada por cada reinicio adicional"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «La probabilidad de que un solo intento (reinicio) encuentre la zona de la montaña global». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 36,
    "question": "En una empresa de logística cuyo objetivo estratégico es 'Convertirse en el servicio de entrega más rápido del país', ¿cuál de los siguientes sería un KPI asociado correcto?",
    "options": [
      "Reducir tiempo de entrega, ampliar cobertura nacional y mejorar experiencia del cliente",
      "Tiempo promedio de entrega, porcentaje de entregas a tiempo y satisfacción del cliente",
      "Aumentar ventas online 30%, mejorar satisfacción al 90% y reducir fallas en 50%",
      "DevOps, Machine Learning, Docker y CI/CD"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Tiempo promedio de entrega, porcentaje de entregas a tiempo y satisfacción del cliente». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 37,
    "question": "El dilema de la emisora universitaria en Cali ilustra el balance exploración-explotación porque:",
    "options": [
      "La emisora conoce con exactitud el 99% de posible audiencia de la canción nueva",
      "La canción clásica garantiza audiencia conocida (82%), pero la canción nueva podría captar hasta un 99% o solo un 40%, y explorar tiene un costo real de oyentes perdidos",
      "La emisora usa Thompson Sampling para decidir qué canción poner cada hora",
      "La exploración no tiene costo en radio porque la audiencia no cambia con el contenido"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «La canción clásica garantiza audiencia conocida (82%), pero la canción nueva podría captar hasta un 99% o solo un 40%, y explorar tiene un costo real de oyentes perdidos». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 38,
    "question": "¿Qué valor de gamma (γ) indica que el agente valora el futuro casi tanto como el presente?",
    "options": [
      "γ = 0",
      "γ = 0.5",
      "γ = 1",
      "γ = -1"
    ],
    "correctIndex": 2,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «γ = 1». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 39,
    "question": "¿Por qué fracasan estratégicamente las organizaciones en su gestión con indicadores?",
    "options": [
      "Por falta de presupuesto tecnológico y herramientas de medición",
      "Por exceso de indicadores que generan confusión, indicadores no alineados con valor, actividad medida en lugar de resultados y falta de alineación entre departamentos",
      "Por no adoptar metodologías ágiles como Scrum y Kanban",
      "Por depender demasiado de consultoras externas en lugar de talento interno"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Por exceso de indicadores que generan confusión, indicadores no alineados con valor, actividad medida en lugar de resultados y falta de alineación entre departamentos». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 40,
    "question": "En el problema de optimización de rutas de domicilios de Rappi, ¿cómo aplica el Reinicio Aleatorio?",
    "options": [
      "Ajustando la velocidad de los domiciliarios en tiempo real con velocidad variable",
      "Trazando una ruta inicial al azar entre todos los puntos, 'desenredándola' para acortarla, luego reiniciando desde rutas completamente nuevas para encontrar rutas más cortas",
      "Calculando la ruta óptima con la ecuación de Bellman en cada entrega",
      "Usando Thompson Sampling para elegir qué ruta probar en cada domicilio"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Trazando una ruta inicial al azar entre todos los puntos, 'desenredándola' para acortarla, luego reiniciando desde rutas completamente nuevas para encontrar rutas más cortas». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 41,
    "question": "En el Problema Multi-Armed Bandit, ¿qué representa cada 'palanca' (acción)?",
    "options": [
      "Un estado diferente del entorno con probabilidades conocidas",
      "Una acción con distribución de recompensa desconocida que el agente debe estimar",
      "Una política completa que cubre todos los estados posibles",
      "Un umbral de recompensa que el agente no puede superar"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Una acción con distribución de recompensa desconocida que el agente debe estimar». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 42,
    "question": "¿Qué significa la sigla MDP en el contexto de la Inteligencia Artificial?",
    "options": [
      "Modelo de Decisión Probabilística",
      "Proceso de Decisión de Markov",
      "Método de Distribución de Política",
      "Modelo de Datos con Prioridad"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Proceso de Decisión de Markov». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 43,
    "question": "¿Cuál es la limitación estructural más importante de ε-Greedy que UCB1 resuelve?",
    "options": [
      "ε-Greedy no puede actualizarse de forma incremental",
      "ε-Greedy trata a todas las acciones con la misma probabilidad de exploración (ε/K) sin considerar cuánto se sabe de cada una — UCB1 dirige la exploración hacia las acciones más inciertas",
      "ε-Greedy no funciona en entornos estacionarios",
      "ε-Greedy requiere conocer el modelo de transición P del entorno"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «ε-Greedy trata a todas las acciones con la misma probabilidad de exploración (ε/K) sin considerar cuánto se sabe de cada una — UCB1 dirige la exploración hacia las acciones más inciertas». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 44,
    "question": "En el ejemplo numérico de MercadoLibre Colombia con 4 versiones de botón de pago (K=4, C=1), ¿cuál fue el UCB1 de la versión B en el paso t=5?",
    "options": [
      "1.177",
      "2.177",
      "1.0",
      "0.0"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «2.177». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 45,
    "question": "¿Cuál es el perfil requerido para un Científico de Datos (Data Scientist)?",
    "options": [
      "Cloud (AWS, Azure, GCP), APIs y microservicios",
      "Python avanzado, LLMs y APIs, lógica de flujos",
      "Python o R, estadística y probabilidad, visualización de datos",
      "SQL, herramientas de BI, comprensión de modelos predictivos"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Python o R, estadística y probabilidad, visualización de datos». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 46,
    "question": "En el ejemplo del laberinto de 3 estados (A, B, C) con γ = 0.9, ¿cuál es el valor inicial asignado al estado terminal C en la iteración 0?",
    "options": [
      "0",
      "0.9",
      "10",
      "5.83"
    ],
    "correctIndex": 0,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «0». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 47,
    "question": "¿Cuál es la regla única del algoritmo de Ascenso de Colina (Hill Climbing)?",
    "options": [
      "Dar un paso hacia el vecino con menor altura para explorar nuevas zonas",
      "Dar un paso aleatorio ignorando la altura de los vecinos",
      "Dar un paso hacia donde el suelo sube más — moverse siempre al vecino de mayor altura",
      "Reiniciar desde cero cada vez que no se puede mejorar"
    ],
    "correctIndex": 2,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Dar un paso hacia donde el suelo sube más — moverse siempre al vecino de mayor altura». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 48,
    "question": "¿Qué significan las siglas OKR?",
    "options": [
      "Operational Key Results",
      "Organizational Knowledge Resources",
      "Objectives and Key Results",
      "Output Key Reporting"
    ],
    "correctIndex": 2,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Objectives and Key Results». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 49,
    "question": "La fórmula UCB1 es: a_t = argmax_k [Q(k) + C·√(ln(t)/n_k)]. ¿Qué mide el término √(ln(t)/n_k)?",
    "options": [
      "El promedio de recompensas observadas para la acción k",
      "El bono de incertidumbre: crece cuando k ha sido poco explorada respecto al total de pasos",
      "El factor de descuento temporal aplicado a recompensas pasadas",
      "La probabilidad de que la acción k sea la óptima global"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «El bono de incertidumbre: crece cuando k ha sido poco explorada respecto al total de pasos». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 50,
    "question": "¿Qué hace la Parte A (Escalar) del algoritmo de Reinicio Aleatorio?",
    "options": [
      "Genera múltiples puntos de inicio aleatorios y los compara directamente",
      "Desde un punto de inicio dado, da pasos hacia el vecino más alto hasta que ningún vecino sea más alto que la posición actual — llega a una cima local",
      "Reinicia desde cero cada vez que el cambio en altura es menor a un épsilon",
      "Calcula la probabilidad de encontrar el óptimo desde cada punto de inicio"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Desde un punto de inicio dado, da pasos hacia el vecino más alto hasta que ningún vecino sea más alto que la posición actual — llega a una cima local». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 51,
    "question": "¿Qué propiedad fundamental cumple la función de transición P(s'|s, a) en todo MDP?",
    "options": [
      "La suma de las probabilidades sobre todas las acciones siempre es 1",
      "La suma de las probabilidades sobre todos los estados destino siempre es 1",
      "La función devuelve únicamente valores de 0 o 1",
      "La probabilidad es siempre igual para todos los estados destino"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «La suma de las probabilidades sobre todos los estados destino siempre es 1». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 52,
    "question": "¿Cuál de las siguientes afirmaciones describe correctamente el algoritmo Value Iteration?",
    "options": [
      "Mejora directamente la política hasta que ninguna acción la mejore",
      "Aplica repetidamente la ecuación de Bellman sobre los valores de todos los estados hasta convergencia",
      "Resuelve el sistema de ecuaciones lineales de Bellman en una sola pasada",
      "Requiere conocer la política óptima de antemano para calcular los valores"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Aplica repetidamente la ecuación de Bellman sobre los valores de todos los estados hasta convergencia». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 53,
    "question": "¿Cuál es la limitación principal de los KPI en la gestión organizacional?",
    "options": [
      "Los KPI son demasiado costosos de calcular para pequeñas empresas",
      "Los KPI miden desempeño actual pero no necesariamente definen la dirección estratégica — miden desempeño, pero no definen estrategia",
      "Los KPI solo funcionan para empresas del sector tecnológico",
      "Los KPI no pueden compararse entre períodos de tiempo distintos"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Los KPI miden desempeño actual pero no necesariamente definen la dirección estratégica — miden desempeño, pero no definen estrategia». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 54,
    "question": "XM y Ecopetrol usan Reinicio Aleatorio para decidir qué plantas de energía encender. ¿Por qué este algoritmo es adecuado para ese problema?",
    "options": [
      "Porque el algoritmo garantiza encontrar la combinación óptima de plantas en el primer intento",
      "Porque hay combinaciones de plantas de agua, gas y sol con distintos costos, y reiniciando desde varias combinaciones al azar se encuentran escenarios de menor costo",
      "Porque XM usa Bellman para calcular el valor de cada combinación de plantas",
      "Porque el número de plantas es tan pequeño que cualquier algoritmo lo resuelve igual"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Porque hay combinaciones de plantas de agua, gas y sol con distintos costos, y reiniciando desde varias combinaciones al azar se encuentran escenarios de menor costo». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 55,
    "question": "La garantía teórica de UCB1 establece que el Regret crece como O(ln T). ¿Por qué esto es mejor que Greedy Puro?",
    "options": [
      "Porque O(ln T) crece más rápido que O(T), acumulando más recompensa",
      "Porque O(ln T) crece sublinealmente — la tasa de costo por paso disminuye con el tiempo, mientras que Greedy Puro puede tener Regret O(T) creciendo linealmente",
      "Porque UCB1 garantiza encontrar la acción óptima en exactamente ln(T) pasos",
      "Porque Greedy Puro también tiene Regret O(ln T) pero con constante mayor"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Porque O(ln T) crece sublinealmente — la tasa de costo por paso disminuye con el tiempo, mientras que Greedy Puro puede tener Regret O(T) creciendo linealmente». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 56,
    "question": "¿Cuál es la diferencia principal entre el Recocido Simulado y el Reinicio Aleatorio?",
    "options": [
      "El Recocido Simulado usa probabilidades Bayesianas; el Reinicio Aleatorio no",
      "El Recocido Simulado permite ocasionalmente bajar un poco (aceptar peor solución) para escapar de trampas; el Reinicio Aleatorio siempre sube y solo escapa reiniciando desde cero",
      "El Reinicio Aleatorio garantiza el óptimo global; el Recocido Simulado no",
      "Son idénticos matemáticamente pero difieren solo en el número de iteraciones"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «El Recocido Simulado permite ocasionalmente bajar un poco (aceptar peor solución) para escapar de trampas; el Reinicio Aleatorio siempre sube y solo escapa reiniciando desde cero». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 57,
    "question": "La 'Búsqueda en Haz' (Beam Search), algoritmo relacionado con el Reinicio Aleatorio, se diferencia de este porque:",
    "options": [
      "Solo usa un punto de inicio y nunca reinicia",
      "Mandamos varios exploradores al mismo tiempo y nos concentramos en los que van mejor — más potente pero usa más recursos",
      "Garantiza encontrar el óptimo global en tiempo polinomial",
      "Reduce la temperatura gradualmente como el Recocido Simulado"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Mandamos varios exploradores al mismo tiempo y nos concentramos en los que van mejor — más potente pero usa más recursos». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 58,
    "question": "¿Qué significan las siglas KPI?",
    "options": [
      "Key Project Indicator",
      "Key Performance Indicator",
      "Key Progress Index",
      "Knowledge Performance Interface"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Key Performance Indicator». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 59,
    "question": "¿Cuál es la diferencia principal entre una solución del tipo plan y una política en un MDP?",
    "options": [
      "Un plan cubre todos los estados posibles; una política solo los más frecuentes",
      "Un plan es una secuencia fija de acciones; una política indica qué hacer en cada estado posible",
      "Una política es estocástica; un plan siempre es determinista",
      "Un plan usa la ecuación de Bellman; una política no la necesita"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Un plan es una secuencia fija de acciones; una política indica qué hacer en cada estado posible». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 60,
    "question": "Rappi Colombia evaluó 5 versiones de mensajes push (A al E). ¿Cuál era la versión con µ* = 0.80 (la mejor, desconocida para el agente)?",
    "options": [
      "Versión A: descuento 20% en restaurantes",
      "Versión B: recordatorio de favoritos",
      "Versión D: oferta flash 2 horas",
      "Versión C: producto nuevo recomendado"
    ],
    "correctIndex": 3,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Versión C: producto nuevo recomendado». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 61,
    "question": "¿Cómo se complementan KPI y OKR en una organización?",
    "options": [
      "Los KPI reemplazan a los OKR cuando la empresa madura",
      "Los OKR definen objetivos estratégicos ambiciosos mientras los KPI ayudan a medir el progreso hacia esos objetivos — la combinación conecta estrategia con ejecución",
      "Los OKR y KPI son sistemas alternativos — usar uno hace innecesario el otro",
      "Los KPI definen la estrategia y los OKR la ejecutan"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Los OKR definen objetivos estratégicos ambiciosos mientras los KPI ayudan a medir el progreso hacia esos objetivos — la combinación conecta estrategia con ejecución». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 62,
    "question": "¿Qué distingue la Función Q*(s, a) de la Función V*(s)?",
    "options": [
      "Q*(s,a) mide el valor de un estado; V*(s) mide el valor de una acción",
      "Q*(s,a) mide el valor de tomar la acción a en el estado s y luego actuar óptimamente; V*(s) mide el valor del estado bajo política óptima",
      "V*(s) requiere conocer el modelo P; Q*(s,a) no lo necesita nunca",
      "Son idénticas matemáticamente para MDPs finitos"
    ],
    "correctIndex": 1,
    "topic": "General",
    "explanation": "La respuesta correcta es «Q*(s,a) mide el valor de tomar la acción a en el estado s y luego actuar óptimamente; V*(s) mide el valor del estado bajo política óptima». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 63,
    "question": "¿Cuál de los siguientes algoritmos MAB tiene la mayor complejidad de implementación?",
    "options": [
      "Greedy Puro",
      "Exploración Aleatoria",
      "ε-Greedy (ε constante)",
      "Thompson Sampling"
    ],
    "correctIndex": 3,
    "topic": "General",
    "explanation": "La respuesta correcta es «Thompson Sampling». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 64,
    "question": "Davivienda usó ε-Greedy para optimizar ofertas de crédito digital. Con 50.000 sesiones, ¿qué resultados obtuvo la versión C (personalizada)?",
    "options": [
      "18% de tasa de conversión, capturando el 93.3% del tráfico",
      "88% del tráfico concentrado con 0.18 de conversión",
      "12% de conversión, identificada como la versión subóptima",
      "3.3% del tráfico con 0.066 de conversión"
    ],
    "correctIndex": 0,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «18% de tasa de conversión, capturando el 93.3% del tráfico». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 65,
    "question": "Un Especialista en Ética de IA trabaja garantizando que los sistemas de IA sean:",
    "options": [
      "Más eficientes en velocidad de procesamiento y costos de infraestructura",
      "Justos, transparentes y responsables; revisa sesgos, impactos sociales y cumplimiento regulatorio",
      "Capaces de operar sin intervención humana de manera autónoma",
      "Desplegados correctamente en entornos cloud con alta disponibilidad"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Justos, transparentes y responsables; revisa sesgos, impactos sociales y cumplimiento regulatorio». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 66,
    "question": "¿Qué hace un Ingeniero de Prompts (Prompt Engineer)?",
    "options": [
      "Desarrolla la arquitectura de redes neuronales de los modelos de lenguaje",
      "Diseña, prueba y optimiza las instrucciones que se dan a los modelos de IA para obtener los mejores resultados",
      "Garantiza que los sistemas de IA funcionen correctamente en producción",
      "Analiza grandes volúmenes de datos para encontrar patrones estadísticos"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Diseña, prueba y optimiza las instrucciones que se dan a los modelos de IA para obtener los mejores resultados». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 67,
    "question": "¿Por qué entender el contexto colombiano es una ventaja competitiva para los profesionales de IA?",
    "options": [
      "Porque Colombia tiene el mayor mercado de IA de América Latina en términos de inversión",
      "Porque el contexto local colombiano es una ventaja competitiva real en el mercado latinoamericano",
      "Porque las empresas colombianas pagan los salarios más altos de la región",
      "Porque Colombia tiene más universidades técnicas que cualquier otro país latinoamericano"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Porque el contexto local colombiano es una ventaja competitiva real en el mercado latinoamericano». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 68,
    "question": "¿Cuál es la diferencia principal entre KPI y OKR?",
    "options": [
      "Los KPI son cuantitativos y los OKR son cualitativos",
      "KPI mide desempeño operativo actual y monitorea procesos; OKR define objetivos estratégicos, impulsa cambio organizacional y orienta prioridades",
      "Los OKR solo se usan en empresas tecnológicas; los KPI son universales",
      "Los KPI se revisan anualmente; los OKR se revisan diariamente"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «KPI mide desempeño operativo actual y monitorea procesos; OKR define objetivos estratégicos, impulsa cambio organizacional y orienta prioridades». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 69,
    "question": "¿Cuál es la diferencia entre medir y gestionar estratégicamente en una organización?",
    "options": [
      "Medir es suficiente para gestionar; gestionar estratégicamente es lo mismo que medir más frecuentemente",
      "Medir es registrar números; gestionar estratégicamente significa usar esos números para aprender, corregir y dirigir la organización hacia sus objetivos",
      "La gestión estratégica no requiere métricas; se basa solo en la intuición del liderazgo",
      "Medir aplica solo a procesos operativos; gestionar estratégicamente aplica solo a finanzas"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Medir es registrar números; gestionar estratégicamente significa usar esos números para aprender, corregir y dirigir la organización hacia sus objetivos». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 70,
    "question": "¿Qué tipo de KPI incluye lanzamiento de nuevos productos, inversión en investigación y velocidad de desarrollo?",
    "options": [
      "KPI Financieros",
      "KPI Operativos",
      "KPI de Innovación",
      "KPI de Cliente"
    ],
    "correctIndex": 2,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «KPI de Innovación». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 71,
    "question": "El caso de Bancolombia con asignación de turnos de asesores ilustra Reinicio Aleatorio porque:",
    "options": [
      "El banco usa Hill Climbing para asignar tasas de interés optimizadas",
      "Reiniciando desde varias organizaciones de turno al azar e intercambiando asignaciones, se encuentra un cuadro de turnos que cumple reglas duras y maximiza reglas blandas",
      "Bancolombia aplica Value Iteration para calcular la política de turnos óptima",
      "El algoritmo garantiza encontrar el cuadro de turnos perfecto en el primer intento"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Reiniciando desde varias organizaciones de turno al azar e intercambiando asignaciones, se encuentra un cuadro de turnos que cumple reglas duras y maximiza reglas blandas». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 72,
    "question": "Según el Foro Económico Mundial (2025), ¿qué porcentaje de los empleos de 2030 aún no existe?",
    "options": [
      "56%",
      "58%",
      "85%",
      "70%"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «85%». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 73,
    "question": "¿Cuál es la prima salarial adicional para roles con habilidades en IA según el Foro Económico Mundial (2025)?",
    "options": [
      "85%",
      "58%",
      "70%",
      "56%"
    ],
    "correctIndex": 3,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «56%». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 74,
    "question": "¿Cuál es el perfil requerido para un Entrenador / Curador de IA (AI Trainer)?",
    "options": [
      "Python avanzado, LLMs, lógica de flujos y automatización",
      "Atención al detalle, conocimiento del dominio (salud, finanzas, logística), pensamiento crítico",
      "Cloud (AWS, Azure, GCP), conocimiento de APIs y microservicios",
      "SQL, herramientas de BI (Power BI, Tableau), comunicación efectiva"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Atención al detalle, conocimiento del dominio (salud, finanzas, logística), pensamiento crítico». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 75,
    "question": "La Ecuación de Bellman de Optimalidad se expresa como V*(s) = max_a ΣP(s'|s,a)[R(s,a,s') + γ·V*(s')]. ¿Qué término elige la mejor acción en esta fórmula?",
    "options": [
      "ΣP(s'|s,a)",
      "max_a",
      "γ·V*(s')",
      "R(s,a,s')"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «max_a». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 76,
    "question": "En la analogía del mapa de calor de Bogotá para ilustrar la función de valor, ¿qué representa la Zona Roja?",
    "options": [
      "Zona segura con buenas oportunidades y transporte eficiente",
      "Zona promedio con valor medio",
      "Zona peligrosa con poco trabajo y alto costo de vida — valor bajo",
      "Zona terminal donde el agente recibe recompensa máxima"
    ],
    "correctIndex": 2,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Zona peligrosa con poco trabajo y alto costo de vida — valor bajo». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 77,
    "question": "La analogía del jugador de ajedrez Magnus Carlsen ilustra la función V*(s) porque:",
    "options": [
      "Carlsen calcula todos los árboles de juego hasta el final antes de mover",
      "Carlsen tiene en su mente una estimación de cuánto vale cada posición, que es exactamente lo que hace V*(s)",
      "Carlsen usa Policy Iteration para mejorar su estrategia entre partidas",
      "Carlsen aplica exploración aleatoria cuando desconoce la posición del rival"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Carlsen tiene en su mente una estimación de cuánto vale cada posición, que es exactamente lo que hace V*(s)». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 78,
    "question": "¿Qué significa que Value Iteration converge cuando γ < 1?",
    "options": [
      "Los valores de todos los estados llegan a cero",
      "La política deja de mejorar antes de que los valores converjan",
      "El error en V se reduce por un factor de γ en cada iteración, garantizando convergencia",
      "El número de iteraciones es siempre menor a 10"
    ],
    "correctIndex": 2,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «El error en V se reduce por un factor de γ en cada iteración, garantizando convergencia». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 79,
    "question": "Un Entrenador / Curador de IA (AI Trainer / Data Curator) trabaja principalmente en:",
    "options": [
      "Diseño de la arquitectura técnica de los sistemas de IA en la nube",
      "Asegurar que los datos con los que aprende la IA sean correctos, imparciales y útiles",
      "Desarrollar agentes autónomos que toman decisiones sin intervención humana",
      "Garantizar que los modelos de IA funcionen en producción monitoreando su rendimiento"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Asegurar que los datos con los que aprende la IA sean correctos, imparciales y útiles». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 80,
    "question": "El perfil de Desarrollador de Agentes de IA (AI Agent Developer) requiere principalmente:",
    "options": [
      "SQL, herramientas de BI y comunicación efectiva",
      "Visión de negocio, gestión de proyectos (Scrum, Agile) y empatía con el usuario",
      "Python avanzado, LLMs y APIs como OpenAI, Anthropic y Gemini, lógica de flujos",
      "DevOps, Machine Learning, Docker, Kubernetes y CI/CD"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Python avanzado, LLMs y APIs como OpenAI, Anthropic y Gemini, lógica de flujos». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 81,
    "question": "En la metáfora de la montaña usada para explicar optimización local, ¿qué representa la 'montaña más alta'?",
    "options": [
      "El número máximo de reinicios permitidos por el algoritmo",
      "La mejor solución posible al problema — el óptimo global",
      "Un estado intermedio con buena recompensa pero no óptimo",
      "El punto de partida aleatorio del algoritmo"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «La mejor solución posible al problema — el óptimo global». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 82,
    "question": "En Thompson Sampling, ¿qué representa la distribución Beta(α, β)?",
    "options": [
      "La distribución de probabilidad sobre los posibles valores de recompensa inmediata",
      "Una distribución de probabilidad sobre el intervalo [0,1] que modela la creencia del agente sobre la probabilidad de éxito de una acción",
      "El número de veces que el agente ha elegido la acción k dividido por el total de pasos",
      "La función de transición estocástica del entorno del MAB"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Una distribución de probabilidad sobre el intervalo [0,1] que modela la creencia del agente sobre la probabilidad de éxito de una acción». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 83,
    "question": "¿Quién desarrolló el sistema OKR originalmente y en qué empresa?",
    "options": [
      "John Doerr en Google durante sus primeros años",
      "Andy Grove en Intel durante los años 70",
      "Jeff Bezos en Amazon como sistema de gestión de proyectos",
      "Satya Nadella en Microsoft para alinear equipos globales"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Andy Grove en Intel durante los años 70». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 84,
    "question": "¿Cuándo conviene usar el algoritmo de Reinicio Aleatorio?",
    "options": [
      "Cuando el espacio de búsqueda es pequeño y el óptimo es fácil de encontrar",
      "Cuando hay muchas trampas (cimas pequeñas) pero el premio es raro aunque existe — el reinicio es barato y puede repetirse en varias computadoras",
      "Cuando se necesita garantía matemática de encontrar el óptimo global en exactamente N pasos",
      "Solo cuando el problema tiene menos de 100 estados posibles"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Cuando hay muchas trampas (cimas pequeñas) pero el premio es raro aunque existe — el reinicio es barato y puede repetirse en varias computadoras». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 85,
    "question": "¿Cuál es la fórmula de actualización incremental del valor estimado Q(k) en ε-Greedy?",
    "options": [
      "Q_nuevo(k) = Q(k) + (1/n)·(r - Q(k))",
      "Q_nuevo(k) = Q(k) · (1 - 1/n) + r/n",
      "Q_nuevo(k) = r · n + Q(k) · (1 - n)",
      "Q_nuevo(k) = Q(k) + gamma · (r - Q(k))"
    ],
    "correctIndex": 0,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Q_nuevo(k) = Q(k) + (1/n)·(r - Q(k))». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 86,
    "question": "¿Cuándo termina el algoritmo Policy Iteration?",
    "options": [
      "Se alcanza un número fijo de iteraciones preestablecido",
      "Los valores V(s) convergen con tolerancia épsilon",
      "Un ciclo completo de evaluación y mejora no produce ningún cambio en la política",
      "La recompensa acumulada supera un umbral definido por el usuario"
    ],
    "correctIndex": 2,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Un ciclo completo de evaluación y mejora no produce ningún cambio en la política». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 87,
    "question": "Según el panorama actual del mercado laboral en IA, la inteligencia artificial no reemplaza ingenieros, sino que:",
    "options": [
      "Reduce el número de ingenieros necesarios en un 58%",
      "Crea ingenieros nuevos con perfiles más especializados",
      "Automatiza el 85% del trabajo de programación actual",
      "Transfiere las tareas de los ingenieros a los gerentes de producto"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Crea ingenieros nuevos con perfiles más especializados». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 88,
    "question": "El GPS que sugiere rutas en Bogotá bajo lluvia es un ejemplo de MDP porque:",
    "options": [
      "Conoce con certeza el tiempo de llegada a cualquier destino",
      "Su estado es la posición, su acción es la ruta elegida y la incertidumbre es el tráfico",
      "Calcula la ruta más corta sin considerar probabilidades",
      "Aplica Hill Climbing para optimizar el recorrido"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Su estado es la posición, su acción es la ruta elegida y la incertidumbre es el tráfico». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 89,
    "question": "¿Cuántos perfiles profesionales reales relacionados con IA están naciendo en Colombia y Latinoamérica?",
    "options": [
      "7",
      "8",
      "10",
      "12"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «10». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 90,
    "question": "¿Cuáles son los dos métodos para resolver la fase de Policy Evaluation?",
    "options": [
      "Value Iteration y Q-Learning",
      "Método iterativo (como Value Iteration con π fija) y método exacto (inversión de matriz)",
      "Simulación de Monte Carlo y programación dinámica",
      "Greedy Puro y ε-Greedy"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Método iterativo (como Value Iteration con π fija) y método exacto (inversión de matriz)». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 91,
    "question": "El Consultor de Transformación con IA (AI Transformation Consultant) trabaja en Colombia en:",
    "options": [
      "Empresas de tecnología, sector financiero, salud, e-commerce",
      "Consultoras como McKinsey, Accenture, EY Colombia y sector público como SECOP, MinTIC",
      "Davivienda, Ecopetrol, Grupo Éxito",
      "Coordinadora, TCC, empresas de salud digital, logística"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Consultoras como McKinsey, Accenture, EY Colombia y sector público como SECOP, MinTIC». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 92,
    "question": "¿Qué habilidad tienen en común todos los roles profesionales de IA en Colombia, sin excepción?",
    "options": [
      "Programación avanzada en Python",
      "Dominio de plataformas cloud como AWS, Azure o GCP",
      "Comunicarse efectivamente, aprender continuamente, aplicar pensamiento crítico y entender el contexto local colombiano",
      "Conocimiento profundo de redes neuronales y modelos de lenguaje"
    ],
    "correctIndex": 2,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Comunicarse efectivamente, aprender continuamente, aplicar pensamiento crítico y entender el contexto local colombiano». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 93,
    "question": "En un paisaje representado con alturas [1,3,7,4,2,5,5,8,4,2], ¿cuál es la posición con la cima global?",
    "options": [
      "Posición 3 (altura 7)",
      "Posición 6 (altura 5)",
      "Posición 8 (altura 8)",
      "Posición 1 (altura 1)"
    ],
    "correctIndex": 2,
    "topic": "General",
    "explanation": "La respuesta correcta es «Posición 8 (altura 8)». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 94,
    "question": "Una empresa minorista en crisis establece un OKR con objetivo 'Recuperar liderazgo en el mercado'. ¿Cuáles serían sus Resultados Clave más adecuados?",
    "options": [
      "Contratar 20 asesores, lanzar campaña publicitaria y reducir precios en 15%",
      "Aumentar ventas online, mejorar satisfacción del cliente y optimizar logística",
      "Reducir tiempo de carga 20%, aumentar precisión 15%, mejorar experiencia móvil",
      "Reducir fallas del sistema 50%, aumentar satisfacción al 90% y mejorar velocidad 30%"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Aumentar ventas online, mejorar satisfacción del cliente y optimizar logística». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 95,
    "question": "¿Cuáles son los tres niveles que deben conectarse para traducir la visión organizacional en resultados concretos?",
    "options": [
      "Misión, visión y valores",
      "Visión estratégica, objetivos organizacionales (OKR) e indicadores de desempeño (KPI)",
      "Datos, algoritmos y decisiones",
      "Producto, proceso y persona"
    ],
    "correctIndex": 1,
    "topic": "General",
    "explanation": "La respuesta correcta es «Visión estratégica, objetivos organizacionales (OKR) e indicadores de desempeño (KPI)». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 96,
    "question": "Google adoptó los OKR desde sus primeros años y los usó para impulsar proyectos como:",
    "options": [
      "Android e iOS",
      "Gmail y Google Chrome",
      "Google Maps y Google Earth",
      "Google Ads y Google Analytics"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Gmail y Google Chrome». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 97,
    "question": "¿Cuál de los siguientes NO es uno de los cuatro caminos de perfil profesional en IA?",
    "options": [
      "Más técnico: Científico de Datos, MLOps, Arquitecto de IA",
      "Técnico + creativo: Prompt Engineer, AI Agent Developer",
      "Técnico + negocio: PM de IA, Consultor, Analista",
      "Técnico + legal: especialista en contratos de IA y propiedad intelectual"
    ],
    "correctIndex": 3,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Técnico + legal: especialista en contratos de IA y propiedad intelectual». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 98,
    "question": "¿Qué establece la condición de optimalidad de una política π*?",
    "options": [
      "V^π*(s) = 0 para todos los estados",
      "V^π*(s) ≥ V^π(s) para toda política π y todo estado s",
      "π* siempre elige la acción de menor costo inmediato",
      "V^π*(s) converge en exactamente 100 iteraciones"
    ],
    "correctIndex": 1,
    "topic": "General",
    "explanation": "La respuesta correcta es «V^π*(s) ≥ V^π(s) para toda política π y todo estado s». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 99,
    "question": "En el sistema de semáforos inteligentes de Bogotá, ¿qué representa la política del agente?",
    "options": [
      "El tiempo total de viaje acumulado por todos los vehículos",
      "Para cada configuración de tráfico, cuánto tiempo de verde dar a cada intersección",
      "El mapa completo de vías de la ciudad con sus capacidades",
      "La recompensa obtenida al reducir el tiempo de espera en un día"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Para cada configuración de tráfico, cuánto tiempo de verde dar a cada intersección». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 100,
    "question": "En un MDP, ¿qué representa el símbolo S?",
    "options": [
      "La función de recompensa",
      "El conjunto de estados posibles del entorno",
      "La secuencia de acciones del agente",
      "El factor de descuento temporal"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «El conjunto de estados posibles del entorno». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 101,
    "question": "¿Cuántas partes tiene el algoritmo de Reinicio Aleatorio?",
    "options": [
      "Una parte: solo escalar",
      "Dos partes: Parte A (escalar) y Parte B (reiniciar)",
      "Tres partes: inicializar, escalar y comparar",
      "Cuatro partes: inicializar, explorar, escalar y guardar"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Dos partes: Parte A (escalar) y Parte B (reiniciar)». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 102,
    "question": "¿Cuál es la diferencia principal entre Value Iteration y Policy Iteration?",
    "options": [
      "Value Iteration itera sobre políticas; Policy Iteration itera sobre valores",
      "Value Iteration actualiza valores con Bellman; Policy Iteration alterna entre evaluación completa y mejora de política",
      "Policy Iteration solo funciona en MDPs con pocos estados; Value Iteration no tiene límite",
      "Ambos algoritmos producen resultados distintos ante el mismo MDP"
    ],
    "correctIndex": 1,
    "topic": "MDP / Bellman",
    "explanation": "La respuesta correcta es «Value Iteration actualiza valores con Bellman; Policy Iteration alterna entre evaluación completa y mejora de política». En este tema (MDP / Bellman), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 103,
    "question": "Si el Objetivo de un OKR es 'Convertirnos en la plataforma digital más confiable del mercado', ¿cuáles serían sus tres Resultados Clave correctamente formulados?",
    "options": [
      "Aumentar ventas online 30%, mejorar satisfacción del cliente, optimizar logística",
      "Aumentar satisfacción cliente al 90%, reducir fallas del sistema en 50%, mejorar velocidad de respuesta en 30%",
      "Reducir tiempo de carga en 20%, aumentar precisión de resultados en 15%, mejorar experiencia móvil",
      "Lanzar 3 nuevas funciones, contratar 10 ingenieros y reducir costos operativos en 25%"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Aumentar satisfacción cliente al 90%, reducir fallas del sistema en 50%, mejorar velocidad de respuesta en 30%». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 104,
    "question": "¿En qué empresas colombianas trabaja un Arquitecto de Soluciones de IA?",
    "options": [
      "Rappi, Nequi, startups de tecnología financiera",
      "Ecopetrol, Claro, grandes integradores tecnológicos como IBM Colombia y Accenture",
      "TransMilenio, Bancolombia, D1, Jumbo",
      "Coordinadora, TCC, empresas de atención al cliente"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Ecopetrol, Claro, grandes integradores tecnológicos como IBM Colombia y Accenture». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 105,
    "question": "Un Gerente de Producto de IA (AI Product Manager) en Colombia trabaja principalmente en:",
    "options": [
      "Ecopetrol, Claro y grandes integradores tecnológicos",
      "Rappi, Nequi y startups de tecnología financiera (fintech)",
      "TransMilenio, Bancolombia y retail como D1 y Jumbo",
      "McKinsey, Accenture, EY Colombia y sector público"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Rappi, Nequi y startups de tecnología financiera (fintech)». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 106,
    "question": "¿Qué significa formalmente el Regret(T) en el contexto del MAB?",
    "options": [
      "La recompensa total acumulada durante T pasos",
      "El número de veces que el agente eligió la acción incorrecta",
      "La diferencia entre lo que habría ganado un oráculo (eligiendo siempre la mejor acción) y lo que realmente ganó el agente en T pasos",
      "El costo computacional del algoritmo de exploración"
    ],
    "correctIndex": 2,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «La diferencia entre lo que habría ganado un oráculo (eligiendo siempre la mejor acción) y lo que realmente ganó el agente en T pasos». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 107,
    "question": "¿En qué empresas colombianas puede trabajar un Ingeniero de Prompts?",
    "options": [
      "Davivienda, Ecopetrol, Grupo Éxito",
      "Bancolombia, startups de contenido, agencias digitales, Rappi",
      "TransMilenio, Bancolombia, startups fintech",
      "Coordinadora, TCC, empresas de salud digital"
    ],
    "correctIndex": 1,
    "topic": "Roles de IA",
    "explanation": "La respuesta correcta es «Bancolombia, startups de contenido, agencias digitales, Rappi». En este tema (Roles de IA), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 108,
    "question": "¿Qué son los Key Results (Resultados Clave) en la estructura OKR?",
    "options": [
      "Acciones específicas que el equipo debe ejecutar para cumplir el objetivo",
      "Resultados cuantificables, medibles y específicos que indican si el objetivo se está logrando",
      "Los KPI operativos que el equipo utiliza en su trabajo diario",
      "Los recursos (presupuesto, personal) asignados para alcanzar el objetivo"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Resultados cuantificables, medibles y específicos que indican si el objetivo se está logrando». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 109,
    "question": "¿Qué tipo de KPI mide ingresos, margen de ganancia y retorno sobre inversión?",
    "options": [
      "KPI Operativos",
      "KPI de Cliente",
      "KPI de Innovación",
      "KPI Financieros"
    ],
    "correctIndex": 3,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «KPI Financieros». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 110,
    "question": "¿Cuál es el costo de hacer más reinicios en el algoritmo de Reinicio Aleatorio?",
    "options": [
      "Mayor probabilidad de quedar atrapado en óptimos locales",
      "Mayor tiempo de cómputo — más reinicios = más tiempo, aunque también más probabilidad de encontrar el óptimo global",
      "Reducción del tamaño del espacio de búsqueda explorado",
      "Pérdida de la mejor solución encontrada hasta el momento"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Mayor tiempo de cómputo — más reinicios = más tiempo, aunque también más probabilidad de encontrar el óptimo global». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 111,
    "question": "¿Cuál es la garantía teórica de Regret del algoritmo UCB1?",
    "options": [
      "O(T) — crece linealmente",
      "O(T) con constante pequeña",
      "O(ln T) — demostrada teóricamente",
      "O(K·ln T) — depende del número de acciones"
    ],
    "correctIndex": 2,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «O(ln T) — demostrada teóricamente». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 112,
    "question": "¿Qué papel juega el líder estratégico en la gestión con KPI y OKR?",
    "options": [
      "Calcular manualmente todos los KPI y presentarlos en reuniones semanales",
      "Detectar problemas mediante indicadores, ajustar decisiones con base en datos y guiar la organización hacia los objetivos prioritarios",
      "Diseñar los algoritmos de inteligencia artificial que automatizarán las decisiones",
      "Eliminar indicadores obsoletos y reemplazarlos por nuevos cada trimestre"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Detectar problemas mediante indicadores, ajustar decisiones con base en datos y guiar la organización hacia los objetivos prioritarios». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 113,
    "question": "¿Cuál es el mecanismo de selección de Thompson Sampling en cada paso?",
    "options": [
      "Elegir la acción con mayor Q(k) estimado, con probabilidad 1-ε de explotar",
      "Elegir la acción cuyo UCB1 sea máximo",
      "Sortear un valor θ_k desde la distribución Beta de cada acción y elegir la acción con el mayor θ_k sorteado",
      "Elegir la acción menos explorada hasta equilibrar el número de observaciones"
    ],
    "correctIndex": 2,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Sortear un valor θ_k desde la distribución Beta de cada acción y elegir la acción con el mayor θ_k sorteado». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 114,
    "question": "La gran idea del Reinicio Aleatorio es:",
    "options": [
      "Aplicar la ecuación de Bellman desde múltiples puntos de inicio",
      "Si te quedas atrapado, volver a empezar desde otro punto al azar, hacerlo muchas veces y quedarse con la cima más alta de todos los intentos",
      "Explorar todos los vecinos simultáneamente en paralelo",
      "Reducir la temperatura gradualmente para evitar óptimos locales"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Si te quedas atrapado, volver a empezar desde otro punto al azar, hacerlo muchas veces y quedarse con la cima más alta de todos los intentos». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 115,
    "question": "¿Cuál es la diferencia principal entre ε constante y ε-decreciente?",
    "options": [
      "ε constante produce Regret O(ln T); ε-decreciente produce Regret O(T)",
      "ε constante mantiene la misma probabilidad de exploración siempre; ε-decreciente reduce la exploración con el tiempo, explorando mucho al inicio y explotando al final",
      "ε-decreciente es superior en todos los entornos; ε constante solo sirve en entornos estacionarios",
      "ε constante tiene Regret sublineal garantizado; ε-decreciente no garantiza convergencia"
    ],
    "correctIndex": 1,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «ε constante mantiene la misma probabilidad de exploración siempre; ε-decreciente reduce la exploración con el tiempo, explorando mucho al inicio y explotando al final». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 116,
    "question": "¿Cuál de las siguientes es una característica de un buen KPI?",
    "options": [
      "Ser lo más amplio posible para cubrir todas las áreas de la empresa",
      "Ser claramente medible, verificable, alineado con objetivos, comparable en el tiempo y orientado a decisiones",
      "Poder ser calculado solo una vez al año para evitar saturación de información",
      "Ser comprensible solo para el equipo de tecnología que lo genera"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «Ser claramente medible, verificable, alineado con objetivos, comparable en el tiempo y orientado a decisiones». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 117,
    "question": "¿Qué elemento clave distingue las 'decisiones bajo incertidumbre' de las 'decisiones bajo riesgo' ?",
    "options": [
      "En incertidumbre no hay recompensas; en riesgo sí",
      "En incertidumbre el agente no conoce las probabilidades ni la función de recompensa; en riesgo sí las conoce",
      "En incertidumbre el agente solo puede tomar una acción; en riesgo puede elegir entre varias",
      "Las decisiones bajo incertidumbre siempre producen peores resultados que las de riesgo"
    ],
    "correctIndex": 1,
    "topic": "General",
    "explanation": "La respuesta correcta es «En incertidumbre el agente no conoce las probabilidades ni la función de recompensa; en riesgo sí las conoce». En este tema (General), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 118,
    "question": "En ε-Greedy con ε = 0.10, ¿qué hace el agente el 10% del tiempo?",
    "options": [
      "Elige la acción con mayor valor estimado Q(k)",
      "Reinicia todos los valores estimados desde cero",
      "Elige una acción aleatoriamente entre todas las disponibles",
      "Elige la acción con menor valor estimado para explorar lo desconocido"
    ],
    "correctIndex": 2,
    "topic": "Multi-Armed Bandit",
    "explanation": "La respuesta correcta es «Elige una acción aleatoriamente entre todas las disponibles». En este tema (Multi-Armed Bandit), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 119,
    "question": "¿Qué ocurre cuando KPI y OKR se integran correctamente en una organización?",
    "options": [
      "Los KPI se vuelven obsoletos porque los OKR los reemplazan completamente",
      "La estrategia se vuelve medible y la ejecución transparente — la toma de decisiones mejora y la organización aprende continuamente",
      "La empresa reduce costos operativos automáticamente sin necesidad de cambios adicionales",
      "Los líderes ya no necesitan interpretar datos porque los algoritmos lo hacen por ellos"
    ],
    "correctIndex": 1,
    "topic": "KPI / OKR / Estrategia",
    "explanation": "La respuesta correcta es «La estrategia se vuelve medible y la ejecución transparente — la toma de decisiones mejora y la organización aprende continuamente». En este tema (KPI / OKR / Estrategia), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  },
  {
    "id": 120,
    "question": "XM, operador de la red eléctrica colombiana, evalúa cinco fuentes de generación renovable. ¿Por qué UCB1 es preferible sobre ε-Greedy para este tipo de problema?",
    "options": [
      "Porque UCB1 es más fácil de implementar que ε-Greedy en sistemas eléctricos",
      "Porque en sistemas de infraestructura crítica el volumen semanal es alto y no se puede 'desperdiciar' exploración en estrategias sistemáticamente inferiores como haría ε-Greedy",
      "Porque ε-Greedy no funciona cuando hay más de 3 opciones disponibles",
      "Porque UCB1 garantiza Regret cero en exactamente 10 semanas"
    ],
    "correctIndex": 1,
    "topic": "Optimización local",
    "explanation": "La respuesta correcta es «Porque en sistemas de infraestructura crítica el volumen semanal es alto y no se puede 'desperdiciar' exploración en estrategias sistemáticamente inferiores como haría ε-Greedy». En este tema (Optimización local), la clave está en identificar la definición o fórmula exacta que aparece en el enunciado. Esa opción coincide con el concepto evaluado; las demás opciones describen roles, algoritmos, métricas o propiedades diferentes."
  }
];
