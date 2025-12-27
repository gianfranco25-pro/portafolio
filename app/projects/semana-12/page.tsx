"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Code, Sparkles, Lightbulb, ExternalLink, Box, Server, Database, Globe, Layers, Package, FileCode, Shield, Zap, Coffee, Home } from 'lucide-react';
import WeekNav from '@/components/WeekNav';

const weekConfig = {
	number: 12,
	icon: '☕',
	iconBg: 'bg-gradient-to-br from-amber-500 via-orange-400 to-rose-500',
	title: 'REFORZAMIENTO DE SEMANA 10',
	subtitle: 'Desarrollo de API REST y Patrón MVC',
	description: 'Domina JSP, Spring Framework, Maven y la creación de API REST con Spring Boot para aplicaciones empresariales modernas.'
};

const tabs = [
	{ id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
	{ id: 'practicas', label: 'Prácticas Calificadas', icon: <Code className="w-4 h-4" /> },
	{ id: 'bibliografia', label: 'Bibliografía', icon: <Sparkles className="w-4 h-4" /> },
	{ id: 'reflexion', label: 'Reflexión', icon: <Lightbulb className="w-4 h-4" /> },
];

const recursos = [
	{
		title: 'Jakarta Server Pages Documentation',
		url: 'https://jakarta.ee/specifications/pages/',
		icon: <FileCode className="w-6 h-6" />,
		color: 'from-amber-500 to-orange-500'
	},
	{
		title: 'Spring Boot Official Guide',
		url: 'https://spring.io/guides',
		icon: <Server className="w-6 h-6" />,
		color: 'from-amber-500 to-rose-500'
	},
	{
		title: 'Spring Initializr',
		url: 'https://start.spring.io/',
		icon: <Package className="w-6 h-6" />,
		color: 'from-rose-500 to-pink-500'
	},
	{
		title: 'Maven Repository',
		url: 'https://mvnrepository.com/',
		icon: <Database className="w-6 h-6" />,
		color: 'from-amber-600 to-orange-600'
	},
	{
		title: 'Postman API Testing',
		url: 'https://www.postman.com/',
		icon: <Globe className="w-6 h-6" />,
		color: 'from-orange-500 to-red-500'
	},
	{
		title: 'Spring Framework Documentation',
		url: 'https://docs.spring.io/spring-framework/reference/',
		icon: <Shield className="w-6 h-6" />,
		color: 'from-rose-600 to-pink-600'
	},
];

const reflexion = [
	'Comprendí cómo Apache Tomcat funciona como contenedor para aplicaciones Java web y cómo configurarlo correctamente.',
	'JSP permite crear páginas dinámicas mezclando HTML con Java, fundamental para aplicaciones web interactivas.',
	'El patrón MVC enseña la importancia de organizar el código en capas para mantener proyectos más mantenibles.',
	'Maven simplifica la gestión de dependencias de forma automática, ahorrando tiempo y evitando errores de compatibilidad.',
	'Spring Framework simplifica el desarrollo empresarial con conceptos como IoC (Inversión de Control) y DI (Inyección de Dependencias).',
	'Aprendí a crear API REST modernas que pueden ser consumidas por diferentes clientes (web, móvil, etc.).',
	'La práctica incremental desde JSP simple hasta API REST compleja refuerza efectivamente los conceptos aprendidos.',
	'Usar Postman para probar APIs me ayudó a entender cómo funcionan las peticiones HTTP y respuestas JSON.',
];

export default function Week10Page() {
	const [activeTab, setActiveTab] = useState('contenido');

	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
			<WeekNav currentWeek={weekConfig.number} />
			{/* Header animado */}
			<div className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-orange-400 to-rose-500 text-white">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
					<div className="absolute top-0 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
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
							<div className="text-amber-100 font-bold text-lg mb-2">SEMANA {weekConfig.number}</div>
							<h1 className="text-4xl md:text-5xl font-black mb-2">{weekConfig.title}</h1>
							<p className="text-xl text-amber-100 font-semibold">{weekConfig.subtitle}</p>
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
										? 'bg-gradient-to-r from-amber-600 to-rose-500 text-white shadow-xl scale-105'
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
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-amber-100">
								<h2 className="text-3xl md:text-4xl font-black text-amber-600 mb-6">📖 TEMAS APRENDIDOS</h2>
								
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 1: Apache Tomcat - Servidor Web</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Apache Tomcat es un servidor que funciona como contenedor para aplicaciones web Java. Es como un motor que ejecuta páginas JSP y servlets, permitiendo que las aplicaciones web escritas en Java funcionen en internet. Lo más importante es que es gratuito y de código abierto.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Estructura básica:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>bin:</b> donde están los archivos para iniciar/detener el servidor</li>
									<li><b>webapps:</b> carpeta donde colocamos nuestras aplicaciones web</li>
									<li><b>conf:</b> archivos de configuración del servidor</li>
									<li><b>logs:</b> registros de actividad del servidor</li>
								</ul>
								<div className="flex justify-center my-6">
									<img src="/Estructura%20de%20Directorios%20de%20Tomcat.png" alt="Estructura de Directorios de Tomcat" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 2: Jakarta Server Pages (JSP)</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> JSP es una tecnología que permite crear páginas web dinámicas mezclando HTML con código Java. Es como tener una página HTML que puede ejecutar código Java para mostrar información que cambia según las necesidades (como la fecha actual, datos de usuarios, etc.).
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características principales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Combina HTML + Código Java</li>
									<li>Se ejecuta en el servidor (no en el navegador del usuario)</li>
									<li>Permite crear contenido dinámico</li>
								</ul>
								<div className="flex justify-center my-6">
									<img src="/Funcionamiento%20del%20JSP.png" alt="Funcionamiento del JSP" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 3: Sintaxis de JSP</h3>
								
								<h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Scriptlet <code className="bg-gray-100 px-2 py-1 rounded">&lt;% código java %&gt;</code></h4>
								<p className="text-base text-gray-700 mb-3">Es donde escribimos código Java dentro de la página JSP. Sirve para hacer operaciones, cálculos, tomar decisiones, etc.</p>
								
								<h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Declaraciones <code className="bg-gray-100 px-2 py-1 rounded">&lt;%! declaración; %&gt;</code></h4>
								<p className="text-base text-gray-700 mb-3">Se usa para declarar variables o métodos que vamos a usar en toda la página.</p>
								
								<h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Expresiones <code className="bg-gray-100 px-2 py-1 rounded">&lt;%= expresión %&gt;</code></h4>
								<p className="text-base text-gray-700 mb-4">Sirve para mostrar el resultado de una operación directamente en la página HTML.</p>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR IMAGEN: Ejemplo de código JSP Expression con saludo y fecha - Página 4 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 4: Patrón MVC con JSP</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> MVC significa Modelo-Vista-Controlador. Es una forma de organizar el código separando responsabilidades:
								</p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>Modelo:</b> maneja los datos (base de datos)</li>
									<li><b>Vista:</b> lo que ve el usuario (páginas JSP)</li>
									<li><b>Controlador:</b> la lógica que conecta modelo y vista (servlets)</li>
								</ul>
								<p className="text-base text-gray-700 mb-4">Es como separar las responsabilidades: uno se encarga de los datos, otro de mostrar y otro de coordinar.</p>
								<div className="flex justify-center my-6">
									<img src="/Modelo%20Vista%20Controlador.png" alt="MVC - Modelo Vista Controlador" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 5: Maven - Gestor de Dependencias</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Maven es una herramienta que automatiza la gestión de librerías en proyectos Java. En lugar de descargar manualmente cada librería que necesitamos, Maven lo hace automáticamente y maneja las versiones para evitar conflictos.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Archivo pom.xml:</b></p>
								<p className="text-base text-gray-700 mb-4">Es el corazón de Maven, contiene toda la configuración del proyecto y lista de dependencias necesarias.</p>
								<div className="flex justify-center my-6">
									<img src="/pom.xml.png" alt="Ejemplo de pom.xml" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 6: Spring Framework y Spring Boot</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Spring es un framework (conjunto de herramientas) para crear aplicaciones empresariales en Java de manera más fácil y estandarizada. Spring Boot simplifica aún más esto, eliminando configuraciones complejas.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Conceptos clave:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>IoC (Inversión de Control):</b> El framework controla el flujo de la aplicación</li>
									<li><b>Bean:</b> Componentes manejados por Spring</li>
									<li><b>Inyección de Dependencias:</b> Spring crea y conecta automáticamente los objetos</li>
								</ul>
								<div className="flex justify-center my-6">
									<img src="/Spring%20Container.png" alt="Spring Container y Beans" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
							</div>
						</div>
					)}

					{/* Tab Prácticas */}
					{activeTab === 'practicas' && (
						<div className="w-full flex justify-center">
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-amber-100">
								<h2 className="text-3xl md:text-4xl font-black text-amber-600 mb-6">EJERCICIOS DE LABORATORIO - RESULTADOS</h2>
								
								<h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Ejercicio 1: Instalación de JDK Jakarta y Tomcat</h3>
								<p className="text-base text-gray-700 mb-3"><b>Procedimiento realizado:</b></p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1 mb-4">
									<li>Descargué OpenJDK de la página oficial</li>
									<li>Configuré las variables de entorno JAVA_HOME y PATH</li>
									<li>Instalé Apache Tomcat versión 10</li>
									<li>Verifiqué la instalación con los comandos <code className="bg-gray-100 px-1 rounded">java --version</code> y <code className="bg-gray-100 px-1 rounded">javac --version</code></li>
								</ul>
								
								<p className="text-base text-gray-700 font-semibold mt-4">✅ Resultado:</p>
								<ul className="list-none pl-0 text-base text-amber-700 space-y-1 mb-4">
									<li>✓ JDK instalado correctamente</li>
									<li>✓ Tomcat ejecutándose en http://localhost:8080</li>
								</ul>
								
								<div className="flex flex-col gap-2 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Terminal mostrando java --version - Página 11]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Ventana de instalación de Tomcat - Páginas 12-14]</div>
								</div>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 2: Primera Aplicación JSP - Fecha Actual</h3>
								<p className="text-base text-gray-700 font-semibold mb-2">Código implementado:</p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo JSP</title>
</head>
<body>
    <h1>¡Hola desde JSP!</h1>
    <p>La fecha y hora actual es: <%= new java.util.Date() %></p>
</body>
</html>`}
								</pre>
								
								<p className="text-base text-gray-700 font-semibold mt-4">✅ Resultado:</p>
								<p className="text-base text-gray-700 mb-4">La página muestra correctamente el mensaje de bienvenida y la fecha/hora actual del servidor.</p>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Navegador mostrando la página JSP funcionando]</div>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 3: Aplicación JSP con Formulario - Cálculo Factorial</h3>
								<p className="text-base text-gray-700 mb-2"><b>Funcionalidad:</b></p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1 mb-4">
									<li>Formulario que recibe un número</li>
									<li>Calcula el factorial de ese número</li>
									<li>Cuenta las veces que se ejecuta en la sesión</li>
									<li>Valida que sea un número entero positivo</li>
								</ul>
								
								<p className="text-base text-gray-700 font-semibold mt-4">✅ Resultado:</p>
								<ul className="list-none pl-0 text-base text-amber-700 space-y-1 mb-4">
									<li>✓ Cálculo correcto del factorial</li>
									<li>✓ Validación de errores funcionando</li>
									<li>✓ Contador de sesión operativo</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Formulario en funcionamiento mostrando un cálculo]</div>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 4: API REST con Spring Boot - CRUD Estudiantes</h3>
								<p className="text-base text-gray-700 mb-2"><b>Configuración realizada:</b></p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1 mb-4">
									<li>Creé proyecto en <a href="https://start.spring.io/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://start.spring.io/</a></li>
									<li>Configuré conexión a MySQL en application.properties</li>
									<li>Implementé modelo Estudiante con JPA</li>
									<li>Creé repositorio EstudianteRepository</li>
									<li>Desarrollé controlador con endpoints REST</li>
								</ul>
								
								<p className="text-base text-gray-700 mb-2"><b>Endpoints implementados:</b></p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1 mb-4">
									<li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/estudiantes</code> - Crear estudiante</li>
									<li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/estudiantes</code> - Listar todos</li>
									<li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/estudiantes/{'{id}'}</code> - Buscar por ID</li>
									<li><code className="bg-gray-100 px-2 py-1 rounded">PUT /api/estudiantes/{'{id}'}</code> - Actualizar</li>
									<li><code className="bg-gray-100 px-2 py-1 rounded">DELETE /api/estudiantes/{'{id}'}</code> - Eliminar</li>
								</ul>
								
								<p className="text-base text-gray-700 font-semibold mt-4">✅ Resultado:</p>
								<ul className="list-none pl-0 text-base text-amber-700 space-y-1 mb-4">
									<li>✓ API funcionando correctamente</li>
									<li>✓ Probado con Postman exitosamente</li>
								</ul>
								
								<div className="flex flex-col gap-2 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Estructura del proyecto en IntelliJ - Página 16]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Prueba en Postman mostrando respuesta exitosa - Página 21]</div>
								</div>
							</div>
						</div>
					)}

					{/* Tab Bibliografía */}
					{activeTab === 'bibliografia' && (
						<div className="space-y-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="p-4 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl shadow-2xl">
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
										className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-amber-300 overflow-hidden hover:-translate-y-2"
										style={{ animationDelay: `${index * 150}ms` }}
									>
										<div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
										<div className="relative flex items-center gap-5">
											<div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
												<div className="text-white">{resource.icon}</div>
											</div>
											<div className="flex-1 space-y-2">
												<p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Recurso externo</p>
												<h4 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-300">{resource.title}</h4>
											</div>
											<ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-amber-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
								<div className="p-4 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl shadow-2xl">
									<Lightbulb className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-4xl font-black text-gray-800">Reflexión de Aprendizaje</h3>
							</div>
							
							<div className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-l-4 border-amber-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">¿Qué aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									<li><b>Servidor web:</b> Comprendí cómo Apache Tomcat funciona como contenedor para aplicaciones Java web y cómo configurarlo.</li>
									<li><b>JSP como tecnología:</b> Entendí que JSP permite crear páginas dinámicas mezclando HTML con Java, lo cual es fundamental para aplicaciones web interactivas.</li>
									<li><b>Separación de responsabilidades:</b> El patrón MVC me enseñó la importancia de organizar el código en capas para mantener proyectos más mantenibles.</li>
									<li><b>Gestión de proyectos moderna:</b> Maven me mostró cómo gestionar dependencias de forma automática, ahorrando tiempo y evitando errores.</li>
									<li><b>Spring Framework:</b> Descubrí un framework profesional que simplifica el desarrollo empresarial con conceptos como IoC y DI.</li>
									<li><b>API REST:</b> Aprendí a crear servicios web modernos que pueden ser consumidos por diferentes clientes (web, móvil, etc.).</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 border-l-4 border-orange-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">¿Cómo aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									<li><b>Instalación práctica:</b> Configuré mi entorno de desarrollo paso a paso, lo que me dio confianza en el manejo de herramientas.</li>
									<li><b>Ejemplos incrementales:</b> Comencé con una página JSP simple mostrando la fecha, luego agregué formularios y lógica más compleja.</li>
									<li><b>Lectura de documentación:</b> Consulté la documentación oficial de Spring y Jakarta para entender conceptos.</li>
									<li><b>Práctica con ejercicios:</b> Los laboratorios me permitieron aplicar inmediatamente lo aprendido, reforzando los conceptos.</li>
									<li><b>Prueba y error:</b> Usar Postman para probar la API me ayudó a entender cómo funcionan las peticiones HTTP y respuestas JSON.</li>
									<li><b>Comparación de enfoques:</b> Ver la diferencia entre JSP tradicional y Spring Boot me permitió apreciar la evolución de las tecnologías.</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 border-l-4 border-rose-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚧 Desafíos enfrentados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li>Configurar correctamente las variables de entorno</li>
									<li>Entender la sintaxis de JSP mezclada con HTML</li>
									<li>Comprender los conceptos de IoC e inyección de dependencias</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-50 border-l-4 border-pink-600 p-10 rounded-3xl shadow-lg">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Logros alcanzados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li>Ambiente de desarrollo totalmente funcional</li>
									<li>Primera API REST operativa</li>
									<li>Comprensión del flujo MVC en aplicaciones web</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Footer Navigation */}
			<div className="bg-white/90 backdrop-blur-xl border-t-2 border-gray-200 shadow-2xl mt-16">
				<div className="container mx-auto px-6 py-8">
					<div className="flex items-center justify-between">
						<a href="/projects/semana-9" className="flex items-center gap-3 text-gray-700 hover:text-amber-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-amber-50 text-lg">
							<ChevronLeft className="w-6 h-6" />
							Semana Anterior
						</a>
						<a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
							Ver Todas las Semanas
						</a>
						<a href="/projects/semana-13" className="flex items-center gap-3 bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
							Siguiente Semana
							<ChevronRight className="w-6 h-6" />
						</a>
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
				@keyframes fade-in-right {
					from { opacity: 0; transform: translateX(-20px); }
					to { opacity: 1; transform: translateX(0); }
				}
				@keyframes slide-in {
					from { transform: scaleX(0); }
					to { transform: scaleX(1); }
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
				.animate-fade-in-right { animation: fade-in-right 0.5s ease-out forwards; }
				.animate-slide-in { animation: slide-in 0.3s ease-out forwards; }
				.animate-blob { animation: blob 7s infinite; }
				.animate-float { animation: float 3s ease-in-out infinite; }
				.animation-delay-200 { animation-delay: 200ms; }
				.animation-delay-400 { animation-delay: 400ms; }
				.animation-delay-2000 { animation-delay: 2s; }
				.animation-delay-4000 { animation-delay: 4s; }
			`}</style>
		</div>
	);
}
