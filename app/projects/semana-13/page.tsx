"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Code, Sparkles, Lightbulb, ExternalLink, Server, Database, Globe, Package, FileCode, Layers, Terminal, Zap } from 'lucide-react';

const weekConfig = {
	number: 13,
	icon: '🐘',
	iconBg: 'bg-gradient-to-br from-purple-500 via-indigo-400 to-blue-500',
	title: 'PHP, Laravel y Desarrollo Web Moderno',
	subtitle: 'Apache HTTP Server, Composer y Framework Laravel',
	description: 'Domina PHP desde cero, configura Apache, aprende Laravel Framework y crea aplicaciones web profesionales con arquitectura MVC.'
};

const tabs = [
	{ id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
	{ id: 'practicas', label: 'Prácticas Calificadas', icon: <Code className="w-4 h-4" /> },
	{ id: 'bibliografia', label: 'Bibliografía', icon: <Sparkles className="w-4 h-4" /> },
	{ id: 'reflexion', label: 'Reflexión', icon: <Lightbulb className="w-4 h-4" /> },
];

const recursos = [
	{
		title: 'Apache HTTP Server',
		url: 'https://httpd.apache.org/',
		icon: <Server className="w-6 h-6" />,
		color: 'from-red-500 to-orange-500'
	},
	{
		title: 'PHP Official Documentation',
		url: 'https://www.php.net/docs.php',
		icon: <FileCode className="w-6 h-6" />,
		color: 'from-purple-500 to-indigo-500'
	},
	{
		title: 'Laravel Official Docs',
		url: 'https://laravel.com/docs',
		icon: <Layers className="w-6 h-6" />,
		color: 'from-red-600 to-orange-600'
	},
	{
		title: 'Composer - Dependency Manager',
		url: 'https://getcomposer.org/',
		icon: <Package className="w-6 h-6" />,
		color: 'from-yellow-600 to-orange-600'
	},
	{
		title: 'Laravel Bootcamp',
		url: 'https://bootcamp.laravel.com/',
		icon: <Terminal className="w-6 h-6" />,
		color: 'from-indigo-600 to-purple-600'
	},
	{
		title: 'Tailwind CSS',
		url: 'https://tailwindcss.com/docs',
		icon: <Zap className="w-6 h-6" />,
		color: 'from-cyan-500 to-blue-500'
	},
];

const reflexion = {
	aprendido: [
		'Ecosistema PHP completo: Entendí cómo PHP, Apache y MySQL trabajan juntos para crear aplicaciones web dinámicas.',
		'Gestión de entornos: Aprendí a configurar un ambiente de desarrollo profesional desde cero, instalando y configurando Apache, PHP y Composer.',
		'Framework moderno: Laravel me mostró cómo un framework puede simplificar dramáticamente el desarrollo web.',
		'Patrón MVC en la práctica: Comprendí cómo separar la lógica de negocio (Controlador), los datos (Modelo) y la presentación (Vista).',
		'ORM Eloquent: Descubrí que puedo trabajar con bases de datos usando objetos PHP en lugar de escribir SQL manualmente.',
		'Sistema de plantillas Blade: Aprendí a crear vistas dinámicas de forma elegante, mezclando HTML con código PHP.',
		'Migraciones de base de datos: Entendí cómo versionar y controlar cambios en la estructura de la base de datos mediante código.',
		'Integración de frontend moderno: Con Tailwind CSS aprendí que puedo tener interfaces profesionales sin escribir CSS desde cero.',
		'Artisan CLI: Descubrí el poder de la línea de comandos para automatizar tareas repetitivas del desarrollo.',
		'Gestión de dependencias: Composer me enseñó cómo los proyectos modernos manejan librerías externas de forma eficiente.',
	],
	como: [
		'Aprendizaje por configuración: Configurar manualmente Apache, PHP y todas sus extensiones me obligó a entender cómo funciona cada componente.',
		'Documentación oficial: Consulté constantemente la documentación de Laravel en laravel.com, lo que me enseñó a leer documentación técnica profesional.',
		'Línea de comandos: Usar Artisan para generar código me familiarizó con la terminal y me hizo más eficiente.',
		'Práctica incremental: El ejercicio del laboratorio me guió paso a paso desde la instalación hasta una aplicación funcional.',
		'Arquitectura por observación: Explorar la estructura de directorios de Laravel me ayudó a entender cómo se organiza un proyecto profesional.',
		'Depuración activa: Cada error encontrado me obligó a investigar y entender mejor el framework.',
		'Comparación con conocimientos previos: Contrastar Laravel con el desarrollo JSP/Spring de semanas anteriores me permitió apreciar las diferencias.',
		'Experimentación: Después de completar el ejercicio básico, modifiqué valores y probé diferentes configuraciones.',
	],
	desafios: [
		'Configuración inicial compleja: Instalar y configurar Apache + PHP manualmente fue tedioso.',
		'Dependencias de Node.js: La integración de Tailwind requirió entender npm.',
		'Convenciones de Laravel: Al principio fue confuso recordar dónde va cada archivo.',
		'Artisan y comandos: Memorizar los comandos correctos de Artisan tomó tiempo.',
		'Debugging de rutas: Entender cómo Laravel maneja las rutas requirió varios intentos.',
	],
	logros: [
		'Entorno de desarrollo completo: Tengo Apache, PHP, Composer y Laravel funcionando perfectamente.',
		'Primera aplicación Laravel: Creé una aplicación funcional con CRUD básico desde cero.',
		'Comprensión del MVC: Entiendo y puedo implementar el patrón MVC en proyectos reales.',
		'Base de datos con migraciones: Aprendí a gestionar bases de datos de forma programática.',
		'Interfaz moderna: Integré Tailwind CSS exitosamente para crear interfaces atractivas.',
		'Flujo completo: Domino el ciclo completo desde la solicitud HTTP hasta la respuesta con datos guardados.',
	]
};

export default function Week13Page() {
	const [activeTab, setActiveTab] = useState('contenido');

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
			{/* Header animado */}
			<div className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-indigo-400 to-blue-500 text-white">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
					<div className="absolute top-0 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
				</div>
				
				<div className="relative container mx-auto px-6 py-16">
					<div className="flex items-center gap-4 mb-6 animate-fade-in">
						<div className="text-6xl animate-float">{weekConfig.icon}</div>
						<div>
							<div className="text-indigo-100 font-bold text-lg mb-2">SEMANA {weekConfig.number}</div>
							<h1 className="text-4xl md:text-5xl font-black mb-2">{weekConfig.title}</h1>
							<p className="text-xl text-indigo-100 font-semibold">{weekConfig.subtitle}</p>
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
										? 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-xl scale-105'
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
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-purple-100">
								<h2 className="text-3xl md:text-4xl font-black text-purple-600 mb-6">📖 TEMAS APRENDIDOS</h2>
								
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 1: Apache HTTP Server</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Apache es el servidor web más popular del mundo. Funciona como un intermediario que recibe las peticiones que hacemos desde el navegador (cuando escribimos una URL) y nos devuelve las páginas web, imágenes y archivos que solicitamos. Es de código abierto y gratuito.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Funcionamiento básico:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Recibe la solicitud HTTP desde el navegador</li>
									<li>Busca el contenido solicitado en el servidor</li>
									<li>Envía la respuesta de vuelta al navegador</li>
								</ul>
								<p className="text-lg text-gray-700 mb-4">
									<b>Apache Lounge:</b> Es una comunidad que proporciona versiones compiladas de Apache especialmente para Windows, facilitando su instalación y uso.
								</p>
								<div className="flex justify-center my-4">
									<img src="/Apache%20Lounge.png" alt="Apache Lounge mostrando la descarga" className="rounded-lg shadow-lg max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 2: PHP - Lenguaje del Lado del Servidor</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> PHP (PHP: Hypertext Preprocessor) es un lenguaje de programación diseñado específicamente para desarrollo web. Se ejecuta en el servidor, no en el navegador del usuario. Permite crear páginas web dinámicas que cambian según las interacciones del usuario o datos de la base de datos.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características principales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Es de código abierto</li>
									<li>Se integra fácilmente con HTML</li>
									<li>Puede interactuar con bases de datos (MySQL, PostgreSQL, etc.)</li>
									<li>El código PHP nunca se ve en el navegador, solo el resultado HTML</li>
								</ul>
								<p className="text-lg text-gray-700 mb-4">
									<b>¿Cómo funciona?</b> El servidor recibe una solicitud → PHP procesa el código → genera HTML → el navegador muestra el resultado final.
								</p>
								<div className="flex justify-center my-4">
									<img src="/Cómo%20Funciona%20PHP.png" alt="¿Cómo Funciona PHP?" className="rounded-lg shadow-lg max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 3: Instalación y Configuración del Entorno</h3>
								
								<h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Instalación de Apache:</h4>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Descargar de Apache Lounge</li>
									<li>Extraer en una carpeta (ej: D:\Server\Apache24)</li>
									<li>Configurar httpd.conf con puerto y rutas</li>
									<li>Ejecutar httpd.exe</li>
								</ul>
								
								<h4 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Instalación de PHP:</h4>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Descargar ZIP oficial de windows.php.net</li>
									<li>Extraer en carpeta (ej: D:\server\php)</li>
									<li>Configurar php.ini (copiar desde php.ini-development)</li>
									<li>Agregar PHP al PATH del sistema</li>
									<li>Verificar con <code className="bg-gray-100 px-2 py-1 rounded">php -v</code></li>
								</ul>
								
								<p className="text-lg text-gray-700 mb-4">
									<b>Archivo httpd.conf:</b> Es el archivo de configuración principal de Apache que controla todo su comportamiento: puertos, directorios, módulos, etc.
								</p>
								<div className="flex flex-col gap-2 my-4">
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Proceso de extracción de archivos - páginas 1-2]</div>
									<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Verificación de php -v en terminal - página 2]</div>
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 4: Composer - Gestor de Dependencias</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Composer es una herramienta fundamental en PHP que gestiona automáticamente las librerías y paquetes que nuestro proyecto necesita. Es similar a npm en Node.js o pip en Python.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características importantes:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Instala dependencias por proyecto (no globalmente)</li>
									<li>Las guarda en la carpeta vendor/</li>
									<li>Se configura mediante un archivo composer.json</li>
									<li>Maneja versiones y compatibilidades automáticamente</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Instalación:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Descargar de getcomposer.org</li>
									<li>Ejecutar instalador indicando ruta de PHP</li>
									<li>Verificar con <code className="bg-gray-100 px-2 py-1 rounded">composer -V</code></li>
								</ul>
								<div className="flex justify-center my-4">
									<img src="/instalación%20de%20Composer.png" alt="Instalación de Composer" className="rounded-lg shadow-lg max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 5: Sintaxis Básica de PHP</h3>
								<p className="text-lg text-gray-700 mb-2"><b>Estructura básica:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`<?php
// Todo el código PHP va aquí
?>`}
								</pre>
								
								<p className="text-lg text-gray-700 mb-2"><b>Elementos fundamentales:</b></p>
								
								<h4 className="text-base font-semibold text-gray-700 mt-3 mb-1">Variables: Se declaran con $</h4>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`$nombre = "Ana";
$edad = 25;`}
								</pre>
								
								<h4 className="text-base font-semibold text-gray-700 mt-3 mb-1">Salida de datos: echo y print</h4>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`echo "Hola mundo";`}
								</pre>
								
								<h4 className="text-base font-semibold text-gray-700 mt-3 mb-1">Comentarios:</h4>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`// Una línea
/* Múltiples líneas */`}
								</pre>
								
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4 mt-4">
									<li><b>Condicionales:</b> if, else, switch</li>
									<li><b>Bucles:</b> for, while, foreach</li>
									<li><b>Funciones:</b> Bloques de código reutilizables</li>
									<li><b>Inclusión de archivos:</b> include, require</li>
								</ul>
								
								<p className="text-base text-gray-700 mb-4">
									<b>Importante:</b> Las variables distinguen mayúsculas/minúsculas, pero las funciones no.
								</p>
								<div className="flex justify-center my-4">
									<img src="/Ejemplos%20de%20código%20PHP.png" alt="Ejemplos de código PHP" className="rounded-lg shadow-lg max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 6: Laravel Framework</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Laravel es el framework de PHP más popular y moderno. Simplifica el desarrollo web mediante patrones y herramientas que hacen el código más elegante, mantenible y seguro. Utiliza el patrón MVC (Modelo-Vista-Controlador).
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Ventajas de Laravel:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Sintaxis elegante y expresiva</li>
									<li>Herramientas integradas (autenticación, APIs, etc.)</li>
									<li>ORM Eloquent para bases de datos</li>
									<li>Sistema de plantillas Blade</li>
									<li>Gran comunidad y documentación</li>
								</ul>
								<div className="flex justify-center my-4">
									<img src="/Logo%20y%20descripción%20de%20Laravel.png" alt="Logo y descripción de Laravel" className="rounded-lg shadow-lg max-w-full h-auto" />
								</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 7: Terminología Clave de Laravel</h3>
								
								<div className="space-y-4">
									<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Routes (Rutas)</h4>
										<p className="text-base text-gray-700">Definen los puntos de entrada de la aplicación. Conectan URLs con controladores.</p>
									</div>
									
									<div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Controllers (Controladores)</h4>
										<p className="text-base text-gray-700">Agrupan la lógica de negocio y gestionan las peticiones del usuario.</p>
									</div>
									
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Views y Blade</h4>
										<p className="text-base text-gray-700">Blade es el motor de plantillas de Laravel. Permite mezclar HTML con código PHP de forma elegante.</p>
									</div>
									
									<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Eloquent ORM</h4>
										<p className="text-base text-gray-700">Herramienta para interactuar con la base de datos usando objetos PHP en lugar de SQL puro.</p>
									</div>
									
									<div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Middleware</h4>
										<p className="text-base text-gray-700">Filtros que se ejecutan entre la solicitud y la respuesta (ej: verificar autenticación).</p>
									</div>
									
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Artisan</h4>
										<p className="text-base text-gray-700">Interfaz de línea de comandos de Laravel para automatizar tareas (crear controladores, migraciones, etc.).</p>
									</div>
									
									<div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Migrations</h4>
										<p className="text-base text-gray-700">Sistema para versionar y modificar la estructura de la base de datos.</p>
									</div>
									
									<div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
										<h4 className="text-lg font-bold text-gray-800 mb-2">Seeds</h4>
										<p className="text-base text-gray-700">Scripts para poblar la base de datos con datos de prueba.</p>
									</div>
								</div>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Sección de terminología - páginas 8-9 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 8: Instalación de Laravel</h3>
								<p className="text-lg text-gray-700 mb-2"><b>Métodos de instalación:</b></p>
								
								<h4 className="text-base font-semibold text-gray-700 mt-3 mb-1">1. Con Composer directamente:</h4>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`composer create-project laravel/laravel nombre-proyecto`}
								</pre>
								
								<h4 className="text-base font-semibold text-gray-700 mt-3 mb-1">2. Con Laravel Installer:</h4>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`composer global require "laravel/installer"
laravel new nombre-proyecto`}
								</pre>
								
								<p className="text-lg text-gray-700 mb-2 mt-4"><b>Configuración necesaria en php.ini:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`extension=zip
extension=fileinfo
extension=pdo_sqlite
extension=pgsql`}
								</pre>
								
								<p className="text-lg text-gray-700 mb-2 mt-4"><b>Iniciar servidor de desarrollo:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-2">
{`php artisan serve`}
								</pre>
								<p className="text-base text-gray-700 mb-4">Acceder en: <a href="http://localhost:8000" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://localhost:8000</a></p>
								
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Comandos de instalación - páginas 9-10 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 9: Estructura de Directorios de Laravel</h3>
								<p className="text-lg text-gray-700 mb-2"><b>Directorios principales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>app/:</b> Núcleo de la aplicación (modelos, controladores, middleware)</li>
									<li><b>config/:</b> Archivos de configuración</li>
									<li><b>database/:</b> Migraciones, factories, seeders</li>
									<li><b>public/:</b> Punto de entrada (index.php) y archivos públicos</li>
									<li><b>resources/:</b> Vistas, CSS, JS sin compilar</li>
									<li><b>routes/:</b> Definición de rutas (web.php, api.php)</li>
									<li><b>storage/:</b> Archivos generados (logs, caché, sesiones)</li>
									<li><b>vendor/:</b> Dependencias de Composer</li>
								</ul>
								<p className="text-base text-gray-700 mb-4">Esta estructura organizada facilita el mantenimiento y la escalabilidad del proyecto.</p>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Diagrama de estructura de directorios - páginas 10-11 del PDF]</div>
							</div>
						</div>
					)}

					{/* Tab Prácticas */}
					{activeTab === 'practicas' && (
						<div className="w-full flex justify-center">
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-purple-100">
								<h2 className="text-3xl md:text-4xl font-black text-purple-600 mb-6">EJERCICIOS DE LABORATORIO - RESULTADOS</h2>
								
								<h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Ejercicio 1: Creación de Proyecto Laravel con CRUD de Estudiantes</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Objetivo:</b> Crear una aplicación Laravel completa con formulario de registro de estudiantes, conexión a MySQL y estilos con Tailwind CSS.
								</p>
								
								<div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-4">📋 Pasos realizados:</h4>
									
									<div className="space-y-6">
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">1. Creación del proyecto</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`laravel new estudiantes-app
cd estudiantes-app`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Proyecto Laravel creado exitosamente con toda la estructura base.</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">2. Configuración de base de datos</h5>
											<p className="text-base text-gray-700 mb-2">Edité el archivo <code className="bg-gray-100 px-2 py-1 rounded">.env</code> con mis credenciales de MySQL:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`DB_DATABASE=academico
DB_USERNAME=root
DB_PASSWORD=123456`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Conexión a base de datos configurada correctamente.</p>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Archivo .env editado]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">3. Creación del modelo y migración</h5>
											<p className="text-base text-gray-700 mb-2">Ejecuté el comando:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`php artisan make:model Estudiante -m`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Edité la migración para definir la estructura de la tabla:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`Schema::create('estudiantes', function (Blueprint $table) {
    $table->id('idEstudiante');
    $table->string('nomEstudiante');
    $table->string('dirEstudiante');
    $table->string('ciuEstudiante');
    $table->timestamps();
});`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Ejecuté la migración:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`php artisan migrate`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Tabla estudiantes creada en la base de datos con todos los campos necesarios.</p>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: phpMyAdmin mostrando la tabla creada]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">4. Instalación y configuración de Tailwind CSS</h5>
											<p className="text-base text-gray-700 mb-2">Instalé las dependencias:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Configuré <code className="bg-gray-100 px-2 py-1 rounded">resources/css/app.css</code>:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Compilé los assets:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`npm install
npm run dev`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Tailwind CSS integrado y funcionando para estilizar la aplicación.</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">5. Creación de rutas</h5>
											<p className="text-base text-gray-700 mb-2">Edité <code className="bg-gray-100 px-2 py-1 rounded">routes/web.php</code>:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`use App\\Http\\Controllers\\EstudianteController;

Route::get('/', [EstudianteController::class, 'create']);
Route::post('/guardar', [EstudianteController::class, 'store']);`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Rutas definidas - una para mostrar el formulario (GET) y otra para guardar datos (POST).</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">6. Creación del controlador</h5>
											<p className="text-base text-gray-700 mb-2">Generé el controlador:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`php artisan make:controller EstudianteController`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Implementé los métodos:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`public function create() {
    return view('formulario');
}

public function store(Request $request) {
    Estudiante::create([
        'nomEstudiante' => $request->nombre,
        'dirEstudiante' => $request->direccion,
        'ciuEstudiante' => $request->ciudad
    ]);
    return redirect('/')->with('mensaje', 'Estudiante registrado');
}`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Controlador funcional con lógica para mostrar formulario y guardar estudiantes.</p>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Código del controlador]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">7. Configuración del modelo</h5>
											<p className="text-base text-gray-700 mb-2">Edité <code className="bg-gray-100 px-2 py-1 rounded">app/Models/Estudiante.php</code>:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`protected $table = 'estudiantes';
protected $primaryKey = 'idEstudiante';
protected $fillable = ['nomEstudiante', 'dirEstudiante', 'ciuEstudiante'];`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Modelo configurado para interactuar correctamente con la tabla.</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">8. Creación de la vista con Tailwind</h5>
											<p className="text-base text-gray-700 mb-2">Generé la vista:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`php artisan make:view formulario`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Implementé el formulario en <code className="bg-gray-100 px-2 py-1 rounded">resources/views/formulario.blade.php</code> con estilos de Tailwind:</p>
											<ul className="text-base text-gray-700 list-disc pl-8 space-y-1">
												<li>Formulario centrado con fondo gris</li>
												<li>Campos de entrada estilizados</li>
												<li>Botón azul para enviar</li>
												<li>Diseño responsivo</li>
											</ul>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Vista profesional y moderna con Tailwind CSS.</p>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Formulario en el navegador mostrando el diseño]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">9. Prueba de la aplicación</h5>
											<p className="text-base text-gray-700 mb-2">Inicié el servidor:</p>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`php artisan serve`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Accedí a <a href="http://localhost:8000" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://localhost:8000</a> y probé:</p>
											<ul className="text-base text-green-700 list-none pl-0 space-y-1">
												<li>✓ Formulario se muestra correctamente</li>
												<li>✓ Puedo ingresar datos de estudiante</li>
												<li>✓ Al enviar, los datos se guardan en la base de datos</li>
												<li>✓ Redirección exitosa después de guardar</li>
											</ul>
											<div className="flex flex-col gap-2 my-4">
												<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Formulario completo en el navegador]</div>
												<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Datos guardados en phpMyAdmin]</div>
												<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Mensaje de confirmación]</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
									<h4 className="text-xl font-bold text-gray-800 mb-3">✅ Resultado Final del Ejercicio:</h4>
									<p className="text-base text-gray-700 mb-3">Aplicación Laravel completamente funcional con:</p>
									<ul className="text-base text-gray-700 list-disc pl-8 space-y-1">
										<li>Conexión a MySQL</li>
										<li>Modelo Eloquent</li>
										<li>Controlador con lógica de negocio</li>
										<li>Rutas configuradas</li>
										<li>Vista con Tailwind CSS</li>
										<li>Sistema CRUD básico operativo</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* Tab Bibliografía */}
					{activeTab === 'bibliografia' && (
						<div className="space-y-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl shadow-2xl">
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
										className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-purple-300 overflow-hidden hover:-translate-y-2"
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
								<div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl shadow-2xl">
									<Lightbulb className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-4xl font-black text-gray-800">Reflexión de Aprendizaje</h3>
							</div>
							
							<div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border-l-4 border-purple-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">💡 ¿Qué aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									{reflexion.aprendido.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 border-l-4 border-indigo-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">📚 ¿Cómo aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									{reflexion.como.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-l-4 border-blue-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚧 Desafíos enfrentados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									{reflexion.desafios.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1] || item.split(':')[0]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50 border-l-4 border-cyan-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Logros alcanzados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									{reflexion.logros.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 border-l-4 border-teal-600 p-10 rounded-3xl shadow-lg">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚀 Aplicaciones prácticas:</h4>
								<p className="text-lg text-gray-700 mb-3">Este conocimiento me permite:</p>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li>Crear sistemas web completos (blogs, e-commerce, CRMs)</li>
									<li>Desarrollar APIs RESTful para aplicaciones móviles</li>
									<li>Trabajar en proyectos empresariales que usan Laravel</li>
									<li>Entender código de proyectos PHP existentes</li>
									<li>Colaborar en equipos de desarrollo web profesionales</li>
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
						<a href="/projects/semana-12" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-purple-50 text-lg">
							<ChevronLeft className="w-6 h-6" />
							Semana Anterior
						</a>
						<a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
							Ver Todas las Semanas
						</a>
						<a href="/projects/semana-14" className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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