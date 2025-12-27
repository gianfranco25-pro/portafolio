"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Code, Sparkles, Lightbulb, ExternalLink, Box, Server, Database, Globe, Layers, Package, FileCode, Shield, Zap, Home } from 'lucide-react';
import WeekNav from '@/components/WeekNav';

const weekConfig = {
	number: 9,
	icon: '☕',
	iconBg: 'bg-gradient-to-br from-orange-500 via-yellow-400 to-red-500',
	title: 'Desarrollo Backend con Java Server Pages (JSP)',
	subtitle: 'Apache Tomcat, Maven y Arquitecturas Web',
	description: 'Aprende los fundamentos del desarrollo backend con Java, arquitecturas web, servidores, despliegue con Tomcat y gestión de proyectos con Maven.'
};

const tabs = [
	{ id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
	{ id: 'practicas', label: 'Prácticas Calificadas', icon: <Code className="w-4 h-4" /> },
	{ id: 'bibliografia', label: 'Bibliografía', icon: <Sparkles className="w-4 h-4" /> },
	{ id: 'reflexion', label: 'Reflexión', icon: <Lightbulb className="w-4 h-4" /> },
];

const contentItems = [
	{
		id: 1,
		title: 'Arquitecturas de Aplicaciones Web',
		icon: <Box className="w-5 h-5" />,
		color: 'from-orange-500 via-yellow-400 to-red-500',
		subtopics: [
			'Modelo cliente-servidor',
			'Multi-Page Application (MPA)',
			'Single Page Application (SPA)',
			'Arquitectura Híbrida',
			'Arquitectura Hexagonal',
		]
	},
	{
		id: 2,
		title: 'Apache Tomcat',
		icon: <Server className="w-5 h-5" />,
		color: 'from-red-500 via-orange-500 to-yellow-500',
		subtopics: [
			'Instalación y configuración',
			'Estructura de directorios',
			'Despliegue de aplicaciones WAR',
			'Configuración de puertos y conectores',
			'Manager de aplicaciones',
		]
	},
	{
		id: 3,
		title: 'Java Server Pages (JSP)',
		icon: <FileCode className="w-5 h-5" />,
		color: 'from-yellow-500 via-orange-400 to-red-500',
		subtopics: [
			'Sintaxis básica de JSP',
			'Directivas, Scriptlets y Expresiones',
			'Objetos implícitos',
			'JSTL y EL (Expression Language)',
			'Ciclo de vida de JSP',
		]
	},
	{
		id: 4,
		title: 'Maven',
		icon: <Package className="w-5 h-5" />,
		color: 'from-orange-600 via-red-500 to-yellow-500',
		subtopics: [
			'Estructura de proyecto Maven',
			'Archivo pom.xml',
			'Gestión de dependencias',
			'Ciclo de vida y plugins',
			'Repositorios Maven',
		]
	},
	{
		id: 5,
		title: 'Seguridad Web',
		icon: <Shield className="w-5 h-5" />,
		color: 'from-red-500 via-orange-500 to-yellow-400',
		subtopics: [
			'Autenticación y autorización',
			'HTTPS y certificados SSL',
			'Protección contra XSS y CSRF',
			'Tokens JWT',
			'OAuth 2.0',
		]
	},
];

const recursos = [
	{
		title: 'Documentación Apache Tomcat',
		url: 'https://tomcat.apache.org/tomcat-10.1-doc/',
		icon: <Server className="w-6 h-6" />,
		color: 'from-orange-500 to-red-500'
	},
	{
		title: 'Java Server Pages Tutorial',
		url: 'https://www.javatpoint.com/jsp-tutorial',
		icon: <FileCode className="w-6 h-6" />,
		color: 'from-yellow-500 to-orange-500'
	},
	{
		title: 'Maven Getting Started',
		url: 'https://maven.apache.org/guides/getting-started/',
		icon: <Package className="w-6 h-6" />,
		color: 'from-red-500 to-orange-500'
	},
	{
		title: 'Jakarta EE Documentation',
		url: 'https://jakarta.ee/specifications/',
		icon: <Globe className="w-6 h-6" />,
		color: 'from-orange-600 to-yellow-500'
	},
];

const reflexion = [
	'La instalación y configuración del entorno Java con OpenJDK y Tomcat fue fundamental para comprender cómo funciona el desarrollo backend.',
	'Aprendí la importancia de las variables de entorno y cómo permiten que las herramientas de desarrollo se comuniquen correctamente.',
	'Maven simplifica enormemente la gestión de dependencias y la estructura de proyectos Java empresariales.',
	'Los Java Server Pages (JSP) permiten crear aplicaciones web dinámicas integrando código Java con HTML de manera eficiente.',
	'Comprender las diferentes arquitecturas web (MPA, SPA, Híbrida) ayuda a tomar mejores decisiones de diseño en proyectos reales.',
	'La configuración del IDE IntelliJ IDEA con Tomcat agiliza el proceso de desarrollo y deployment.',
	'La práctica de crear y desplegar una aplicación JSP desde cero refuerza los conceptos teóricos aprendidos.',
];

export default function Week9Page() {
	const [activeTab, setActiveTab] = useState('contenido');

	return (
		<div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
			<WeekNav currentWeek={weekConfig.number} />
			{/* Header animado */}
			<div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-yellow-400 to-red-500 text-white">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
					<div className="absolute top-0 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
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
							<div className="text-orange-100 font-bold text-lg mb-2">SEMANA {weekConfig.number}</div>
							<h1 className="text-4xl md:text-5xl font-black mb-2">{weekConfig.title}</h1>
							<p className="text-xl text-orange-100 font-semibold">{weekConfig.subtitle}</p>
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
										? 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-xl scale-105'
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
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-orange-100">
								<h2 className="text-3xl md:text-4xl font-black text-orange-600 mb-6">1. 📖 TEMAS APRENDIDOS</h2>
								
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.1 Arquitecturas de Aplicaciones Web</h3>
								<p className="text-lg text-gray-700">Las aplicaciones web funcionan bajo un modelo cliente-servidor, donde el navegador (cliente) solicita recursos y el servidor los procesa y entrega.</p>
								<div className="flex justify-center my-6">
									<img src="/Diagrama%20de%20Arquitectura%20Cliente-Servidor.png" alt="Diagrama de Arquitectura Cliente-Servidor" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1">
									<li><b>Multi-Page Application (MPA):</b> Aplicaciones web tradicionales donde cada página tiene su propio archivo HTML, CSS y JavaScript. Cada navegación carga una página completamente nueva del servidor.</li>
									<li><b>Single Page Application (SPA):</b> El servidor envía una sola página HTML inicial con todo el código. JavaScript se encarga de mostrar diferentes vistas sin recargar. Solo solicita datos puros al servidor.</li>
									<li><b>Arquitectura Híbrida:</b> Combina características de MPA y SPA, permitiendo componentes dinámicos dentro de una estructura multipágina (ejemplo: Next.js).</li>
									<li><b>Arquitectura Hexagonal:</b> Separa la aplicación en capas independientes usando &quot;puertos y adaptadores&quot;. Permite que cada parte evolucione por separado y sea más fácil de mantener.</li>
								</ul>
								<div className="flex justify-center my-6">
									<img src="/Diagrama%20de%20Arquitectura%20Hexagonal.png" alt="Diagrama de Arquitectura Hexagonal" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.2 Servidores Web y Servicios de Hosting</h3>
								<p className="text-lg text-gray-700">¿Qué es un Servidor Web? Es una computadora de alta potencia que almacena los archivos de un sitio web (HTML, CSS, JavaScript, imágenes, videos, etc.) y los transmite a los usuarios a través de Internet usando el protocolo HTTP bajo una arquitectura cliente/servidor.</p>
								<div className="flex justify-center my-6">
									<img src="/Servidor%20HP%20ProLiant.png" alt="Servidor HP ProLiant" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1">
									<li>Apache HTTP Server</li>
									<li>NGINX</li>
									<li>Apache Tomcat</li>
									<li>Microsoft IIS</li>
									<li>Node.js</li>
									<li>LiteSpeed</li>
								</ul>
								<p className="text-base md:text-lg text-gray-700 mt-2"><b>Tipos de Hosting:</b> Compartido, VPS, Dedicado, Administrado, Cloud Hosting.</p>
								<div className="flex justify-center my-6">
									<img 
										src="/Logotipos%20de%20proveedores%20Cloud.png" 
										alt="Logotipos de proveedores Cloud"
										className="rounded-xl border shadow max-w-2xl w-full h-auto bg-white"
									/>
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.3 Gestión de Dominios Web</h3>
								<p className="text-lg text-gray-700">¿Qué es un Dominio? Es el nombre único que identifica tu sitio web en Internet. Es el enlace entre tu público y tu página web, establece el posicionamiento de marca.</p>
								<div className="flex justify-center my-6">
									<img src="/Partes%20de%20un%20dominio%20web.png" alt="Partes de un dominio web" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.4 Configuración de Servidores Web</h3>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1">
									<li>Apache HTTP Server: httpd.conf</li>
									<li>Apache Tomcat: server.xml</li>
								</ul>
								<p className="text-base md:text-lg text-gray-700 mt-2">Parámetros esenciales: DocumentRoot, Listen, ServerName, DirectoryIndex, ErrorDocument, SSLEngine, MaxClients, Timeout.</p>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.5 Funcionamiento del Server Side</h3>
								<ol className="text-base md:text-lg text-gray-700 list-decimal pl-8 space-y-1">
									<li>El navegador del usuario envía una solicitud HTTP al servidor</li>
									<li>El servidor interpreta la solicitud</li>
									<li>Se ejecuta código del lado servidor</li>
									<li>Se consultan bases de datos si es necesario</li>
									<li>El servidor genera una respuesta</li>
									<li>El servidor envía la respuesta al cliente</li>
								</ol>
								<div className="flex justify-center my-6">
									<img src="/Diagrama%20de%20flujo%20Server%20Side.png" alt="Diagrama de flujo Server Side" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
								<div className="flex justify-center my-6">
									<img src="/Diagrama%20Apache%20+%20PHP%20.png" alt="Diagrama Apache + PHP" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
								<div className="flex justify-center my-6">
									<img src="/Diagrama%20Tomcat%20+%20JSP%20.png" alt="Diagrama Tomcat + JSP" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.6 Ecosistema Server Side</h3>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1">
									<li>Sistema Operativo</li>
									<li>Software de Servidor Web</li>
									<li>Lenguaje de Programación Backend</li>
									<li>Sistema Gestor de Base de Datos</li>
									<li>Herramientas de desarrollo</li>
								</ul>
								<div className="flex justify-center my-6">
									<img src="/Lenguajes%20Backend.png" alt="Lenguajes Backend" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
								<div className="flex justify-center my-6">
									<img src="/Gestores%20de%20BD.png" alt="Gestores de BD" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.7 Stack Tecnológico en Desarrollo Web</h3>
								<div className="flex justify-center my-6">
									<img src="/Stack%20Frontend.png" alt="Stack Frontend" className="rounded-xl border shadow max-w-full h-auto" />
								</div>
								<div className="flex justify-center my-6">
									<img src="/Stack%20Backend.png" alt="Stack Backend" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.8 Servidor Web Apache Tomcat</h3>
								<div className="flex justify-center my-6">
									<img src="/Módulos%20de%20Tomcat.png" alt="Módulos de Tomcat" className="rounded-xl border shadow max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.9 Gestión de Dependencias con Maven</h3>
								<p className="text-base md:text-lg text-gray-700">Maven es una herramienta de software libre para gestionar proyectos Java lanzada en 2002. Se basa en archivos XML y su filosofía es la estandarización de las estructuras de aplicaciones y su configuración.</p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>web2</artifactId>
    <version>1.0-SNAPSHOT</version>
    <properties>
        <maven.compiler.source>20</maven.compiler.source>
        <maven.compiler.target>20</maven.compiler.target>
    </properties>
</project>`}
								</pre>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">1.10 Autenticación Basada en Tokens</h3>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1">
									<li>JWT (JSON Web Token)</li>
									<li>OAuth Tokens</li>
									<li>SAML Tokens</li>
									<li>API Keys</li>
								</ul>
							</div>
						</div>
					)}

					{/* Tab Prácticas */}
					{activeTab === 'practicas' && (
						<div className="w-full flex justify-center">
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-orange-100">
								<h2 className="text-3xl md:text-4xl font-black text-orange-600 mb-6">EJERCICIOS DE LABORATORIO - RESULTADOS</h2>
								
								<h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Ejercicio 1: Instalación de OpenJDK y Apache Tomcat</h3>
								
								<h4 className="text-lg font-semibold text-gray-700 mt-6 mb-1">📥 Parte A: Instalación de OpenJDK 19</h4>
								<p className="text-base text-gray-700">Procedimiento realizado:</p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1">
									<li>Descargué los binarios de OpenJDK desde la página oficial: <a href="https://jdk.java.net/19/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://jdk.java.net/19/</a></li>
									<li>Extraje el archivo ZIP descargado en la ubicación: <span className="font-mono bg-gray-100 px-1 rounded">C:\java\jdk-19.0.2</span></li>
									<li>Configuré las variables de entorno del sistema:
										<ul className="list-disc pl-8">
											<li><b>JAVA_HOME:</b> Apunta a <span className="font-mono bg-gray-100 px-1 rounded">C:\java\jdk-19.0.2</span></li>
											<li><b>PATH:</b> Agregué <span className="font-mono bg-gray-100 px-1 rounded">%JAVA_HOME%\bin</span></li>
										</ul>
									</li>
									<li>Verifiqué la instalación ejecutando los comandos en terminal</li>
								</ul>
								
								<div className="flex flex-col gap-4 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Descarga de OpenJDK desde la página oficial]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Extracción de archivos en C:\java]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Configuración de variables de entorno JAVA_HOME y PATH]</div>
								</div>
								
								<p className="text-base text-gray-700 font-semibold mt-4">✅ Verificación de instalación:</p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`C:\\Users\\Usuario> java --version
openjdk 19.0.2 2023-01-17
OpenJDK Runtime Environment (build 19.0.2+7-44)
OpenJDK 64-Bit Server VM (build 19.0.2+7-44, mixed mode, sharing)

C:\\Users\\Usuario> javac --version
javac 19.0.2`}
								</pre>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Terminal mostrando comandos java --version y javac --version]</div>
								<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado:</p>
								<p className="text-base text-gray-700">OpenJDK instalado correctamente y funcionando desde cualquier terminal. Las variables de entorno están configuradas apropiadamente.</p>

								<h4 className="text-lg font-semibold text-gray-700 mt-8 mb-1">🌐 Parte B: Instalación de Apache Tomcat 10</h4>
								<p className="text-base text-gray-700">Procedimiento realizado:</p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1">
									<li>Accedí a la página oficial: <a href="http://tomcat.apache.org/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://tomcat.apache.org/</a></li>
									<li>Descargué el instalador Tomcat 10 - Windows Service Installer (64-bit)</li>
									<li>Ejecuté el archivo de instalación y seguí el asistente:
										<ul className="list-disc pl-8">
											<li>Acepté el acuerdo de licencia (License Agreement)</li>
											<li>Seleccioné instalación Completa (Full)</li>
											<li>Mantuve el puerto por defecto: 8080</li>
											<li>Especifiqué la ubicación de Java JDK</li>
											<li>Completé la instalación y verifiqué el servicio</li>
										</ul>
									</li>
								</ul>
								
								<div className="flex flex-col gap-4 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Página de descarga de Apache Tomcat]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Pantalla de bienvenida del instalador de Tomcat]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Aceptación de License Agreement]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Selección de tipo de instalación Full]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Configuración del puerto 8080]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Especificación de la ruta de Java JDK]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Proceso de instalación completándose]</div>
								</div>
								
								<p className="text-base text-gray-700 font-semibold mt-4">✅ Verificación de Tomcat:</p>
								<p className="text-base text-gray-700 mb-2">Después de la instalación, verifiqué que Tomcat estuviera ejecutándose accediendo a: <a href="http://localhost:8080/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://localhost:8080/</a></p>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Navegador mostrando la página de inicio de Tomcat en localhost:8080]</div>
								<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado:</p>
								<p className="text-base text-gray-700">Apache Tomcat instalado exitosamente y ejecutándose como servicio de Windows. El servidor responde correctamente en el puerto 8080 y está listo para desplegar aplicaciones web Java.</p>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 2: Creación de Proyecto Web JSP en IntelliJ IDEA</h3>
								
								<h4 className="text-lg font-semibold text-gray-700 mt-6 mb-1">💻 Instalación y Configuración de IntelliJ IDEA</h4>
								<p className="text-base text-gray-700">Procedimiento realizado:</p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1">
									<li>Descargué e instalé IntelliJ IDEA Community Edition desde: <a href="https://www.jetbrains.com/idea/download/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/idea/download/</a></li>
									<li>Abrí IntelliJ IDEA y creé un nuevo proyecto:
										<ul className="list-disc pl-8">
											<li>Tipo: Java Enterprise (Jakarta EE)</li>
											<li>Template: Web Application</li>
											<li>Application Server: Tomcat 10.x</li>
											<li>Language: Java</li>
											<li>Build System: Maven</li>
										</ul>
									</li>
									<li>Configuré el servidor Tomcat en el IDE:
										<ul className="list-disc pl-8">
											<li>Run → Edit Configurations</li>
											<li>Agregué Tomcat Server → Local</li>
											<li>Especifiqué la ruta de instalación de Tomcat</li>
										</ul>
									</li>
									<li>Creé la estructura básica del proyecto web</li>
								</ul>
								
								<div className="flex flex-col gap-4 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Pantalla de descarga de IntelliJ IDEA]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Pantalla de &quot;New Project&quot; en IntelliJ seleccionando Java Enterprise]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Configuración del proyecto con Maven y Tomcat]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Estructura de directorios del proyecto creado]</div>
								</div>
								
								<p className="text-base text-gray-700 font-semibold mt-4">📁 Estructura del Proyecto Creado:</p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`mi-proyecto-web/
├── src/
│   ├── main/
│   │   ├── java/ (Servlets y clases Java)
│   │   ├── resources/ (Recursos de configuración)
│   │   └── webapp/ (Archivos web)
│   │       ├── WEB-INF/
│   │       │   └── web.xml
│   │       └── index.jsp
│   └── test/
├── pom.xml (Configuración Maven)
└── README.md`}
								</pre>
								
								<p className="text-base text-gray-700 font-semibold mt-4">📝 Código del archivo <span className="font-mono bg-gray-100 px-1 rounded">index.jsp</span> creado:</p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Mi Primera Aplicación JSP</title>
</head>
<body>
    <h1>¡Hola Mundo desde JSP!</h1>
    <p>Esta es mi primera aplicación web con Java Server Pages</p>
    <p>Fecha y hora actual: <%= new java.util.Date() %></p>
</body>
</html>`}
								</pre>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Editor de IntelliJ mostrando el código de index.jsp]</div>
								
								<p className="text-base text-gray-700 font-semibold mt-4">▶️ Ejecución del Proyecto:</p>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1">
									<li>Configuré la ejecución del proyecto haciendo clic en &quot;Add Configuration&quot;</li>
									<li>Seleccioné el servidor Tomcat previamente configurado</li>
									<li>Hice clic en el botón &quot;Run&quot; (▶️) para desplegar la aplicación</li>
									<li>El navegador se abrió automáticamente mostrando la aplicación</li>
								</ul>
								
								<div className="flex flex-col gap-4 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Configuración de Run/Debug con Tomcat en IntelliJ]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Consola de IntelliJ mostrando el deployment exitoso]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Navegador mostrando la aplicación ejecutándose en http://localhost:8080/nombre-proyecto/]</div>
								</div>
								
								<p className="text-base text-gray-700 font-semibold mt-4">📄 Archivo <span className="font-mono bg-gray-100 px-1 rounded">pom.xml</span> configurado:</p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.miempresa</groupId>
    <artifactId>mi-proyecto-web</artifactId>
    <version>1.0-SNAPSHOT</version>
    <packaging>war</packaging>
    <dependencies>
        <dependency>
            <groupId>jakarta.servlet</groupId>
            <artifactId>jakarta.servlet-api</artifactId>
            <version>5.0.0</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>jakarta.servlet.jsp</groupId>
            <artifactId>jakarta.servlet.jsp-api</artifactId>
            <version>3.0.0</version>
            <scope>provided</scope>
        </dependency>
    </dependencies>
</project>`}
								</pre>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Archivo pom.xml abierto en el editor]</div>
								
								<h3 className="text-2xl font-bold text-green-700 mt-10 mb-2">✔️ Resultado Final:</h3>
								<ul className="list-disc pl-8 text-base text-gray-700 space-y-1">
									<li><b>Entorno Configurado</b>
										<ul className="list-disc pl-8">
											<li>OpenJDK 19 instalado</li>
											<li>Variables de entorno configuradas</li>
											<li>Tomcat 10 funcionando</li>
											<li>IntelliJ IDEA listo</li>
										</ul>
									</li>
									<li><b>Proyecto Funcional</b>
										<ul className="list-disc pl-8">
											<li>Proyecto Maven creado</li>
											<li>Estructura web correcta</li>
											<li>JSP ejecutándose</li>
											<li>Servidor integrado al IDE</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					)}

					{/* Tab Bibliografía */}
					{activeTab === 'bibliografia' && (
						<div className="space-y-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl">
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
										className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-300 overflow-hidden hover:-translate-y-2"
										style={{ animationDelay: `${index * 150}ms` }}
									>
										<div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
										<div className="relative flex items-center gap-5">
											<div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
												<div className="text-white">{resource.icon}</div>
											</div>
											<div className="flex-1 space-y-2">
												<p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Recurso externo</p>
												<h4 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{resource.title}</h4>
											</div>
											<ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
								<div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl shadow-2xl">
									<Lightbulb className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-4xl font-black text-gray-800">Reflexión de Aprendizaje</h3>
							</div>
							<div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 border-l-4 border-orange-600 p-10 rounded-3xl shadow-lg">
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									{reflexion.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
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
						<a href="/projects/semana-8" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-orange-50 text-lg">
							<ChevronLeft className="w-6 h-6" />
							Semana Anterior
						</a>
						<a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
							Ver Todas las Semanas
						</a>
						<a href="/projects/semana-10" className="flex items-center gap-3 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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
