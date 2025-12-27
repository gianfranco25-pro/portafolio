"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Code, Sparkles, Lightbulb, ExternalLink, Server, Database, Globe, Package, FileCode, Layers, Terminal, Zap, Code2, Home } from 'lucide-react';
import WeekNav from '@/components/WeekNav';

const weekConfig = {
	number: 14,
	icon: '🐍',
	iconBg: 'bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500',
	title: 'Python, Flask y Desarrollo Web',
	subtitle: 'Apache MOD_WSGI, Jinja2 y MySQL Integration',
	description: 'Aprende Python desde cero, domina Flask framework, conecta con MySQL y crea aplicaciones web dinámicas con plantillas Jinja2.'
};

const tabs = [
	{ id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
	{ id: 'practicas', label: 'Prácticas Calificadas', icon: <Code className="w-4 h-4" /> },
	{ id: 'bibliografia', label: 'Bibliografía', icon: <Sparkles className="w-4 h-4" /> },
	{ id: 'reflexion', label: 'Reflexión', icon: <Lightbulb className="w-4 h-4" /> },
];

const recursos = [
	{
		title: 'Python Official Documentation',
		url: 'https://docs.python.org/3/',
		icon: <Code2 className="w-6 h-6" />,
		color: 'from-blue-500 to-cyan-500'
	},
	{
		title: 'Flask Official Docs',
		url: 'https://flask.palletsprojects.com/',
		icon: <Server className="w-6 h-6" />,
		color: 'from-gray-700 to-gray-900'
	},
	{
		title: 'Jinja2 Documentation',
		url: 'https://jinja.palletsprojects.com/',
		icon: <FileCode className="w-6 h-6" />,
		color: 'from-red-600 to-orange-600'
	},
	{
		title: 'PyPI - Python Package Index',
		url: 'https://pypi.org/',
		icon: <Package className="w-6 h-6" />,
		color: 'from-yellow-500 to-orange-500'
	},
	{
		title: 'PEP 8 - Style Guide',
		url: 'https://pep8.org/',
		icon: <Layers className="w-6 h-6" />,
		color: 'from-cyan-600 to-blue-600'
	},
	{
		title: 'PyMySQL Documentation',
		url: 'https://pymysql.readthedocs.io/',
		icon: <Database className="w-6 h-6" />,
		color: 'from-blue-700 to-indigo-700'
	},
];

const reflexion = {
	aprendido: [
		'Python como lenguaje backend: Comprendí que Python no solo sirve para ciencia de datos o scripting, sino que es muy poderoso para desarrollo web.',
		'Filosofía de Python (PEP-8): Aprendí que Python tiene estándares muy claros de escritura de código, facilitando el trabajo en equipo.',
		'MOD_WSGI como puente: Entendí cómo conectar Apache con aplicaciones Python, permitiendo despliegues en producción.',
		'Flask como microframework: Descubrí que no siempre se necesita un framework pesado; Flask ofrece lo esencial.',
		'Programación Orientada a Objetos en Python: Practiqué herencia, sobrescritura de métodos y el uso de super().',
		'Jinja2 para templating: Aprendí a separar lógica de presentación usando un motor de plantillas potente.',
		'Conexión a bases de datos con PyMySQL: Vi cómo Python puede interactuar con MySQL de forma directa.',
		'Decoradores en Python: El uso de @app.route me mostró el poder de los decoradores.',
		'Gestión de dependencias con PIP: Similar a npm o Composer, pero específico para Python.',
		'Request/Response en Flask: Entendí cómo manejar datos enviados por formularios.',
	],
	como: [
		'Comparación con conocimientos previos: Contrastar Flask con Laravel y Spring me ayudó a ver diferentes filosofías de desarrollo.',
		'Instalación manual del ecosistema: Configurar Apache + MOD_WSGI + Python me dio comprensión profunda.',
		'Práctica con POO: El ejercicio de Persona/Estudiante reforzó conceptos de herencia universales.',
		'Desarrollo incremental: Construir la aplicación Flask paso a paso me permitió ver cómo todo se conecta.',
		'Documentación oficial: Consulté docs.python.org y flask.palletsprojects.com.',
		'Experimentación con sintaxis: Python es muy diferente a Java/PHP por su indentación obligatoria.',
		'Debugging activo: Errores de indentación, conexiones a BD y rutas incorrectas me enseñaron mucho.',
		'Integración de componentes: Conectar Flask + MySQL + Jinja2 me mostró cómo diferentes tecnologías trabajan juntas.',
	],
	desafios: [
		'Indentación estricta: Al principio cometí muchos IndentationError por mezclar espacios y tabulaciones.',
		'Configuración de MOD_WSGI: Entender las variables de entorno y rutas correctas fue complejo.',
		'Sintaxis de Jinja2: Confundía cuándo usar {{ }}, {% %} o {# #}.',
		'Conexión a MySQL: Manejar cursores y commits fue diferente a usar ORMs como Eloquent.',
		'Decoradores: El concepto de @app.route era nuevo y tardé en entender cómo funcionan.',
		'Comparación con frameworks completos: Flask al ser minimalista requiere más configuración manual que Laravel.',
	],
	logros: [
		'Entorno Python configurado: Apache + MOD_WSGI + Python funcionando.',
		'Comprensión de POO en Python: Herencia y sobrescritura de métodos.',
		'Primera app Flask: Aplicación web funcional desde cero.',
		'Integración con MySQL: Conexión y operaciones CRUD básicas.',
		'Uso de Jinja2: Plantillas HTML dinámicas.',
		'Manejo de rutas y formularios: Request/Response HTTP.',
		'Aplicación de PEP-8: Código bien formateado siguiendo estándares.',
	]
};

export default function Week14Page() {
	const [activeTab, setActiveTab] = useState('contenido');

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
			<WeekNav currentWeek={weekConfig.number} />
			{/* Header animado */}
			<div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 text-white">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
					<div className="absolute top-0 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
					<div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
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
							<div className="text-cyan-100 font-bold text-lg mb-2">SEMANA {weekConfig.number}</div>
							<h1 className="text-4xl md:text-5xl font-black mb-2">{weekConfig.title}</h1>
							<p className="text-xl text-cyan-100 font-semibold">{weekConfig.subtitle}</p>
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
										? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl scale-105'
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
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-cyan-100">
								<h2 className="text-3xl md:text-4xl font-black text-blue-600 mb-6">📖 TEMAS APRENDIDOS</h2>
								
								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 1: Apache HTTP Server (Repaso)</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Apache es el servidor web más usado en el mundo. Actúa como intermediario entre el navegador del usuario y los archivos del sitio web. Cuando escribimos una URL, Apache recibe la solicitud, busca el contenido solicitado en el servidor y lo envía de vuelta al navegador.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Funciones principales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Recibir peticiones HTTP/HTTPS</li>
									<li>Buscar contenido (HTML, imágenes, videos)</li>
									<li>Enviar respuesta al navegador</li>
								</ul>
								   <div className="flex justify-center my-4"><img src="/funcionamiento-apache.png" alt="Funcionamiento de Apache" className="rounded-xl border shadow max-w-full h-auto" /></div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 2: MOD_WSGI - Puente entre Apache y Python</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> MOD_WSGI (Web Server Gateway Interface) es un módulo que permite ejecutar aplicaciones web Python directamente en Apache. Es el puente que conecta Apache con frameworks como Flask o Django, sin necesidad de servidores intermedios.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Proceso de configuración:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Instalar mod_wsgi con pip: <code className="bg-gray-100 px-2 py-1 rounded">pip install mod_wsgi</code></li>
									<li>Configurar variable de entorno: <code className="bg-gray-100 px-2 py-1 rounded">MOD_WSGI_APACHE_ROOTDIR</code></li>
									<li>Obtener configuración: <code className="bg-gray-100 px-2 py-1 rounded">mod_wsgi-express module-config</code></li>
									<li>Agregar configuración a httpd.conf de Apache</li>
									<li>Configurar WSGIScriptAlias para apuntar a la aplicación</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Ventajas:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Integración directa con Apache</li>
									<li>No requiere servidores adicionales</li>
									<li>Mayor control sobre el despliegue</li>
								</ul>
								   <div className="flex justify-center my-4"><img src="/mod_wsgi-instalacion-configuracion.png" alt="Comandos de instalación y configuración de MOD_WSGI" className="rounded-xl border shadow max-w-full h-auto" /></div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 3: Python - Introducción al Lenguaje</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Python es un lenguaje de programación interpretado, multiparadigma (orientado a objetos, funcional, imperativo) y de tipado dinámico. Es conocido por su sintaxis clara y legible, parecida al lenguaje humano.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características únicas:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>Compilación intermedia (bytecode):</b> Convierte código .py en .pyc para ejecución rápida</li>
									<li><b>Indentación obligatoria:</b> Usa espacios (no llaves) para definir bloques</li>
									<li><b>Tipado dinámico:</b> No necesitas declarar tipos de variables</li>
									<li><b>Multiparadigma:</b> Soporta POO, funcional e imperativa</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Historia resumida:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>1989-1991:</b> Creado por Guido van Rossum</li>
									<li><b>Python 2.x (2000-2010):</b> Unicode, comprensiones de listas</li>
									<li><b>Python 3.x (2008-presente):</b> Mejoras de diseño, f-strings, pattern matching</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Historia y evolución de Python - página 4 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 4: Ámbitos de Uso de Python</h3>
								<p className="text-lg text-gray-700 mb-2">Python se utiliza en múltiples áreas:</p>
								
								<div className="space-y-3 mb-4">
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">1. Educación y enseñanza</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li>Ideal para principiantes por su sintaxis clara</li>
											<li>Jupyter notebooks para aprendizaje interactivo</li>
										</ul>
									</div>
									
									<div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">2. Ciencia de datos e IA</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li>NumPy, Pandas para análisis de datos</li>
											<li>TensorFlow, Scikit-learn para machine learning</li>
											<li>Visualización con Matplotlib, Seaborn</li>
										</ul>
									</div>
									
									<div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">3. Desarrollo web</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li>Django, Flask, FastAPI para aplicaciones web</li>
											<li>APIs RESTful escalables</li>
											<li>Integración con bases de datos</li>
										</ul>
									</div>
									
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">4. Automatización y scripting</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li>Tareas repetitivas automatizadas</li>
											<li>Manejo de archivos y sistemas</li>
											<li>DevOps y testing automatizado</li>
										</ul>
									</div>
									
									<div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">5. IoT y hardware</h4>
										<ul className="text-base text-gray-700 list-disc pl-6 space-y-1">
											<li>Raspberry Pi, Arduino</li>
											<li>Control de sensores y actuadores</li>
											<li>Proyectos de electrónica</li>
										</ul>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Sección de ámbitos de uso - página 4 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 5: Instalación y Primer Programa</h3>
								<p className="text-lg text-gray-700 mb-2"><b>Instalación en Windows:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Descargar de python.org</li>
									<li>Ejecutar instalador</li>
									<li>✅ <b>IMPORTANTE:</b> Marcar &quot;Add Python to PATH&quot;</li>
									<li>Verificar: <code className="bg-gray-100 px-2 py-1 rounded">python --version</code></li>
								</ul>
								
								<p className="text-lg text-gray-700 mb-2"><b>Primer programa (hola.py):</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`# Mi primer programa en Python
print("¡Hola, mundo!")`}
								</pre>
								
								<p className="text-lg text-gray-700 mb-2"><b>Ejecución:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`python hola.py`}
								</pre>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Instalación de Python marcando PATH - página 5 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 6: PIP - Gestor de Paquetes</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> PIP (Python Installs Packages) es el gestor oficial de paquetes de Python. Permite instalar, actualizar y desinstalar bibliotecas desde PyPI (Python Package Index).
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Comandos principales:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`pip install requests          # Instalar paquete
pip list                      # Listar instalados
pip install --upgrade nombre  # Actualizar
pip install -r requirements.txt  # Instalar desde archivo`}
								</pre>
								<p className="text-lg text-gray-700 mb-2"><b>Analogía:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>npm en Node.js</li>
									<li>Composer en PHP</li>
									<li>Maven en Java</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Sección de PIP - página 5 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 7: PEP-8 - Estilo de Código Python</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> PEP-8 es la guía de estilo oficial de Python que define cómo escribir código legible y consistente.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Reglas principales:</b></p>
								
								<div className="space-y-4 mb-4">
									<div>
										<h4 className="text-base font-semibold text-gray-700 mb-1">1. Indentación:</h4>
										<ul className="text-base text-gray-700 list-disc pl-8 space-y-1">
											<li>✅ 4 espacios por nivel (NO tabulaciones)</li>
											<li>❌ Errores de indentación = IndentationError</li>
										</ul>
									</div>
									
									<div>
										<h4 className="text-base font-semibold text-gray-700 mb-1">2. Nombres:</h4>
										<ul className="text-base text-gray-700 list-disc pl-8 space-y-1">
											<li>Funciones/variables: <code className="bg-gray-100 px-2 py-1 rounded">snake_case</code> → calcular_promedio</li>
											<li>Clases: <code className="bg-gray-100 px-2 py-1 rounded">PascalCase</code> → EstudianteUniversitario</li>
											<li>Constantes: <code className="bg-gray-100 px-2 py-1 rounded">MAYUSCULAS</code> → MAX_INTENTOS</li>
										</ul>
									</div>
									
									<div>
										<h4 className="text-base font-semibold text-gray-700 mb-1">3. Espacios:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`# ✅ Correcto
x = 3 + 4
def suma(a, b=2):

# ❌ Incorrecto
x=3+4
def suma(a, b = 2):`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-base font-semibold text-gray-700 mb-1">4. Longitud de línea:</h4>
										<p className="text-base text-gray-700 pl-8">Máximo 79 caracteres</p>
									</div>
									
									<div>
										<h4 className="text-base font-semibold text-gray-700 mb-1">5. Importaciones:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`# Estándar
import os
import sys

# Terceros
import requests

# Locales
from mi_paquete import modulo`}
										</pre>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Reglas de PEP-8 - página 6 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 8: Sintaxis Básica de Python</h3>
								
								<div className="space-y-4 mb-4">
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">1. Comentarios:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`# Una línea
"""
Múltiples
líneas
"""`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">2. Variables (sin declaración de tipo):</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`nombre = "Ana"
edad = 30
altura = 1.65`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">3. Salida:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`print("Hola, mundo!")
print("La edad es", edad)`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">4. Condicionales:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`if edad >= 18:
    print("Mayor de edad")
elif edad >= 13:
    print("Adolescente")
else:
    print("Niño")`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">5. Bucles:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`# for
for i in range(3):
    print("Repetición", i)

# while
contador = 0
while contador < 3:
    print("Contador:", contador)
    contador += 1`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">6. Funciones:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`def saludar(nombre):
    print("Hola", nombre)

saludar("Lucía")`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">7. POO:</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def saludar(self):
        print(f"Hola, soy {self.nombre}")`}
										</pre>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Ejemplos de sintaxis - páginas 7-8 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 9: Flask Framework</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Flask es un microframework de Python para desarrollo web. Es ligero, flexible y fácil de usar, perfecto para crear aplicaciones web rápidamente sin configuraciones complejas. Utiliza el patrón MVC.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>Características principales:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Servidor de desarrollo integrado</li>
									<li>Sistema de rutas con decoradores @app.route</li>
									<li>Motor de plantillas Jinja2</li>
									<li>Extensible con plugins</li>
									<li>Compatible con WSGI</li>
								</ul>
								<p className="text-lg text-gray-700 mb-2"><b>Ventajas:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Curva de aprendizaje suave</li>
									<li>Documentación excelente</li>
									<li>Gran comunidad</li>
									<li>Ideal para APIs y prototipos</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Descripción de Flask - página 9 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 10: Terminología de Flask</h3>
								
								<div className="space-y-3 mb-4">
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Flask</h4>
										<p className="text-base text-gray-700">Núcleo del framework</p>
									</div>
									
									<div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Route (@app.route)</h4>
										<p className="text-base text-gray-700 mb-2">Decorador que define URLs</p>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs rounded-lg p-2 overflow-x-auto whitespace-pre leading-relaxed">
{`@app.route('/inicio')
def inicio():
    return "Página de inicio"`}
										</pre>
									</div>
									
									<div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Request</h4>
										<p className="text-base text-gray-700">Objeto con datos del cliente (formularios, parámetros)</p>
									</div>
									
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Response</h4>
										<p className="text-base text-gray-700">Datos que devolvemos al cliente</p>
									</div>
									
									<div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">render_template</h4>
										<p className="text-base text-gray-700">Renderiza archivos HTML con Jinja2</p>
									</div>
									
									<div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Jinja2</h4>
										<p className="text-base text-gray-700">Motor de plantillas para HTML dinámico</p>
									</div>
									
									<div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Debug mode</h4>
										<p className="text-base text-gray-700">Recarga automática y errores detallados</p>
									</div>
									
									<div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Blueprint</h4>
										<p className="text-base text-gray-700">Divide la app en módulos reutilizables</p>
									</div>
									
									<div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
										<h4 className="text-lg font-bold text-gray-800 mb-1">Session</h4>
										<p className="text-base text-gray-700">Almacena información del usuario</p>
									</div>
								</div>
								
								<p className="text-lg text-gray-700 mb-2"><b>Extensiones comunes:</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li><b>Flask-SQLAlchemy:</b> Bases de datos</li>
									<li><b>Flask-Migrate:</b> Migraciones de BD</li>
									<li><b>Flask-Login:</b> Autenticación</li>
									<li><b>Flask-WTF:</b> Formularios con validación</li>
								</ul>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Terminología de Flask - páginas 9-10 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 11: Primera Aplicación Flask</h3>
								<p className="text-lg text-gray-700 mb-2"><b>Instalación:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`pip install flask`}
								</pre>
								
								<p className="text-lg text-gray-700 mb-2"><b>Código básico (app.py):</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`from flask import Flask

app = Flask(__name__)

@app.route('/')
def hola():
    return '¡Hola Mundo desde Flask!'

if __name__ == '__main__':
    app.run(debug=True)`}
								</pre>
								
								<p className="text-lg text-gray-700 mb-2"><b>Ejecución:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`python app.py`}
								</pre>
								
								<p className="text-base text-gray-700 mb-4"><b>Acceso:</b> <a href="http://127.0.0.1:5000/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://127.0.0.1:5000/</a></p>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Primera aplicación - página 10 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 12: Jinja2 - Motor de Plantillas</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Definición:</b> Jinja2 es un motor de plantillas que permite generar HTML dinámico, separando la lógica del backend de la presentación visual.
								</p>
								<p className="text-lg text-gray-700 mb-2"><b>¿Qué hace Jinja2?</b></p>
								<ul className="text-base md:text-lg text-gray-700 list-disc pl-8 space-y-1 mb-4">
									<li>Inserta datos dinámicos en HTML</li>
									<li>Usa condicionales y bucles</li>
									<li>Permite herencia de plantillas</li>
									<li>Aplica filtros y macros</li>
								</ul>
								
								<p className="text-lg text-gray-700 mb-2"><b>Estructura de proyecto:</b></p>
								<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed my-4">
{`mi_proyecto/
├── app.py
└── templates/
    ├── base.html
    └── index.html`}
								</pre>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Estructura de proyecto Jinja2 - página 11 del PDF]</div>

								<h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-8 mb-2">Tema 13: Sentencias de Jinja2</h3>
								
								<div className="space-y-4 mb-4">
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">1. Variables <code className="bg-gray-100 px-2 py-1 rounded">{`{{ }}`}</code></h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`<p>Hola {{ nombre }}</p>`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">2. Bucles for</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`<ul>
{% for fruta in frutas %}
    <li>{{ fruta }}</li>
{% endfor %}
</ul>`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">3. Condicionales</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`{% if edad >= 18 %}
    <p>Mayor de edad</p>
{% else %}
    <p>Menor de edad</p>
{% endif %}`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">4. Herencia (extends y block)</h4>
										<p className="text-base text-gray-700 mb-1">base.html:</p>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed mb-2">
{`<html>
<body>
    {% block contenido %}{% endblock %}
</body>
</html>`}
										</pre>
										<p className="text-base text-gray-700 mb-1">hijo.html:</p>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`{% extends "base.html" %}
{% block contenido %}
    <p>Contenido específico</p>
{% endblock %}`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">5. Filtros <code className="bg-gray-100 px-2 py-1 rounded">|</code></h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`<p>{{ nombre|upper }}</p>  <!-- MAYÚSCULAS -->
<p>{{ texto|length }}</p>   <!-- Longitud -->`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">6. Comentarios</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`{# Este comentario no se muestra #}`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">7. Asignación set</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`{% set saludo = "Hola" %}
<p>{{ saludo }} {{ nombre }}</p>`}
										</pre>
									</div>
									
									<div>
										<h4 className="text-lg font-semibold text-gray-700 mb-2">8. Control de bucle (loop)</h4>
										<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`{% for item in lista %}
    <p>{{ loop.index }} - {{ item }}</p>
{% endfor %}`}
										</pre>
									</div>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Ejemplos de sentencias Jinja2 - páginas 11-12 del PDF]</div>
							</div>
						</div>
					)}

					{/* Tab Prácticas */}
					{activeTab === 'practicas' && (
						<div className="w-full flex justify-center">
							<div className="w-full max-w-4xl bg-white/95 rounded-3xl shadow-2xl p-10 md:p-14 border border-cyan-100">
								<h2 className="text-3xl md:text-4xl font-black text-blue-600 mb-6">EJERCICIOS DE LABORATORIO - RESULTADOS</h2>
								
								<h3 className="text-2xl font-bold text-gray-800 mt-8 mb-2">Ejercicio 1: Programación Orientada a Objetos - Herencia</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Objetivo:</b> Crear un sistema de clases con herencia: Persona (clase base) y Estudiante (clase derivada).
								</p>
								
								<div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-4">📝 Código implementado:</h4>
									
									<div className="space-y-6">
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">Clase Persona (base):</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def presentarse(self):
        return f"Hola, soy {self.nombre} y tengo {self.edad} años."`}
											</pre>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">Clase Estudiante (derivada):</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`class Estudiante(Persona):
    def __init__(self, nombre, edad, carrera):
        super().__init__(nombre, edad)  # Hereda de Persona
        self.carrera = carrera
    
    def estudiar(self):
        return f"{self.nombre} está estudiando {self.carrera}."
    
    def presentarse(self):
        # Sobrescribe el método de Persona
        return f"Hola, soy {self.nombre}, tengo {self.edad} años y estudio {self.carrera}."`}
											</pre>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">Uso:</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`alumno = Estudiante("Laura", 20, "Ingeniería de Sistemas")
print(alumno.presentarse())
# Salida: Hola, soy Laura, tengo 20 años y estudio Ingeniería de Sistemas.

print(alumno.estudiar())
# Salida: Laura está estudiando Ingeniería de Sistemas.`}
											</pre>
										</div>
									</div>
								</div>
								
								<div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-3">💡 Conceptos aplicados:</h4>
									<ul className="text-base text-gray-700 list-none pl-0 space-y-1">
										<li>✅ Herencia con super()</li>
										<li>✅ Sobrescritura de métodos</li>
										<li>✅ Constructor __init__</li>
										<li>✅ Atributos de instancia</li>
										<li>✅ Métodos personalizados</li>
									</ul>
								</div>
								
								<div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
									<p className="text-base text-green-700 font-semibold">✔️ Resultado:</p>
									<p className="text-base text-gray-700">Sistema de clases funcional demostrando herencia y polimorfismo</p>
								</div>
								<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-4">[INSERTAR CAPTURA: Terminal ejecutando el código y mostrando las salidas]</div>

								<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-2">Ejercicio 2: Aplicación Web Flask con MySQL</h3>
								<p className="text-lg text-gray-700 mb-4">
									<b>Objetivo:</b> Crear una aplicación web completa con Flask que permita registrar estudiantes en una base de datos MySQL.
								</p>
								
								<div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
									<h4 className="text-xl font-bold text-gray-800 mb-4">📋 Pasos realizados:</h4>
									
									<div className="space-y-6">
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">1. Instalación de dependencias</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`pip install flask pymysql`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Librerías instaladas correctamente</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">2. Creación de base de datos</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`CREATE DATABASE escuela;
USE escuela;

CREATE TABLE estudiantes (
    IdEstudiante INT PRIMARY KEY AUTO_INCREMENT,
    nomEstudiante VARCHAR(100),
    dirEstudiante VARCHAR(150),
    ciuEstudiante VARCHAR(100)
);`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Base de datos y tabla creadas en MySQL</p>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: phpMyAdmin mostrando la tabla estudiantes]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">3. Módulo de conexión (conexion.py)</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`import pymysql

def obtener_conexion():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='123456',
        db='escuela',
        cursorclass=pymysql.cursors.DictCursor
    )`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Módulo de conexión reutilizable creado</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">4. Aplicación principal (app.py)</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`from flask import Flask, render_template, request, redirect
from conexion import obtener_conexion

app = Flask(__name__)

@app.route('/')
def formulario():
    return render_template('formulario.html')

@app.route('/guardar', methods=['POST'])
def guardar():
    nombre = request.form['nombre']
    direccion = request.form['direccion']
    ciudad = request.form['ciudad']
    
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute(
            "INSERT INTO estudiantes(nomEstudiante, dirEstudiante, ciuEstudiante) VALUES (%s, %s, %s)",
            (nombre, direccion, ciudad)
        )
    conexion.commit()
    conexion.close()
    
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Aplicación Flask con dos rutas funcionales</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">5. Plantilla HTML (templates/formulario.html)</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`<!DOCTYPE html>
<html>
<head>
    <title>Registro de Estudiantes</title>
</head>
<body>
    <h1>Agregar Estudiante</h1>
    <form action="/guardar" method="post">
        <label>Nombre:</label><br>
        <input type="text" name="nombre"><br>
        
        <label>Dirección:</label><br>
        <input type="text" name="direccion"><br>
        
        <label>Ciudad:</label><br>
        <input type="text" name="ciudad"><br><br>
        
        <input type="submit" value="Guardar">
    </form>
</body>
</html>`}
											</pre>
											<p className="text-base text-green-700 font-semibold mt-2">✔️ Resultado: Formulario HTML funcional</p>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">6. Estructura del proyecto</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`mi_proyecto/
├── app.py
├── conexion.py
└── templates/
    └── formulario.html`}
											</pre>
											<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800 my-2">[INSERTAR CAPTURA: Estructura de archivos en el explorador]</div>
										</div>
										
										<div>
											<h5 className="text-lg font-semibold text-gray-800 mb-2">7. Ejecución y prueba</h5>
											<pre className="bg-gray-800 text-gray-100 font-mono text-xs md:text-sm rounded-lg p-4 overflow-x-auto whitespace-pre leading-relaxed">
{`python app.py`}
											</pre>
											<p className="text-base text-gray-700 mb-2">Accedí a <a href="http://localhost:5000" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">http://localhost:5000</a> y probé:</p>
											<ul className="text-base text-green-700 list-none pl-0 space-y-1">
												<li>✓ Formulario se muestra correctamente</li>
												<li>✓ Ingresé datos de prueba</li>
												<li>✓ Datos se guardan en MySQL</li>
												<li>✓ Redirección correcta después de guardar</li>
											</ul>
											<div className="flex flex-col gap-2 my-4">
												<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Terminal mostrando Flask corriendo]</div>
												<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Formulario en el navegador]</div>
												<div className="bg-gray-100 rounded-lg p-2 text-xs font-mono text-gray-800">[INSERTAR CAPTURA: Datos insertados en phpMyAdmin]</div>
											</div>
										</div>
									</div>
								</div>
								
								<div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
									<h4 className="text-xl font-bold text-gray-800 mb-3">✅ Resultado Final del Ejercicio:</h4>
									<p className="text-base text-gray-700 mb-3">Aplicación web completa con:</p>
									<ul className="text-base text-gray-700 list-disc pl-8 space-y-1">
										<li>Conexión a MySQL con PyMySQL</li>
										<li>Rutas Flask (GET y POST)</li>
										<li>Formulario HTML</li>
										<li>Inserción de datos en base de datos</li>
										<li>Redirección después de guardar</li>
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* Tab Bibliografía */}
					{activeTab === 'bibliografia' && (
						<div className="space-y-10">
							<div className="flex items-center gap-4 mb-10">
								<div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl">
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
										className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-cyan-300 overflow-hidden hover:-translate-y-2"
										style={{ animationDelay: `${index * 150}ms` }}
									>
										<div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
										<div className="relative flex items-center gap-5">
											<div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
												<div className="text-white">{resource.icon}</div>
											</div>
											<div className="flex-1 space-y-2">
												<p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Recurso externo</p>
												<h4 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{resource.title}</h4>
											</div>
											<ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
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
								<div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl shadow-2xl">
									<Lightbulb className="w-7 h-7 text-white" />
								</div>
								<h3 className="text-4xl font-black text-gray-800">Reflexión de Aprendizaje</h3>
							</div>
							
							<div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-l-4 border-blue-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">💡 ¿Qué aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									{reflexion.aprendido.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-cyan-50 via-teal-50 to-blue-50 border-l-4 border-cyan-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">📚 ¿Cómo aprendí?</h4>
								<ul className="list-disc pl-10 space-y-3 text-lg text-gray-700">
									{reflexion.como.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50 border-l-4 border-teal-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚧 Desafíos enfrentados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									{reflexion.desafios.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1] || item.split(':')[0]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 border-l-4 border-blue-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Logros alcanzados:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									{reflexion.logros.map((item, idx) => (
										<li key={idx}><b>{item.split(':')[0]}:</b>{item.split(':')[1]}</li>
									))}
								</ul>
							</div>

							<div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 border-l-4 border-cyan-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">⚖️ Comparación con otras tecnologías:</h4>
								<div className="overflow-x-auto">
									<table className="w-full text-left border-collapse">
										<thead>
											<tr className="bg-blue-100">
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Aspecto</th>
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Laravel (PHP)</th>
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Spring (Java)</th>
												<th className="border border-gray-300 px-4 py-2 font-bold text-gray-800">Flask (Python)</th>
											</tr>
										</thead>
										<tbody className="text-base text-gray-700">
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Curva aprendizaje</td>
												<td className="border border-gray-300 px-4 py-2">Media</td>
												<td className="border border-gray-300 px-4 py-2">Alta</td>
												<td className="border border-gray-300 px-4 py-2 bg-green-50">Baja</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Configuración</td>
												<td className="border border-gray-300 px-4 py-2">Media</td>
												<td className="border border-gray-300 px-4 py-2">Alta</td>
												<td className="border border-gray-300 px-4 py-2 bg-green-50">Mínima</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Estructura</td>
												<td className="border border-gray-300 px-4 py-2">Muy opinionado</td>
												<td className="border border-gray-300 px-4 py-2">Muy estructurado</td>
												<td className="border border-gray-300 px-4 py-2 bg-green-50">Flexible</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Velocidad desarrollo</td>
												<td className="border border-gray-300 px-4 py-2">Rápida</td>
												<td className="border border-gray-300 px-4 py-2">Media</td>
												<td className="border border-gray-300 px-4 py-2 bg-green-50">Muy rápida</td>
											</tr>
											<tr>
												<td className="border border-gray-300 px-4 py-2 font-semibold">Ideal para</td>
												<td className="border border-gray-300 px-4 py-2">Apps completas</td>
												<td className="border border-gray-300 px-4 py-2">Empresarial</td>
												<td className="border border-gray-300 px-4 py-2 bg-green-50">Prototipos/APIs</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-l-4 border-indigo-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🚀 Aplicaciones prácticas:</h4>
								<p className="text-lg text-gray-700 mb-3">Este conocimiento me permite:</p>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li>Crear APIs RESTful rápidas</li>
									<li>Prototipos de aplicaciones web</li>
									<li>Scripts de automatización web</li>
									<li>Integración con machine learning</li>
									<li>Microservicios ligeros</li>
									<li>Herramientas internas de empresa</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 border-l-4 border-purple-600 p-10 rounded-3xl shadow-lg mb-8">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">✨ Ventajas de Python/Flask que descubrí:</h4>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li><b>Sintaxis legible:</b> Código casi como pseudocódigo</li>
									<li><b>Desarrollo rápido:</b> Menos código, más productividad</li>
									<li><b>Gran ecosistema:</b> Miles de librerías disponibles</li>
									<li><b>Versatilidad:</b> Mismo lenguaje para web, IA, scripts</li>
									<li><b>Comunidad activa:</b> Mucha documentación y tutoriales</li>
								</ul>
							</div>

							<div className="bg-gradient-to-br from-pink-50 via-red-50 to-orange-50 border-l-4 border-pink-600 p-10 rounded-3xl shadow-lg">
								<h4 className="text-2xl font-bold text-gray-800 mb-4">🎯 Próximos pasos:</h4>
								<p className="text-lg text-gray-700 mb-3">Quiero explorar:</p>
								<ul className="list-disc pl-10 space-y-2 text-lg text-gray-700">
									<li>Django (framework completo de Python)</li>
									<li>Flask-SQLAlchemy para ORMs</li>
									<li>Autenticación con Flask-Login</li>
									<li>APIs REST completas con Flask-RESTful</li>
									<li>Despliegue en producción (Gunicorn + Nginx)</li>
									<li>Integración de ML models en Flask</li>
									<li>Testing con pytest</li>
									<li>Websockets con Flask-SocketIO</li>
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
						<a href="/projects/semana-13" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-blue-50 text-lg">
							<ChevronLeft className="w-6 h-6" />
							Semana Anterior
						</a>
						<a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
							Ver Todas las Semanas
						</a>
						<a href="/projects/semana-15" className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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
