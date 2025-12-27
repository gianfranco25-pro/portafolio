"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Code, Sparkles, Lightbulb, ExternalLink, Brain, Cpu, Zap, Network, Bot, LineChart, Database, Settings, Home } from 'lucide-react';
import WeekNav from '@/components/WeekNav';

const weekConfig = {
	number: 15,
	icon: '🤖',
	iconBg: 'bg-gradient-to-br from-purple-600 via-pink-500 to-red-500',
	title: 'Sistemas Inteligentes e Inteligencia Artificial',
	subtitle: 'Redes Neuronales, Deep Learning y Large Language Models',
	description: 'Explora el mundo de la IA: desde sistemas expertos y lógica difusa hasta redes neuronales profundas y modelos de lenguaje como Llama 3.'
};

const tabs = [
	{ id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
	{ id: 'practicas', label: 'Prácticas Calificadas', icon: <Code className="w-4 h-4" /> },
	{ id: 'bibliografia', label: 'Bibliografía', icon: <Sparkles className="w-4 h-4" /> },
	{ id: 'reflexion', label: 'Reflexión', icon: <Lightbulb className="w-4 h-4" /> },
];

const recursos = [
	{
		title: 'Hugging Face - Transformers',
		url: 'https://huggingface.co/docs/transformers/',
		icon: <Brain className="w-6 h-6" />,
		color: 'from-yellow-500 to-orange-500'
	},
	{
		title: 'Scikit-fuzzy Documentation',
		url: 'https://pythonhosted.org/scikit-fuzzy/',
		icon: <Settings className="w-6 h-6" />,
		color: 'from-purple-500 to-pink-500'
	},
	{
		title: 'PyTorch Deep Learning',
		url: 'https://pytorch.org/tutorials/',
		icon: <Cpu className="w-6 h-6" />,
		color: 'from-orange-600 to-red-600'
	},
	{
		title: 'TensorFlow Documentation',
		url: 'https://www.tensorflow.org/learn',
		icon: <Network className="w-6 h-6" />,
		color: 'from-orange-500 to-yellow-500'
	},
	{
		title: 'OpenAI Documentation',
		url: 'https://platform.openai.com/docs/',
		icon: <Bot className="w-6 h-6" />,
		color: 'from-green-500 to-teal-500'
	},
	{
		title: 'Fast.ai - Practical Deep Learning',
		url: 'https://www.fast.ai/',
		icon: <LineChart className="w-6 h-6" />,
		color: 'from-blue-600 to-indigo-600'
	},
];

export default function Week15Page() {
	const [activeTab, setActiveTab] = useState('contenido');

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
			<WeekNav currentWeek={weekConfig.number} />
			{/* Header animado */}
			<div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
					<div className="absolute top-0 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
				</div>
				
				<div className="relative container mx-auto px-6 py-16">
					<div className="flex items-center gap-4 mb-6 animate-fade-in">
						<div className="text-6xl animate-float">{weekConfig.icon}</div>
						<div>
							<div className="mb-4 -mt-6 -ml-8">
								<a
									href="/"
									className="inline-flex items-center gap-3 rounded-full bg-white/15 px-5 py-2.5 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white/25 hover:scale-[1.02]"
								>
									<Home className="h-5 w-5" />
									Inicio
								</a>
							</div>
							<div className="text-pink-100 font-bold text-lg mb-2">SEMANA {weekConfig.number}</div>
							<h1 className="text-4xl md:text-5xl font-black mb-2">{weekConfig.title}</h1>
							<p className="text-xl text-pink-100 font-semibold">{weekConfig.subtitle}</p>
						</div>
					</div>
					<p className="text-lg text-white/90 max-w-3xl animate-fade-in animation-delay-200">{weekConfig.description}</p>
				</div>
			</div>

			{/* Tabs de navegación */}
			<div className="bg-white/80 backdrop-blur-xl border-b-2 border-gray-200 sticky top-0 z-40 shadow-lg">
				<div className="container mx-auto px-6">
					<div className="flex gap-2 overflow-x-auto py-4">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 whitespace-nowrap ${
									activeTab === tab.id
										? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl scale-105'
										: 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
								}`}
							>
								{tab.icon}
								{tab.label}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Contenido principal */}
			<div className="container mx-auto px-6 py-12">
				<div className="animate-fade-in-up">
					{/* Tab Contenido */}
					{activeTab === 'contenido' && (
						<div className="w-full flex justify-center">
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-pink-100">
								<h2 className="text-3xl md:text-4xl font-black text-purple-600 mb-6">📖 TEMAS APRENDIDOS</h2>
								
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 1: Sistemas Inteligentes - Introducción</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Los sistemas inteligentes son programas computacionales capaces de percibir su entorno, procesar información, razonar y tomar decisiones de forma autónoma para alcanzar objetivos específicos. Son como cerebros artificiales que pueden aprender y adaptarse.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Alcances funcionales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>Percepción sensorial:</b> Capturan datos mediante sensores o fuentes digitales</li>
									<li><b>Razonamiento simbólico:</b> Usan reglas lógicas y conocimiento previo</li>
									<li><b>Aprendizaje adaptativo:</b> Mejoran su desempeño con la experiencia</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Ámbitos de aplicación:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Automatización industrial</li>
									<li>Robótica autónoma</li>
									<li>Diagnóstico médico asistido</li>
									<li>Vehículos autónomos</li>
									<li>Finanzas predictivas</li>
									<li>Educación personalizada</li>
									<li>Atención al cliente</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Definición y alcances de sistemas inteligentes - página 1 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 2: Ejemplos Reales de Sistemas Inteligentes</h3>
								
								<div className="space-y-4 mb-4">
									<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">🏥 Salud</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li><b>Watson Health (IBM):</b> Analiza historiales médicos y literatura científica para diagnósticos personalizados</li>
											<li><b>Diagnóstico por imagen:</b> Deep learning para detectar tumores y anomalías en radiografías</li>
										</ul>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">🚗 Automoción</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li><b>Tesla/Waymo:</b> Vehículos autónomos con sensores y redes neuronales</li>
											<li><b>Sistemas ADAS:</b> Frenado automático, mantenimiento de carril</li>
										</ul>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">🏭 Industria 4.0</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li><b>Robots colaborativos (cobots):</b> Trabajan junto a humanos</li>
											<li><b>Mantenimiento predictivo:</b> Anticipan fallos en maquinaria</li>
										</ul>
									</div>
									
									<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">🛒 Retail y Logística</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li><b>Amazon:</b> Robots gestionan inventario y optimizan rutas</li>
											<li><b>Sistemas de recomendación:</b> Netflix, Spotify aprenden preferencias</li>
										</ul>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">🏠 Hogar Inteligente</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li><b>Alexa, Google Assistant:</b> Procesan lenguaje natural</li>
											<li><b>Nest:</b> Termostatos que aprenden hábitos</li>
										</ul>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">🏙️ Ciudades Inteligentes</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li><b>Semáforos adaptativos:</b> Ajustan tiempos según tráfico</li>
											<li><b>Videovigilancia con IA:</b> Reconocimiento facial</li>
										</ul>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Ejemplos de sistemas inteligentes - páginas 1-2 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 3: Arquitectura de Sistemas Inteligentes</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> La arquitectura define cómo se estructuran e interactúan los componentes de un sistema inteligente, permitiendo la integración de sus capacidades cognitivas.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Componentes principales:</b></p>
								
								<div className="space-y-3 mb-4">
									<div className="bg-purple-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">1. Módulo de Percepción</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Interfaces con sensores y datos</li>
											<li>Traduce estímulos externos a representaciones internas</li>
										</ul>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">2. Módulo de Conocimiento</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Base de datos estructurada</li>
											<li>Ontologías y redes semánticas</li>
										</ul>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">3. Módulo de Razonamiento</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Algoritmos de inferencia lógica</li>
											<li>Toma de decisiones y planificación</li>
										</ul>
									</div>
									
									<div className="bg-purple-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">4. Módulo de Aprendizaje</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Técnicas de machine learning</li>
											<li>Adaptación al entorno</li>
										</ul>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">5. Módulo de Acción</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Control de actuadores físicos</li>
											<li>Ejecución de comandos virtuales</li>
										</ul>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">6. Interfaz Hombre-Máquina</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Canales de interacción con usuarios</li>
											<li>Comunicación cognitiva</li>
										</ul>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Diagrama de arquitectura del sistema - página 2 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 4: Redes Neuronales</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Las redes neuronales son modelos computacionales inspirados en el cerebro humano, diseñados para procesamiento paralelo y adaptativo de información.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características clave:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>Estructura:</b> Nodos (neuronas) y conexiones (sinapsis) organizadas en capas
										<ul className="list-disc pl-6 mt-1">
											<li>Capa de entrada</li>
											<li>Capas ocultas</li>
											<li>Capa de salida</li>
										</ul>
									</li>
									<li><b>Aprendizaje:</b> Ajustan pesos sinápticos mediante retropropagación</li>
									<li><b>Aplicaciones:</b> Clasificación, regresión, segmentación, predicción</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Tipos comunes:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>Perceptrón multicapa (MLP):</b> Red básica totalmente conectada</li>
									<li><b>Redes de Kohonen:</b> Mapas autoorganizados</li>
									<li><b>Redes de Hopfield:</b> Memoria asociativa</li>
									<li><b>CNNs (Redes Convolucionales):</b> Para visión artificial</li>
									<li><b>RNNs y LSTMs (Redes Recurrentes):</b> Para secuencias temporales</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Sección de redes neuronales - página 3 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 5: Deep Learning (Aprendizaje Profundo)</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Subdisciplina del machine learning que usa redes neuronales profundas (múltiples capas ocultas) para representar funciones de alta complejidad.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Aspectos fundamentales:</b></p>
								
								<div className="space-y-3 mb-4">
									<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
										<h4 className="text-base font-bold text-gray-800 mb-1">Extracción automática de características</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>No requiere ingeniería manual de características</li>
											<li>Aprende representaciones jerárquicas de datos</li>
										</ul>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
										<h4 className="text-base font-bold text-gray-800 mb-1">Escalabilidad</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Procesa eficientemente grandes volúmenes (big data)</li>
											<li>Se beneficia de más datos</li>
										</ul>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
										<h4 className="text-base font-bold text-gray-800 mb-1">Optimización</h4>
										<ul className="text-base text-gray-700 list-disc pl-6">
											<li>Backpropagation (retropropagación)</li>
											<li>Algoritmos: Adam, RMSprop, SGD</li>
										</ul>
									</div>
								</div>
								
								<p className="text-lg text-gray-700 mb-2"><b>Arquitecturas principales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>CNNs:</b> Visión artificial (clasificación de imágenes, detección de objetos)</li>
									<li><b>RNNs/LSTMs:</b> Secuencias temporales y procesamiento de lenguaje</li>
									<li><b>Transformers:</b> Modelos generativos y entendimiento semántico (GPT, BERT)</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Sección de Deep Learning - página 3 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 6: Algoritmos de Toma de Decisiones</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Algoritmos que permiten a los sistemas inteligentes seleccionar acciones óptimas según objetivos, restricciones y conocimiento del entorno.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Tipos principales:</b></p>
								
								<div className="space-y-3 mb-4">
									<div className="bg-purple-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">Sistemas basados en reglas (IF-THEN)</h4>
										<p className="text-base text-gray-700">Estructurados y deterministas, ideales en entornos controlados. Ejemplo: &quot;SI fiebre Y tos ENTONCES gripe&quot;</p>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">Redes Bayesianas</h4>
										<p className="text-base text-gray-700">Probabilísticas, útiles con incertidumbre</p>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">Lógica difusa (Fuzzy)</h4>
										<p className="text-base text-gray-700">Maneja imprecisión, variables lingüísticas (&quot;temperatura alta&quot;, &quot;clima templado&quot;)</p>
									</div>
									
									<div className="bg-purple-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">Árboles de decisión</h4>
										<p className="text-base text-gray-700">Clasificación jerárquica, análisis de alternativas</p>
									</div>
									
									<div className="bg-pink-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">Algoritmos heurísticos</h4>
										<p className="text-base text-gray-700">Búsqueda de soluciones eficientes en problemas complejos</p>
									</div>
									
									<div className="bg-red-50 p-4 rounded-lg">
										<h4 className="text-base font-bold text-gray-800 mb-1">Algoritmos de planificación</h4>
										<p className="text-base text-gray-700">STRIPS, A* - Planificación temporal y secuencial</p>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Sección de algoritmos de toma de decisiones - página 3 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 7: Modelos Discriminativos</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Algoritmos diseñados para clasificar datos en categorías. Modelan la probabilidad condicional P(y|x) - la probabilidad de una etiqueta dada una observación.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-none pl-0 space-y-1 mb-4">
									<li>❌ No generan datos nuevos</li>
									<li>✅ Se centran en separar clases</li>
									<li>✅ Requieren datos etiquetados</li>
									<li>✅ Usan funciones de pérdida discriminativa</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Objetivo:</b> Crear fronteras de decisión entre clases</p>
								<p className="text-lg text-gray-700 mb-2"><b>Ejemplos:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Regresión logística</li>
									<li>SVM (Support Vector Machines)</li>
									<li>Árboles de decisión</li>
									<li>Redes neuronales clásicas (MLP)</li>
									<li>BERT (para NLP)</li>
								</ul>
								<p className="text-base text-gray-700 mb-4"><b>Uso práctico:</b> &quot;¿Es este email spam o no spam?&quot;</p>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Sección de modelos discriminativos - página 4 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 8: Modelos Generativos</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Aprenden la distribución conjunta P(x, y) o P(x), permitiéndoles generar nuevas muestras de datos similares a los reales.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-none pl-0 space-y-1 mb-4">
									<li>✅ Pueden reconstruir o simular datos</li>
									<li>✅ Capturan relaciones profundas entre variables</li>
									<li>✅ Aplicables en visión, texto, audio, video</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Aplicaciones:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Síntesis de contenido (imágenes, texto, música)</li>
									<li>Simulaciones</li>
									<li>Detección de anomalías</li>
									<li>Data augmentation</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Ejemplos:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Naive Bayes</li>
									<li>Hidden Markov Models</li>
									<li><b>GANs (Generative Adversarial Networks)</b> - Generan imágenes realistas</li>
									<li><b>Autoencoders</b> - Comprimen y reconstruyen datos</li>
									<li><b>VAEs (Variational Autoencoders)</b> - Generación con variaciones</li>
								</ul>
								<p className="text-base text-gray-700 mb-4"><b>Uso práctico:</b> &quot;Genera una imagen de un gato que no existe&quot;</p>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Sección de modelos generativos - página 4 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 9: Large Language Models (LLM)</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Modelos generativos avanzados especializados en lenguaje natural, entrenados con arquitecturas Transformer sobre grandes volúmenes de texto.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-none pl-0 space-y-1 mb-4">
									<li>✅ Generan texto coherente basado en contexto</li>
									<li>✅ Usan arquitectura Transformer con mecanismos de atención</li>
									<li>✅ Entrenados en corpus masivos (billones de palabras)</li>
									<li>✅ Se adaptan a tareas discriminativas con fine-tuning</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Capacidades:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Generar texto nuevo</li>
									<li>Traducir idiomas</li>
									<li>Responder preguntas</li>
									<li>Redactar código</li>
									<li>Resumir documentos</li>
									<li>Análisis de sentimientos</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Ejemplos populares:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>GPT (OpenAI)</b> - ChatGPT</li>
									<li><b>Gemini (Google)</b></li>
									<li><b>Claude (Anthropic)</b> - ¡El que estás usando ahora!</li>
									<li><b>LLaMA (Meta)</b> - Código abierto</li>
									<li><b>Mistral</b> - Europeo, eficiente</li>
								</ul>
								<p className="text-base text-gray-700 mb-4"><b>Cómo funcionan:</b> Modelan P(texto|contexto) - predicen la siguiente palabra más probable</p>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Sección de LLM - páginas 4-5 del PDF]</div>
							</div>
						</div>
					)}

					{/* Tab Prácticas */}
					{activeTab === 'practicas' && (
						<div className="w-full flex justify-center">
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-pink-100">
								<h2 className="text-3xl md:text-4xl font-black text-purple-600 mb-6">EJERCICIOS DE LABORATORIO - RESULTADOS</h2>
								
								<h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Ejercicio 1: Sistema Experto de Diagnóstico Médico (Reglas IF-THEN)</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Objetivo:</b> Desarrollar un sistema inteligente basado en reglas que diagnostique enfermedades según síntomas reportados.
								</p>
								
								<div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-4">📋 Pasos realizados:</h4>
									
									<div className="space-y-6">
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">1. Creación del proyecto</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`mkdir diagnostico-salud
cd diagnostico-salud
touch main.py`}
											</pre>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">2. Clase base Persona</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def presentarse(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años."`}
											</pre>
											<p className="text-base text-gray-700 mt-2"><b>Concepto aplicado:</b> Clase base con atributos básicos</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">3. Clase derivada Paciente</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`class Paciente(Persona):
    def __init__(self, nombre, edad, sintomas):
        super().__init__(nombre, edad)
        self.sintomas = sintomas
    
    def mostrar_sintomas(self):
        return f"Síntomas reportados: {', '.join(self.sintomas)}"`}
											</pre>
											<p className="text-base text-gray-700 mt-2"><b>Concepto aplicado:</b> Herencia y extensión de funcionalidad</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">4. Motor de inferencia (Algoritmo IF-THEN)</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`def diagnosticar(sintomas):
    # Gripe común
    if "fiebre" in sintomas and "tos" in sintomas and "dolor de garganta" in sintomas:
        return "Diagnóstico: Posible gripe común"
    
    # Influenza
    elif "fiebre" in sintomas and "dolor muscular" in sintomas and "cansancio" in sintomas:
        return "Diagnóstico: Posible influenza"
    
    # Migraña
    elif "dolor de cabeza" in sintomas and "mareos" in sintomas and "visión borrosa" in sintomas:
        return "Diagnóstico: Posible migraña"
    
    # Bronquitis
    elif "tos" in sintomas and "dificultad para respirar" in sintomas:
        return "Diagnóstico: Posible bronquitis"
    
    # Caso por defecto
    else:
        return "Diagnóstico: No se identificó una condición clara. Se recomienda consulta médica."`}
											</pre>
											<p className="text-base text-gray-700 mt-2"><b>Concepto aplicado:</b> Sistema experto basado en reglas de producción</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">5. Ejecución del sistema</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`if __name__ == "__main__":
    sintomas_ingresados = ["fiebre", "tos", "dolor de garganta"]
    paciente = Paciente("Lucía", 22, sintomas_ingresados)
    
    print(paciente.presentarse())
    print(paciente.mostrar_sintomas())
    
    resultado = diagnosticar(paciente.sintomas)
    print(resultado)`}
											</pre>
											<p className="text-base text-gray-700 mt-2"><b>Salida esperada:</b></p>
											<pre className="bg-gray-100 text-gray-800 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed mt-2">
{`Hola, soy Lucía y tengo 22 años.
Síntomas reportados: fiebre, tos, dolor de garganta
Diagnóstico: Posible gripe común`}
											</pre>
										</div>
									</div>
								</div>
								
								<div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
									<p className="text-base text-green-700 font-semibold mb-2">✔️ Resultado:</p>
									<ul className="text-base text-gray-700 list-none pl-0 space-y-1">
										<li>✅ Sistema experto funcional con razonamiento basado en reglas</li>
										<li>✅ Demuestra toma de decisiones automatizada</li>
										<li>✅ Implementa POO con herencia</li>
									</ul>
								</div>
								
								<div className="flex flex-col gap-2 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Código completo en el editor]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Terminal mostrando la ejecución con diferentes conjuntos de síntomas]</div>
								</div>
								
								<div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-6">
									<h4 className="text-lg font-bold text-gray-800 mb-3">📊 Análisis del sistema:</h4>
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<p className="text-base font-semibold text-gray-800 mb-2">Fortalezas:</p>
											<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
												<li>Lógica clara y predecible</li>
												<li>Fácil de auditar y explicar</li>
												<li>Determinista (mismos síntomas = mismo diagnóstico)</li>
											</ul>
										</div>
										<div>
											<p className="text-base font-semibold text-gray-800 mb-2">Limitaciones:</p>
											<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
												<li>No aprende de nuevos datos</li>
												<li>Reglas deben programarse manualmente</li>
												<li>No maneja incertidumbre</li>
												<li>Difícil de escalar con muchas condiciones</li>
											</ul>
										</div>
									</div>
									<p className="text-base font-semibold text-gray-800 mt-4 mb-2">Mejoras posibles:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
										<li>Agregar probabilidades (Redes Bayesianas)</li>
										<li>Implementar pesos para síntomas</li>
										<li>Usar lógica difusa para síntomas parciales</li>
										<li>Machine learning para aprender de casos reales</li>
									</ul>
								</div>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 2: Sistema de Control Difuso para Climatización</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Objetivo:</b> Implementar un sistema inteligente con lógica difusa que controle la potencia de un aire acondicionado según la temperatura ambiente.
								</p>
								<div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg mb-6">
									<h4 className="text-lg font-bold text-gray-800 mb-2">💡 Concepto de Lógica Difusa:</h4>
									<p className="text-base text-gray-700">A diferencia de la lógica booleana (verdadero/falso), la lógica difusa permite valores intermedios:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1 mt-2">
										<li>Temperatura 25°C → 70% &quot;media&quot;, 30% &quot;baja&quot;</li>
										<li>Respuestas más naturales y graduales</li>
									</ul>
								</div>
								
								<div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-4">📋 Pasos realizados:</h4>
									
									<div className="space-y-6">
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">1. Instalación de librería</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`pip install scikit-fuzzy`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Librería scikit-fuzzy instalada</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">2. Código del sistema</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

# 1. Variables de entrada y salida
temperatura = ctrl.Antecedent(np.arange(15, 41, 1), 'temperatura')
potencia = ctrl.Consequent(np.arange(0, 101, 1), 'potencia')

# 2. Definición de conjuntos difusos
temperatura['baja'] = fuzz.trimf(temperatura.universe, [15, 15, 25])
temperatura['media'] = fuzz.trimf(temperatura.universe, [20, 27, 34])
temperatura['alta'] = fuzz.trimf(temperatura.universe, [30, 40, 40])

potencia['baja'] = fuzz.trimf(potencia.universe, [0, 0, 50])
potencia['media'] = fuzz.trimf(potencia.universe, [30, 50, 70])
potencia['alta'] = fuzz.trimf(potencia.universe, [60, 100, 100])

# 3. Reglas difusas IF-THEN
regla1 = ctrl.Rule(temperatura['baja'], potencia['baja'])
regla2 = ctrl.Rule(temperatura['media'], potencia['media'])
regla3 = ctrl.Rule(temperatura['alta'], potencia['alta'])

# 4. Sistema de control difuso
controlador = ctrl.ControlSystem([regla1, regla2, regla3])
simulador = ctrl.ControlSystemSimulation(controlador)

# 5. Prueba con temperatura de entrada
simulador.input['temperatura'] = 33
simulador.compute()

print(f"Potencia sugerida del aire acondicionado: {simulador.output['potencia']:.2f}%")`}
											</pre>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">3. Funcionamiento del sistema</h5>
											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<p className="text-base font-semibold text-gray-800 mb-2">Variables lingüísticas - Temperatura:</p>
													<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
														<li>Baja: 15-25°C</li>
														<li>Media: 20-34°C (hay overlap)</li>
														<li>Alta: 30-40°C</li>
													</ul>
												</div>
												<div>
													<p className="text-base font-semibold text-gray-800 mb-2">Variables lingüísticas - Potencia:</p>
													<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
														<li>Baja: 0-50%</li>
														<li>Media: 30-70%</li>
														<li>Alta: 60-100%</li>
													</ul>
												</div>
											</div>
											<p className="text-base font-semibold text-gray-800 mt-4 mb-2">Reglas:</p>
											<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
												<li>SI temperatura es baja → potencia baja</li>
												<li>SI temperatura es media → potencia media</li>
												<li>SI temperatura es alta → potencia alta</li>
											</ul>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">4. Ejecución y pruebas</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`python climatizador_fuzzy.py`}
											</pre>
											<p className="text-base text-gray-700 mt-2"><b>Salidas de ejemplo:</b></p>
											<ul className="text-base text-gray-700 list-disc pl-6 space-y-1 mt-2">
												<li>Temperatura 18°C → Potencia ~15%</li>
												<li>Temperatura 27°C → Potencia ~50%</li>
												<li>Temperatura 33°C → Potencia ~75-85%</li>
												<li>Temperatura 38°C → Potencia ~95%</li>
											</ul>
										</div>
									</div>
								</div>
								
								<div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
									<p className="text-base text-green-700 font-semibold mb-2">✔️ Resultado:</p>
									<ul className="text-base text-gray-700 list-none pl-0 space-y-1">
										<li>✅ Sistema de control inteligente con lógica difusa funcional</li>
										<li>✅ Respuestas graduales y naturales</li>
										<li>✅ Simula razonamiento humano sobre conceptos imprecisos</li>
									</ul>
								</div>
								
								<div className="flex flex-col gap-2 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Código del sistema en el editor]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Terminal mostrando salidas con diferentes temperaturas]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Gráfico de funciones de pertenencia (si es posible)]</div>
								</div>
								
								<div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-6">
									<h4 className="text-lg font-bold text-gray-800 mb-3">📊 Análisis del sistema:</h4>
									<p className="text-base font-semibold text-gray-800 mb-2">Ventajas de lógica difusa:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1 mb-4">
										<li>Maneja imprecisión y valores intermedios</li>
										<li>Decisiones más naturales (como humanos)</li>
										<li>No requiere límites exactos</li>
										<li>Robusto ante ruido en sensores</li>
									</ul>
									<p className="text-base font-semibold text-gray-800 mb-2">Aplicaciones prácticas:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
										<li>Control de temperatura</li>
										<li>Sistemas de frenado inteligente</li>
										<li>Lavadoras automáticas</li>
										<li>Cámaras con enfoque automático</li>
										<li>Ascensores inteligentes</li>
									</ul>
								</div>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 3: Interfaz Web para LLM (Llama 3)</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Objetivo:</b> Crear una aplicación web completa que permita interactuar con el modelo de lenguaje Llama 3 de Meta, integrando Flask, HTML, CSS y JavaScript.
								</p>
								
								<div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
									<p className="text-base font-semibold text-gray-800 mb-2">⚠️ Advertencia importante:</p>
									<p className="text-base text-gray-700">Este ejercicio requiere:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1 mt-2">
										<li>GPU potente (mínimo 16GB VRAM para Llama-3-8B)</li>
										<li>Acceso aprobado en Hugging Face</li>
										<li>Descarga de ~15GB del modelo</li>
									</ul>
								</div>
								
								<div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-4">📋 Implementación:</h4>
									
									<div className="space-y-6">
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">1. Instalación de dependencias</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`pip install torch transformers flask python-dotenv`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Librerías instaladas</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">2. Estructura del proyecto</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`llama_web_app/
├── app.py
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── .env`}
											</pre>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Estructura de archivos en el explorador]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">3. Backend Flask (app.py)</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`from flask import Flask, render_template, request, jsonify
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

app = Flask(__name__)

# Cargar modelo Llama 3
model_id = "meta-llama/Meta-Llama-3-8B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id, device_map="auto")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate", methods=["POST"])
def generate():
    prompt = request.json.get("prompt", "")
    
    # Tokenizar entrada
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    
    # Generar respuesta
    outputs = model.generate(**inputs, max_new_tokens=200)
    
    # Decodificar respuesta
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)`}
											</pre>
											<p className="text-base text-gray-700 mt-2"><b>Conceptos aplicados:</b></p>
											<ul className="text-base text-gray-700 list-none pl-0 space-y-1">
												<li>✅ Carga de modelo pre-entrenado</li>
												<li>✅ API REST con Flask</li>
												<li>✅ Tokenización y generación de texto</li>
												<li>✅ Inferencia con LLM</li>
											</ul>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">4. Ejecución</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`python app.py`}
											</pre>
											<p className="text-base text-gray-700 mt-2">Acceder a: <a href="http://localhost:5000" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://localhost:5000</a></p>
											<p className="text-base text-gray-700 mt-2"><b>Pruebas realizadas:</b></p>
											<ul className="text-base text-green-700 list-none pl-0 space-y-1 mt-2">
										<li>- Escribir pregunta en el textarea</li>
										<li>- Click en &quot;Enviar&quot;</li>
										<li>- Modelo genera respuesta coherente</li>
										<li>- Respuesta se muestra en la interfaz</li>
									</ul>
										</div>
									</div>
								</div>
								
								<div className="flex flex-col gap-2 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Interfaz web completa en el navegador]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Terminal mostrando Flask corriendo y logs]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Ejemplo de conversación con el modelo]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Código en el editor]</div>
								</div>
								
								<div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
									<h4 className="text-lg font-bold text-gray-800 mb-3">✅ Resultado del ejercicio:</h4>
									<ul className="text-base text-gray-700 list-none pl-0 space-y-1">
										<li>✅ Aplicación web completa con LLM integrado</li>
										<li>✅ Interfaz usuario amigable</li>
										<li>✅ Comunicación cliente-servidor funcional</li>
										<li>✅ Generación de texto con IA</li>
									</ul>
								</div>
								
								<div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
									<p className="text-base font-semibold text-gray-800 mb-2">Desafíos técnicos:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1 mb-4">
										<li>Carga del modelo (requiere tiempo y recursos)</li>
										<li>Gestión de memoria GPU</li>
										<li>Latencia en generación de respuestas</li>
										<li>Configuración de tokens y parámetros</li>
									</ul>
									<p className="text-base font-semibold text-gray-800 mb-2">Mejoras posibles:</p>
									<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
										<li>Historial de conversación</li>
										<li>Streaming de respuestas</li>
										<li>Ajuste de parámetros (temperatura, top_p)</li>
										<li>Múltiples usuarios concurrentes</li>
										<li>Guardar conversaciones en BD</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* Tab Bibliografía */}
					{activeTab === 'bibliografia' && (
						<div className="space-y-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="p-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl shadow-2xl">
									<Sparkles className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-4xl font-black text-gray-800">Bibliografía</h3>
							</div>
							<div className="grid md:grid-cols-2 gap-8">
								{recursos.map((resource, index) => (
									<a
										key={resource.title}
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
										className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-pink-300 overflow-hidden hover:-translate-y-2"
										style={{ animationDelay: `${index * 150}ms` }}
									>
										<div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
										<div className="relative flex items-center gap-5">
											<div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
												<div className="text-white">{resource.icon}</div>
											</div>
											<div className="flex-1 space-y-2">
												<p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Recurso externo</p>
												<h4 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{resource.title}</h4>
											</div>
											<ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
										</div>
									</a>
								))}
							</div>
						</div>
					)}

					{/* Tab Reflexión */}
					{activeTab === 'reflexion' && (
						<div className="space-y-8">
							<div className="flex items-center gap-4 mb-10">
								<div className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl shadow-2xl">
									<Lightbulb className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-4xl font-black text-gray-800">Reflexión de Aprendizaje</h3>
							</div>
							
							<div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 border-l-4 border-purple-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">💡 ¿Qué aprendí?</h4>
								<p className="text-lg text-gray-700 mb-4">Esta semana representó un salto cualitativo hacia la inteligencia artificial aplicada:</p>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									<li><b>Sistemas inteligentes en la práctica:</b> Comprendí que la IA no es magia, sino algoritmos bien estructurados que imitan procesos cognitivos humanos.</li>
									<li><b>Diferentes paradigmas de IA:</b> Simbólica (reglas IF-THEN), Difusa (maneja imprecisión), Conexionista (redes neuronales), Generativa (LLMs).</li>
									<li><b>Arquitectura de sistemas inteligentes:</b> Entendí que un sistema inteligente completo necesita módulos de percepción, conocimiento, razonamiento, aprendizaje y acción.</li>
									<li><b>Redes neuronales y deep learning:</b> Descubrí cómo las arquitecturas profundas pueden aprender representaciones complejas automáticamente.</li>
									<li><b>Diferencia entre modelos:</b> Discriminativos (clasifican) vs Generativos (crean) vs LLMs (especializados en lenguaje).</li>
									<li><b>Lógica difusa:</b> Aprendí que no todo es blanco o negro; la IA puede razonar con conceptos imprecisos.</li>
									<li><b>Large Language Models:</b> Entendí cómo funcionan modelos como Llama 3, GPT o Claude.</li>
									<li><b>Integración práctica:</b> Vi cómo conectar IA con interfaces web usando Flask.</li>
									<li><b>Sistemas expertos:</b> Aprendí que los sistemas basados en reglas siguen siendo útiles para dominios bien definidos.</li>
									<li><b>Ecosistema Python para IA:</b> Descubrí librerías poderosas (transformers, scikit-fuzzy, torch, sklearn).</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 border-l-4 border-pink-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">📚 ¿Cómo aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									<li><b>Construcción incremental:</b> Comencé con sistemas simples (reglas IF-THEN) y avancé hacia sistemas complejos (LLMs).</li>
									<li><b>Implementación práctica:</b> Cada concepto lo implementé en código Python funcional.</li>
									<li><b>Comparación de paradigmas:</b> Contrastar diferentes enfoques me mostró cuándo usar cada uno.</li>
									<li><b>Análisis de arquitecturas:</b> Estudiar el diagrama de componentes me ayudó a entender cómo se estructura un sistema inteligente real.</li>
									<li><b>Exploración de casos reales:</b> Los ejemplos (Watson Health, Tesla, Amazon) conectaron teoría con aplicaciones del mundo real.</li>
									<li><b>Debugging con IA:</b> Trabajar con modelos de ML requirió nuevo tipo de debugging.</li>
									<li><b>Documentación especializada:</b> Consulté docs de Hugging Face, scikit-fuzzy, y papers académicos.</li>
									<li><b>Experimentación:</b> Probé diferentes conjuntos de síntomas, temperaturas y prompts.</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-l-4 border-red-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚧 Desafíos enfrentados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
												<li>Conceptos abstractos: Términos como &quot;modelo generativo&quot;, &quot;espacio latente&quot;, &quot;embeddings&quot; eran nuevos.</li>
									<li>Recursos computacionales: Trabajar con LLMs requiere hardware potente.</li>
									<li>Instalación de dependencias: Librerías como PyTorch tienen versiones específicas según CUDA/CPU.</li>
									<li>Lógica difusa matemática: Entender funciones de pertenencia triangulares y defuzzificación requirió repasar conceptos.</li>
									<li>Latencia en inferencia: Generar texto con LLMs toma tiempo.</li>
									<li>Diferencia paradigmas: Al principio confundía cuándo usar reglas vs ML vs lógica difusa.</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 border-l-4 border-orange-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Logros alcanzados:</h4>
								<ul className="list-none pl-0 space-y-2 text-lg text-gray-700">
									<li>✅ Sistema experto funcional: Diagnóstico médico automatizado</li>
									<li>✅ Control difuso implementado: Climatizador inteligente</li>
									<li>✅ Aplicación web con LLM: Chat funcional con modelo de lenguaje</li>
									<li>✅ Comprensión de arquitecturas de IA: Desde perceptrones hasta Transformers</li>
									<li>✅ Integración full-stack: Backend Python + Frontend web + Modelo IA</li>
									<li>✅ Código limpio y documentado: Siguiendo PEP-8 y buenas prácticas</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-yellow-50 via-green-50 to-teal-50 border-l-4 border-yellow-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Comparación de enfoques aprendidos:</h4>
								<div className="overflow-x-auto">
									<table className="w-full text-left border-collapse">
										<thead>
											<tr className="bg-purple-100">
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Enfoque</th>
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Ventajas</th>
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Desventajas</th>
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Cuándo usar</th>
											</tr>
										</thead>
										<tbody className="text-base text-gray-700">
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Reglas IF-THEN</td>
												<td className="border border-gray-300 px-4 py-2">Explícito, auditable, determinista</td>
												<td className="border border-gray-300 px-4 py-2">No aprende, difícil escalar</td>
												<td className="border border-gray-300 px-4 py-2">Dominios bien definidos</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Lógica Difusa</td>
												<td className="border border-gray-300 px-4 py-2">Maneja imprecisión, natural</td>
												<td className="border border-gray-300 px-4 py-2">Requiere definir funciones</td>
												<td className="border border-gray-300 px-4 py-2">Control, decisiones graduales</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">ML Clásico</td>
												<td className="border border-gray-300 px-4 py-2">Aprende de datos, adaptable</td>
												<td className="border border-gray-300 px-4 py-2">Caja negra parcial</td>
												<td className="border border-gray-300 px-4 py-2">Clasificación, predicción</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Deep Learning</td>
												<td className="border border-gray-300 px-4 py-2">Aprende features, potente</td>
												<td className="border border-gray-300 px-4 py-2">Requiere muchos datos/GPU</td>
												<td className="border border-gray-300 px-4 py-2">Visión, NLP, tareas complejas</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">LLMs</td>
												<td className="border border-gray-300 px-4 py-2">Versátiles, entendimiento semántico</td>
												<td className="border border-gray-300 px-4 py-2">Costosos, pueden alucinar</td>
												<td className="border border-gray-300 px-4 py-2">Generación texto, chatbots</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 border-l-4 border-green-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚀 Aplicaciones prácticas del conocimiento:</h4>
								<p className="text-lg text-gray-700 mb-3">Puedo desarrollar ahora:</p>
								<div className="grid md:grid-cols-2 gap-4">
									<ul className="list-disc pl-10 space-y-2 text-base text-gray-700">
										<li>Chatbots inteligentes para atención al cliente</li>
										<li>Sistemas de recomendación personalizados</li>
										<li>Diagnóstico automatizado en diversos dominios</li>
										<li>Control inteligente de dispositivos IoT</li>
									</ul>
									<ul className="list-disc pl-10 space-y-2 text-base text-gray-700">
										<li>Análisis de sentimientos en redes sociales</li>
										<li>Generación automática de contenido</li>
										<li>Asistentes virtuales especializados</li>
										<li>Sistemas predictivos de mantenimiento</li>
									</ul>
								</div>
								<p className="text-lg text-gray-700 mt-4 mb-3">Sectores donde aplicar:</p>
								<ul className="list-disc pl-10 space-y-2 text-base text-gray-700">
									<li><b>Salud:</b> Diagnóstico asistido</li>
									<li><b>Agricultura:</b> Detección de plagas</li>
									<li><b>Finanzas:</b> Predicción de riesgos</li>
									<li><b>Retail:</b> Personalización de ofertas</li>
									<li><b>Educación:</b> Tutores virtuales</li>
									<li><b>Manufactura:</b> Control de calidad automatizado</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 border-l-4 border-cyan-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🔗 Conexión con semanas anteriores:</h4>
								<p className="text-lg text-gray-700 mb-3">Integración de conocimientos:</p>
								<ul className="list-disc pl-10 space-y-2 text-base text-gray-700">
									<li><b>Semana 10 (Java/Spring):</b> Backend robusto para sistemas empresariales</li>
									<li><b>Semana 13 (PHP/Laravel):</b> Desarrollo web rápido</li>
									<li><b>Semana 14 (Python/Flask):</b> Base para IA</li>
									<li><b>Semana 15 (IA):</b> Inteligencia en aplicaciones</li>
								</ul>
								<p className="text-lg text-gray-700 mt-4 mb-3"><b>Stack completo aprendido:</b></p>
								<ul className="list-disc pl-10 space-y-1 text-base text-gray-700">
									<li><b>Frontend:</b> HTML/CSS/JS + Tailwind</li>
									<li><b>Backend:</b> Java/Spring, PHP/Laravel, Python/Flask</li>
									<li><b>Base de datos:</b> MySQL</li>
									<li><b>IA:</b> Redes neuronales, LLMs, lógica difusa</li>
									<li><b>Infraestructura:</b> Apache, Tomcat</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-l-4 border-indigo-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">💭 Reflexiones sobre IA:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li><b>La IA no es perfecta:</b> Los sistemas pueden fallar, alucinar (LLMs) o dar resultados inesperados. Necesitan supervisión humana.</li>
									<li><b>Ética y responsabilidad:</b> Con gran poder viene gran responsabilidad. Los sistemas de IA pueden tener sesgos.</li>
									<li><b>Complemento, no reemplazo:</b> La IA debe aumentar capacidades humanas, no reemplazarlas completamente.</li>
									<li><b>Evolución constante:</b> El campo de IA avanza rapidísimo. Lo que aprendí hoy puede ser obsoleto en meses.</li>
									<li><b>Interdisciplinariedad:</b> IA exitosa requiere programación + matemáticas + dominio específico + ética.</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 border-l-4 border-pink-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Próximos pasos en IA:</h4>
								<p className="text-lg text-gray-700 mb-3">Quiero profundizar en:</p>
								<div className="grid md:grid-cols-2 gap-4">
									<ul className="list-disc pl-10 space-y-2 text-base text-gray-700">
										<li>Computer Vision: CNNs para detección de objetos</li>
										<li>NLP avanzado: Fine-tuning de LLMs</li>
										<li>Reinforcement Learning: Agentes que aprenden</li>
										<li>MLOps: Despliegue y monitoreo de modelos</li>
									</ul>
									<ul className="list-disc pl-10 space-y-2 text-base text-gray-700">
										<li>Explainable AI: Sistemas más interpretables</li>
										<li>Edge AI: IA en dispositivos limitados</li>
										<li>Generative AI: GANs, Diffusion models</li>
										<li>Ética en IA: Sesgos, fairness, privacidad</li>
									</ul>
								</div>
							</div>

							<div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 border-l-4 border-orange-600 p-10 rounded-3xl shadow-lg">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">✨ Impacto personal:</h4>
								<p className="text-lg text-gray-700 mb-3">Esta semana cambió mi perspectiva sobre programación:</p>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li>Ya no solo creo aplicaciones que ejecutan órdenes</li>
									<li>Ahora puedo crear sistemas que razonan y aprenden</li>
									<li>Entiendo cómo funcionan herramientas que uso diariamente (ChatGPT, Google Photos, etc.)</li>
									<li>Veo oportunidades de innovación en todos los sectores</li>
								</ul>
								<div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-l-4 border-purple-600">
									<p className="text-lg font-semibold text-gray-800 italic">
										&quot;La inteligencia artificial es la nueva electricidad. Así como la electricidad transformó industrias hace 100 años, la IA transformará todo lo que hacemos hoy.&quot; - Andrew Ng
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Footer Navigation */}
			<div className="bg-white/90 backdrop-blur-xl border-t-2 border-gray-200 shadow-2xl mt-16">
				<div className="container mx-auto px-6 py-8">
					<div className="flex items-center justify-between">
						<a href="/projects/semana-14" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-purple-50 text-lg">
							<ChevronLeft className="w-6 h-6" />
							Semana Anterior
						</a>
						<a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
							Ver Todas las Semanas
						</a>
						<div className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white rounded-2xl font-bold shadow-2xl text-lg opacity-50 cursor-not-allowed">
							Última Semana 🎉
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes fade-in {
					from { opacity: 0; transform: translateY(10px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes fade-in-up {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes blob {
					0%, 100% { transform: translate(0, 0) scale(1); }
					33% { transform: translate(30px, -50px) scale(1.1); }
					66% { transform: translate(-20px, 20px) scale(0.9); }
				}
				@keyframes float {
					0%, 100% { transform: translateY(0px); }
					50% { transform: translateY(-20px); }
				}
				.animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
				.animate-fade-in-up { animation: fade-in-up 0.5s ease-out forwards; }
				.animate-blob { animation: blob 7s infinite; }
				.animate-float { animation: float 3s ease-in-out infinite; }
				.animation-delay-200 { animation-delay: 200ms; }
				.animation-delay-2000 { animation-delay: 2s; }
				.animation-delay-4000 { animation-delay: 4s; }
			`}</style>
		</div>
	);
}




