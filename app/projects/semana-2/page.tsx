"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, Zap, Coffee, Layers, Database, Palette } from 'lucide-react';
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState<'ejemplos' | 'contenido' | 'recursos'>('ejemplos');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#contenido') {
        setActiveTab('contenido');
      }
    }
  }, []);
  type ExampleType = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
    reflection: string;
    code: string;
  };
  const [selectedExample, setSelectedExample] = useState<ExampleType | null>(null);
  const [expandedContent, setExpandedContent] = useState<number | null>(null);
  const [exampleTab, setExampleTab] = useState<'reflexion' | 'codigo'>('reflexion');
  const [isHoveringIllustration, setIsHoveringIllustration] = useState(false);

  const weekConfig = {
    number: 2,
    icon: '🎨',
    iconBg: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
    title: 'HTML y CSS Avanzado',
    subtitle: 'Desarrollo Web Moderno',
    description: 'Domina técnicas avanzadas de HTML5 y CSS3. Desde elementos semánticos y APIs modernas hasta layouts complejos con Flexbox y Grid, creando interfaces responsivas y accesibles.'
  };

  const tabs = [
    { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ejemplos', label: 'Ejemplos Prácticos', icon: <Code className="w-4 h-4" /> },
    { id: 'recursos', label: 'Recursos', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const contentItems = [
    { 
      id: 1, 
      title: 'HTML Avanzado', 
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      subtopics: [
        'Elementos y atributos globales (data-*, id, class, style, title)',
        'Uso de template y slot para contenido dinámico',
        'Elementos multimedia: <video>, <audio> y sus atributos',
        'Integración de SVG y Canvas para gráficos',
        'Formularios avanzados: validación y tipos de entrada',
        'API de HTML5: Drag and Drop, GeoLocation, Web Storage',
        'Microdatos y marcado semántico avanzado',
        'Integración con JavaScript: eventos y manipulación del DOM',
        'Técnicas de accesibilidad y etiquetado (aria-*)',
        'Buenas prácticas de SEO en HTML'
      ]
    },
    { 
      id: 2, 
      title: 'CSS Básico', 
      icon: <Palette className="w-5 h-5" />,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      subtopics: [
        'Selectores simples y compuestos y Especificidad',
        'Propiedades de Texto y Fuentes',
        'Modelo de Caja (Box Model)',
        'Colores y Fondos',
        'Unidades de Medida (px, %, em, rem, vh, vw)',
        'Posicionamiento (static, relative, absolute, fixed, sticky)',
        'Flexbox (Diseño flexible)',
        'Grid Layout (Diseño de cuadrícula)',
        'Pseudo-clases y Pseudo-elementos',
        'Transiciones y Animaciones básicas'
      ]
    },
    { 
      id: 3, 
      title: 'CSS Avanzado', 
      icon: <Layers className="w-5 h-5" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      subtopics: [
        'Variables CSS y Custom Properties',
        'Funciones CSS (calc(), clamp(), min(), max())',
        'Grid Layout avanzado (Áreas de grid, auto-fit, auto-fill)',
        'Flexbox avanzado (Alineaciones, distribución dinámica)',
        'Diseño responsivo (Media Queries y Mobile-first)',
        'Scroll Snap y Técnicas de Scroll',
        'Clipping y Masking con CSS',
        'Propiedades y Contenedores CSS (Container Queries)',
        'Filtros y Efectos Visuales avanzados',
        'Técnicas de Performance y Optimización en CSS'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'Formulario HTML5 Avanzado',
      description: 'Formulario con validación nativa, tipos de input modernos y atributos de accesibilidad',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      reflection: 'Los formularios HTML5 modernos aprovechan validación nativa del navegador, reduciendo la necesidad de JavaScript. Los atributos como required, pattern y tipos especializados (email, tel, date) mejoran la experiencia del usuario y la accesibilidad. El uso de aria-* y labels apropiados garantiza que los formularios sean utilizables por todos.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario Avanzado</title>
</head>
<body>
    <form id="registroForm" novalidate>
        <fieldset>
            <legend>Información Personal</legend>
            
            <!-- Input con validación y accesibilidad -->
            <div class="form-group">
                <label for="nombre">Nombre completo</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre"
                    required
                    minlength="3"
                    maxlength="50"
                    aria-required="true"
                    aria-describedby="nombre-help"
                >
                <small id="nombre-help">Ingrese su nombre completo</small>
            </div>
            
            <!-- Email con validación -->
            <div class="form-group">
                <label for="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
                    aria-required="true"
                >
            </div>
            
            <!-- Teléfono con pattern -->
            <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input 
                    type="tel" 
                    id="telefono" 
                    name="telefono"
                    pattern="[0-9]{9}"
                    placeholder="999999999"
                    aria-describedby="tel-help"
                >
                <small id="tel-help">9 dígitos sin espacios</small>
            </div>
            
            <!-- Fecha con restricciones -->
            <div class="form-group">
                <label for="fecha">Fecha de nacimiento</label>
                <input 
                    type="date" 
                    id="fecha" 
                    name="fecha"
                    min="1950-01-01"
                    max="2010-12-31"
                    required
                >
            </div>
            
            <!-- Range con output dinámico -->
            <div class="form-group">
                <label for="experiencia">Años de experiencia</label>
                <input 
                    type="range" 
                    id="experiencia" 
                    name="experiencia"
                    min="0"
                    max="30"
                    value="5"
                    oninput="this.nextElementSibling.value = this.value"
                >
                <output>5</output> años
            </div>
            
            <!-- Datalist para autocompletado -->
            <div class="form-group">
                <label for="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id="ciudad" 
                    name="ciudad"
                    list="ciudades"
                >
                <datalist id="ciudades">
                    <option value="Lima">
                    <option value="Arequipa">
                    <option value="Cusco">
                    <option value="Trujillo">
                </datalist>
            </div>
            
        </fieldset>
        
        <button type="submit">Enviar</button>
    </form>
    
    <script>
        document.getElementById('registroForm').addEventListener('submit', (e) => {
            e.preventDefault();
            if (e.target.checkValidity()) {
                console.log('Formulario válido');
                // Procesar datos
            } else {
                console.log('Formulario inválido');
            }
        });
    </script>
</body>
</html>`
    },
    {
      id: 2,
      title: 'Layout con CSS Grid y Flexbox',
      description: 'Diseño responsivo combinando Grid para estructura y Flexbox para componentes',
      icon: <Palette className="w-5 h-5 text-pink-600" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      reflection: 'CSS Grid revolucionó los layouts web permitiendo diseños bidimensionales complejos sin frameworks. Flexbox complementa Grid perfectamente para componentes unidimensionales. La combinación de ambos, junto con media queries, permite crear interfaces totalmente responsivas y mantenibles sin necesidad de librerías externas.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Layout Moderno</title>
    <style>
        :root {
            --primary-color: #3b82f6;
            --secondary-color: #8b5cf6;
            --spacing: 1rem;
            --border-radius: 0.5rem;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
        }
        
        /* Grid Layout Principal */
        .container {
            display: grid;
            grid-template-areas:
                "header header header"
                "sidebar main main"
                "footer footer footer";
            grid-template-columns: 250px 1fr 1fr;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
            gap: var(--spacing);
            padding: var(--spacing);
        }
        
        .header {
            grid-area: header;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            
            /* Flexbox para contenido del header */
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav {
            display: flex;
            gap: 1.5rem;
        }
        
        .sidebar {
            grid-area: sidebar;
            background: #f3f4f6;
            padding: 1.5rem;
            border-radius: var(--border-radius);
            
            /* Flexbox para items del sidebar */
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .main {
            grid-area: main;
            
            /* Grid anidado para tarjetas */
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--spacing);
            align-content: start;
        }
        
        .card {
            background: white;
            border-radius: var(--border-radius);
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            padding: 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            
            /* Flexbox para contenido de la tarjeta */
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .card-footer {
            display: flex;
            gap: 0.5rem;
            margin-top: auto;
        }
        
        .footer {
            grid-area: footer;
            background: #1f2937;
            color: white;
            padding: 2rem;
            border-radius: var(--border-radius);
            text-align: center;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                grid-template-areas:
                    "header"
                    "main"
                    "sidebar"
                    "footer";
                grid-template-columns: 1fr;
            }
            
            .main {
                grid-template-columns: 1fr;
            }
            
            .header {
                flex-direction: column;
                gap: 1rem;
            }
        }
        
        /* CSS Avanzado: Container Queries */
        @container (min-width: 400px) {
            .card {
                flex-direction: row;
            }
        }
        
        /* Animación con CSS */
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .card {
            animation: fadeIn 0.5s ease-out;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Mi Aplicación</h1>
            <nav class="nav">
                <a href="#" style="color: white;">Inicio</a>
                <a href="#" style="color: white;">Productos</a>
                <a href="#" style="color: white;">Contacto</a>
            </nav>
        </header>
        
        <aside class="sidebar">
            <h3>Navegación</h3>
            <a href="#">Dashboard</a>
            <a href="#">Perfil</a>
            <a href="#">Configuración</a>
        </aside>
        
        <main class="main">
            <div class="card">
                <div class="card-header">
                    <h3>Tarjeta 1</h3>
                    <span>⭐</span>
                </div>
                <p>Contenido de la tarjeta usando Flexbox para layout interno.</p>
                <div class="card-footer">
                    <button>Acción 1</button>
                    <button>Acción 2</button>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3>Tarjeta 2</h3>
                    <span>🎨</span>
                </div>
                <p>Grid para estructura general, Flexbox para componentes.</p>
                <div class="card-footer">
                    <button>Ver más</button>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3>Tarjeta 3</h3>
                    <span>🚀</span>
                </div>
                <p>Diseño responsivo con media queries.</p>
                <div class="card-footer">
                    <button>Explorar</button>
                </div>
            </div>
        </main>
        
        <footer class="footer">
            <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
        </footer>
    </div>
</body>
</html>`
    },
    {
      id: 3,
      title: 'CSS Variables y Funciones Modernas',
      description: 'Uso de custom properties, calc(), clamp() y otras funciones CSS avanzadas',
      icon: <Sparkles className="w-5 h-5 text-green-600" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      reflection: 'Las variables CSS (custom properties) y funciones matemáticas como calc() y clamp() han transformado cómo escribimos CSS. Permiten crear sistemas de diseño dinámicos, escalables y mantenibles. clamp() es especialmente poderoso para tipografía fluida y espaciado responsivo sin media queries.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Avanzado</title>
    <style>
        /* Variables CSS (Custom Properties) */
        :root {
            /* Colores con sistema de diseño */
            --color-primary-h: 220;
            --color-primary-s: 90%;
            --color-primary-l: 50%;
            --color-primary: hsl(
                var(--color-primary-h),
                var(--color-primary-s),
                var(--color-primary-l)
            );
            --color-primary-light: hsl(
                var(--color-primary-h),
                var(--color-primary-s),
                calc(var(--color-primary-l) + 20%)
            );
            --color-primary-dark: hsl(
                var(--color-primary-h),
                var(--color-primary-s),
                calc(var(--color-primary-l) - 20%)
            );
            
            /* Espaciado con escala modular */
            --space-unit: 1rem;
            --space-xs: calc(var(--space-unit) * 0.5);
            --space-sm: calc(var(--space-unit) * 0.75);
            --space-md: var(--space-unit);
            --space-lg: calc(var(--space-unit) * 1.5);
            --space-xl: calc(var(--space-unit) * 2);
            --space-2xl: calc(var(--space-unit) * 3);
            
            /* Tipografía fluida con clamp() */
            --font-size-sm: clamp(0.875rem, 0.8rem + 0.25vw, 1rem);
            --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
            --font-size-lg: clamp(1.25rem, 1rem + 1vw, 2rem);
            --font-size-xl: clamp(1.875rem, 1.5rem + 1.5vw, 3rem);
            --font-size-2xl: clamp(2.5rem, 2rem + 2vw, 4.5rem);
            
            /* Contenedor fluido */
            --container-width: min(90%, 1200px);
            
            /* Bordes y sombras */
            --border-radius: clamp(0.5rem, 1vw, 1rem);
            --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
            --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
            --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
        }
        
        /* Dark mode con variables */
        @media (prefers-color-scheme: dark) {
            :root {
                --color-primary-l: 60%;
                --bg-color: #1a1a1a;
                --text-color: #f0f0f0;
            }
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: system-ui, -apple-system, sans-serif;
            font-size: var(--font-size-base);
            color: var(--text-color, #333);
            background: var(--bg-color, #fff);
            line-height: 1.6;
        }
        
        .container {
            width: var(--container-width);
            margin-inline: auto;
            padding: var(--space-xl);
        }
        
        /* Título con tipografía fluida */
        h1 {
            font-size: var(--font-size-2xl);
            color: var(--color-primary);
            margin-bottom: var(--space-lg);
            
            /* Degradado de texto */
            background: linear-gradient(
                135deg,
                var(--color-primary),
                var(--color-primary-light)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        h2 {
            font-size: var(--font-size-xl);
            margin-block: var(--space-lg) var(--space-md);
        }
        
        /* Card con funciones CSS */
        .card {
            background: white;
            border-radius: var(--border-radius);
            padding: var(--space-lg);
            margin-bottom: var(--space-lg);
            box-shadow: var(--shadow-md);
            
            /* Ancho responsivo con min/max */
            width: min(100%, 600px);
            
            /* Aspecto ratio moderno */
            aspect-ratio: 16 / 9;
            
            transition: all 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-lg);
        }
        
        /* Grid con funciones */
        .grid {
            display: grid;
            
            /* Columnas responsivas automáticas */
            grid-template-columns: repeat(
                auto-fit,
                minmax(min(100%, 300px), 1fr)
            );
            
            /* Gap fluido */
            gap: clamp(1rem, 2vw, 2rem);
            
            margin-block: var(--space-xl);
        }
        
        /* Botón con variables */
        .button {
            background: var(--color-primary);
            color: white;
            padding: var(--space-sm) var(--space-lg);
            border: none;
            border-radius: calc(var(--border-radius) * 0.5);
            font-size: var(--font-size-base);
            cursor: pointer;
            transition: background 0.3s ease;
            
            /* Espaciado interno fluido */
            padding: clamp(0.5rem, 1vw, 1rem) clamp(1rem, 2vw, 2rem);
        }
        
        .button:hover {
            background: var(--color-primary-dark);
        }
        
        /* Contenedor con scroll snap */
        .scroll-container {
            display: flex;
            gap: var(--space-md);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: var(--space-md);
            
            /* Ocultar scrollbar */
            scrollbar-width: none;
        }
        
        .scroll-container::-webkit-scrollbar {
            display: none;
        }
        
        .scroll-item {
            flex: 0 0 auto;
            width: clamp(250px, 40vw, 400px);
            scroll-snap-align: start;
            background: var(--color-primary-light);
            padding: var(--space-lg);
            border-radius: var(--border-radius);
        }
        
        /* Filtros y efectos avanzados */
        .image-effect {
            /* Filter con múltiples efectos */
            filter: 
                brightness(1.1)
                contrast(1.2)
                saturate(1.3);
            
            /* Clip path para formas */
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
            
            transition: filter 0.3s ease;
        }
        
        .image-effect:hover {
            filter: 
                brightness(1.2)
                contrast(1.3)
                saturate(1.5)
                hue-rotate(10deg);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Avanzado con Variables y Funciones</h1>
        
        <h2>Tarjetas Responsivas</h2>
        <div class="grid">
            <div class="card">
                <h3>Tarjeta 1</h3>
                <p>Con tipografía fluida y espaciado dinámico usando clamp()</p>
                <button class="button">Acción</button>
            </div>
            
            <div class="card">
                <h3>Tarjeta 2</h3>
                <p>Variables CSS para un sistema de diseño consistente</p>
                <button class="button">Explorar</button>
            </div>
            
            <div class="card">
                <h3>Tarjeta 3</h3>
                <p>Funciones matemáticas: calc(), min(), max()</p>
                <button class="button">Ver más</button>
            </div>
        </div>
        
        <h2>Scroll Horizontal con Snap</h2>
        <div class="scroll-container">
            <div class="scroll-item">Item 1</div>
            <div class="scroll-item">Item 2</div>
            <div class="scroll-item">Item 3</div>
            <div class="scroll-item">Item 4</div>
            <div class="scroll-item">Item 5</div>
        </div>
    </div>
</body>
</html>`
    }
  ];

  const resources = [
    {
      title: 'MDN Web Docs - HTML',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'MDN Web Docs - CSS',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-500 to-green-500'
    },
    {
      title: 'CSS-Tricks - Complete Guide to Grid',
      url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'CSS-Tricks - Complete Guide to Flexbox',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web.dev - Learn CSS',
      url: 'https://web.dev/learn/css/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Can I Use - Compatibilidad CSS',
      url: 'https://caniuse.com/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Descargar ZIP: Grupo1 - html5avanzado-main',
      url: '/Grupo1 - html5avanzado-main (1).zip',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-green-500 to-teal-500',
      download: true
    },
     
     {
      title: 'Monografia de mi GRUPO 2',
      url: 'https://github.com/sayles1309/Monografia-css-Basico/blob/main/CSS-Basico-main/CSS-Basico-main/MONOGRAFIA.md',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-indigo-500 to-red-500'
    },
    {
      title: 'Descargar ZIP: Grupo3 - CSS Avanzado',
      url: '/Grupo 3 CSS Avanzado.zip',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-green-500 to-teal-500',
      download: true
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H2v4h4v2H4v4H2v-4H0v-2h4v-4h2v4h4v2H2zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float animation-delay-2000"></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          {/* Back button */}
          <Link href="/" className="group inline-flex items-center gap-2 mb-8 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Volver</span>
          </Link>

          <div className="flex items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              {/* Week badge */}
              <div className="flex items-center gap-4">
                <div className={`${weekConfig.iconBg} rounded-3xl p-5 shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group relative`}>
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <span className="text-4xl group-hover:scale-110 inline-block transition-transform relative z-10">{weekConfig.icon}</span>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border-2 border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-xl tracking-wide">Semana {weekConfig.number}</span>
                </div>
              </div>

              {/* Titles */}
              <div className="space-y-4">
                <h1 className="text-7xl font-black mb-2 animate-fade-in-up tracking-tight leading-tight">
                  {weekConfig.title}
                </h1>
                <div className="flex items-center gap-3 animate-fade-in-up animation-delay-200">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-light opacity-95 tracking-wide">
                    {weekConfig.subtitle}
                  </h2>
                </div>
                <p className="text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 font-light">
                  {weekConfig.description}
                </p>
              </div>
            </div>

            {/* Illustration - HTML/CSS themed */}
            <div 
              className="hidden lg:block"
              onMouseEnter={() => setIsHoveringIllustration(true)}
              onMouseLeave={() => setIsHoveringIllustration(false)}
            >
              <div className={`relative w-[540px] h-[400px] transition-all duration-700 ${
                isHoveringIllustration ? 'scale-105' : 'scale-100'
              }`}>
                {/* Main card */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-[3rem] shadow-2xl transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[3rem]"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Background decorative elements */}
                  <div className="absolute top-16 left-16 text-white/10 text-8xl font-black transition-all duration-500" style={{
                    transform: isHoveringIllustration ? 'translateX(-8px) translateY(-8px) rotate(-5deg)' : 'translateX(0) translateY(0) rotate(0)'
                  }}>
                    {'</>'}
                  </div>
                  
                  {/* Browser window - top right */}
                  <div className={`absolute top-12 right-20 transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -translate-y-3 rotate-3' : 'scale-100'
                  }`}>
                    <div className="w-40 h-32 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl">
                      <div className="flex gap-2 p-4">
                        <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                      </div>
                      <div className="px-4 space-y-2">
                        <div className="h-2 bg-white/40 rounded-full w-full"></div>
                        <div className="h-2 bg-white/40 rounded-full w-3/4"></div>
                        <div className="h-2 bg-white/40 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Main CSS text */}
                  <div className="relative z-10">
                    <div className={`text-white text-[180px] font-black leading-none tracking-tighter transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      CSS
                    </div>
                    
                    {/* HTML badge */}
                    <div className="absolute -top-10 -right-10 bg-white/30 backdrop-blur-md px-6 py-3 rounded-2xl font-bold text-3xl shadow-2xl animate-pulse">
                      HTML5
                    </div>
                  </div>
                  
                  {/* Code snippet card - bottom right */}
                  <div className={`absolute bottom-16 right-16 w-32 h-40 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 rotate-6' : 'scale-100'
                  }`}>
                    <div className="p-5 space-y-2.5">
                      {[1, 0.8, 1, 0.65, 1, 0.9].map((width, i) => (
                        <div key={i} style={{ width: `${width * 100}%` }} className="h-2 bg-white/50 rounded-full shadow"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating color circles */}
                  <div className="absolute top-1/3 left-20 w-10 h-10 bg-yellow-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 left-20 w-12 h-12 bg-orange-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-pink-300/40 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSelectedExample(null);
                }}
                className={`group flex items-center gap-3 py-5 px-8 font-bold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                <span className={`transition-all duration-300 ${activeTab === tab.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className="text-base">{tab.label}</span>
                {activeTab === tab.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-t-full animate-slide-in"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-50/80 to-transparent rounded-t-2xl"></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="animate-fade-in">
          {/* Contenido Tab */}
          {activeTab === 'contenido' && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl shadow-2xl">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text">
                  Contenido del Curso
                </h3>
              </div>
              
              {contentItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    onClick={() => setExpandedContent(expandedContent === item.id ? null : item.id)}
                    className="p-10 cursor-pointer hover:bg-gradient-to-r hover:from-orange-50/70 hover:to-transparent transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`p-5 bg-gradient-to-br ${item.color} rounded-3xl text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <h4 className="text-3xl font-black text-gray-800 group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronRight 
                        className={`w-8 h-8 text-gray-400 transition-all duration-500 ${
                          expandedContent === item.id ? 'rotate-90 text-orange-600 scale-125' : 'group-hover:translate-x-2'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {expandedContent === item.id && (
                    <div className="px-10 pb-10 animate-fade-in-up">
                      <div className="pl-24 space-y-5 border-l-4 border-gradient-to-b from-orange-500 to-red-500 ml-6">
                        {item.subtopics.map((subtopic, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-5 text-gray-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 group/item animate-fade-in-right"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="relative">
                              <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg"></div>
                              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-40"></div>
                            </div>
                            <span className="text-lg font-medium group-hover/item:translate-x-3 transition-transform duration-300">{subtopic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Ejemplos Tab */}
          {activeTab === 'ejemplos' && (
            <div>
              {!selectedExample ? (
                <div className="space-y-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-gray-800">
                      Ejemplos Prácticos - Semana 2
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {examples.map((example, index) => (
                      <div
                        key={example.id}
                        onClick={() => setSelectedExample(example)}
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-orange-300 overflow-hidden"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                        
                        <div className="relative">
                          <div className="flex items-start gap-6">
                            <div className={`p-5 bg-gradient-to-br ${example.gradient} rounded-3xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-2xl`}>
                              <div className="text-white">{example.icon}</div>
                            </div>
                            <div className="flex-1 space-y-4">
                              <h4 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                                {example.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {example.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-3 text-orange-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-3 transition-all duration-300 text-lg">
                            <span>Ver ejemplo completo</span>
                            <ChevronRight className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <button
                    onClick={() => {
                      setSelectedExample(null);
                      setExampleTab('reflexion');
                    }}
                    className="group flex items-center gap-3 mb-10 text-orange-600 hover:text-orange-700 font-bold transition-all duration-300 hover:gap-4 text-lg"
                  >
                    <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                    Volver a ejemplos
                  </button>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                    <div className={`bg-gradient-to-r ${selectedExample.gradient} text-white p-10 relative overflow-hidden`}>
                      <div className="relative flex items-center gap-6">
                        <div className="p-5 bg-white/25 backdrop-blur-md rounded-2xl shadow-2xl">
                          <div className="text-white">
                            {selectedExample?.icon}
                          </div>
                        </div>
                        <h3 className="text-4xl font-black">
                          {selectedExample?.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="flex gap-3 mb-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 shadow-inner">
                        <button 
                          onClick={() => setExampleTab('reflexion')}
                          className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${
                            exampleTab === 'reflexion' 
                              ? 'bg-white text-orange-600 shadow-xl scale-105' 
                              : 'text-gray-600 hover:text-orange-600 hover:bg-white/50'
                          }`}
                        >
                          <Sparkles className="w-5 h-5" />
                          Reflexión
                        </button>
                        <button 
                          onClick={() => setExampleTab('codigo')}
                          className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${
                            exampleTab === 'codigo' 
                              ? 'bg-white text-orange-600 shadow-xl scale-105' 
                              : 'text-gray-600 hover:text-orange-600 hover:bg-white/50'
                          }`}
                        >
                          <Code className="w-5 h-5" />
                          Código
                        </button>
                      </div>

                      {exampleTab === 'reflexion' && selectedExample.reflection && (
                        <div className="animate-fade-in-up">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 border-l-4 border-orange-600 p-10 rounded-3xl shadow-lg">
                              <p className="text-gray-700 text-xl leading-relaxed m-0 font-light">
                                {selectedExample.reflection}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {exampleTab === 'codigo' && selectedExample.code && (
                        <div className="animate-fade-in-up">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                            <div className="relative bg-gray-900 rounded-3xl p-10 overflow-x-auto shadow-2xl border-2 border-gray-800">
                              <pre className="text-sm text-gray-100 font-mono leading-relaxed">
                                <code>{selectedExample.code}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Recursos Tab */}
          {activeTab === 'recursos' && (
            <div className="space-y-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl shadow-2xl">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800">
                  Recursos Adicionales
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((resource, index) => {
                  const isDownload = resource.download;
                  return isDownload ? (
                    <a
                      key={resource.title}
                      href={resource.url}
                      download
                      className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-300 overflow-hidden hover:-translate-y-2"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      <div className="relative flex items-center gap-5">
                        <div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                          <div className="text-white">{resource.icon}</div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                            Descarga directa
                          </p>
                          <h4 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                            {resource.title}
                          </h4>
                        </div>
                        <FileText className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </a>
                  ) : (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-300 overflow-hidden hover:-translate-y-2"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      <div className="relative flex items-center gap-5">
                        <div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                          <div className="text-white">{resource.icon}</div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                            Recurso externo
                          </p>
                          <h4 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                            {resource.title}
                          </h4>
                        </div>
                        <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white/90 backdrop-blur-xl border-t-2 border-gray-200 shadow-2xl mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/projects/semana-1" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-orange-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Semana Anterior
            </Link>
            <Link href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </Link>
            <Link href="/projects/semana-3" className="flex items-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
              Siguiente Semana
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.5s ease-out forwards;
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}