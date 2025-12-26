"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, Zap, Coffee, Layers, Database } from 'lucide-react';
import Link from "next/link";
import WeekNav from "@/components/WeekNav";

const tabs: { id: 'contenido' | 'ejemplos' | 'recursos'; label: string; icon: JSX.Element }[] = [
  { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'ejemplos', label: 'Ejemplos Prácticos', icon: <Code className="w-4 h-4" /> },
  { id: 'recursos', label: 'Bibliografía', icon: <Sparkles className="w-4 h-4" /> }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<'contenido' | 'ejemplos' | 'recursos'>('ejemplos');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const { hash } = window.location;
      if (hash === '#contenido') {
        setActiveTab('contenido');
      } else if (hash === '#bibliografia') {
        setActiveTab('recursos');
        setTimeout(() => {
          const target = document.getElementById('bibliografia');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, []);
  const [selectedExample, setSelectedExample] = useState<any>(null);
  const [expandedContent, setExpandedContent] = useState<number | null>(null);
  const [exampleTab, setExampleTab] = useState<'reflexion' | 'codigo'>('reflexion');
  const [isHoveringIllustration, setIsHoveringIllustration] = useState<boolean>(false);

  const weekConfig = {
    number: 4,
    icon: '🎨',
    iconBg: 'bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-500',
    title: 'Frontend Frameworks & JavaScript',
    subtitle: 'Bootstrap, Tailwind CSS & JavaScript Avanzado',
    description: 'Domina las herramientas esenciales del desarrollo frontend moderno: frameworks CSS como Bootstrap y Tailwind, junto con JavaScript desde conceptos básicos hasta técnicas avanzadas de programación.'
  };
  
  const contentItems = [
    { 
      id: 1, 
      title: 'Bootstrap', 
      icon: <Layers className="w-5 h-5" />,
      color: 'from-purple-500 via-violet-500 to-purple-600',
      subtopics: [
        'Sistema de Grid (Diseño responsivo con columnas)',
        'Componentes predefinidos (Botones, tarjetas, modales, alertas)',
        'Tipografía y estilos de texto personalizables',
        'Formularios y validaciones integradas',
        'Clases de utilidad para espaciado, alineación y visibilidad',
        'Personalización con variables CSS y SASS',
        'Animaciones y transiciones integradas',
        'Modificadores de color y estilos temáticos',
        'Diseño responsivo avanzado con media queries',
        'Integración con JavaScript (Tooltips, Dropdowns, Carousels)'
      ]
    },
    { 
      id: 2, 
      title: 'Tailwind CSS', 
      icon: <Zap className="w-5 h-5" />,
      color: 'from-cyan-500 via-teal-500 to-blue-500',
      subtopics: [
        'Concepto de clases utilitarias (Atomic CSS)',
        'Diseño responsivo con sm, md, lg, xl',
        'Personalización con tailwind.config.js',
        'Espaciado, tipografía y bordes con clases rápidas',
        'Flexbox y Grid usando clases (flex, grid, gap)',
        'Dark Mode y variantes de estado (hover, focus, active)',
        'Optimización de rendimiento con PurgeCSS',
        'Animaciones y efectos (transition, transform, shadow)',
        'Componentización con @apply',
        'Integración con React, Vue y Next.js'
      ]
    },
    { 
      id: 3, 
      title: 'JavaScript Básico', 
      icon: <Code className="w-5 h-5" />,
      color: 'from-yellow-400 via-amber-500 to-orange-500',
      subtopics: [
        'Introducción a JavaScript y su ejecución en navegadores',
        'Variables y tipos de datos (String, Number, Boolean, Arrays, Objects)',
        'Operadores (aritméticos, lógicos, comparación)',
        'Condicionales (if, else, switch)',
        'Bucles (for, while, do while)',
        'Funciones (declaración, expresiones, parámetros, retorno)',
        'Manipulación del DOM (seleccionar elementos, modificar contenido)',
        'Eventos y manejadores (addEventListener, onclick)',
        'JSON y almacenamiento local (localStorage, sessionStorage)',
        'Depuración y uso de la consola (console.log, debugger)'
      ]
    },
    { 
      id: 4, 
      title: 'JavaScript Avanzado', 
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-orange-500 via-red-500 to-pink-500',
      subtopics: [
        'Canvas y gráficos (getContext, dibujar formas, animaciones)',
        'Programación orientada a objetos (clases, this, prototype)',
        'Manipulación avanzada del DOM (elementos dinámicos, atributos)',
        'Promesas y async/await (manejo de asincronía)',
        'Fetch API y AJAX (consumo de APIs)',
        'WebSockets (comunicación en tiempo real)',
        'Closures y scope (contexto de ejecución)',
        'Gestión de errores (try, catch, throw)',
        'Web Workers y optimización de rendimiento'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'Bootstrap Grid System',
      description: 'Sistema de grillas responsivo con Bootstrap para layouts modernos',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      gradient: 'from-purple-500 via-violet-500 to-purple-600',
      reflection: 'Bootstrap revoluciona el diseño web con su sistema de grid de 12 columnas que se adapta automáticamente a diferentes tamaños de pantalla. Los breakpoints predefinidos (xs, sm, md, lg, xl) facilitan la creación de interfaces responsivas sin escribir media queries manualmente. La combinación de contenedores, filas y columnas proporciona una estructura flexible y poderosa.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Sistema de Grid Responsivo</h2>
        
        <!-- Grid básico -->
        <div class="row mb-3">
            <div class="col-md-4 bg-primary text-white p-3">
                Columna 1
            </div>
            <div class="col-md-4 bg-secondary text-white p-3">
                Columna 2
            </div>
            <div class="col-md-4 bg-success text-white p-3">
                Columna 3
            </div>
        </div>
        
        <!-- Grid responsivo -->
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Card Responsiva</h5>
                        <p class="card-text">Se adapta al tamaño de pantalla</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`
    },
    {
      id: 2,
      title: 'Tailwind Utility Classes',
      description: 'Diseño moderno con clases utilitarias de Tailwind CSS',
      icon: <Zap className="w-5 h-5 text-cyan-600" />,
      gradient: 'from-cyan-500 via-teal-500 to-blue-500',
      reflection: 'Tailwind CSS adopta un enfoque utility-first que permite construir diseños personalizados directamente en el HTML. En lugar de escribir CSS personalizado, combinas pequeñas clases utilitarias que hacen una sola cosa. Este enfoque acelera el desarrollo, mejora la consistencia del diseño y facilita el mantenimiento del código.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
    <div class="container mx-auto px-4 py-8">
        <!-- Card con Tailwind -->
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div class="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
                <h2 class="text-white text-2xl font-bold">Tailwind Card</h2>
            </div>
            <div class="p-6">
                <p class="text-gray-600 leading-relaxed">
                    Diseño moderno con clases utilitarias
                </p>
                <button class="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
                    Acción
                </button>
            </div>
        </div>
        
        <!-- Grid responsivo -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div class="bg-white p-6 rounded-lg shadow-md">Item 1</div>
            <div class="bg-white p-6 rounded-lg shadow-md">Item 2</div>
            <div class="bg-white p-6 rounded-lg shadow-md">Item 3</div>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: 3,
      title: 'JavaScript DOM Manipulation',
      description: 'Manipulación dinámica del DOM con JavaScript vanilla',
      icon: <Code className="w-5 h-5 text-yellow-600" />,
      gradient: 'from-yellow-400 via-amber-500 to-orange-500',
      reflection: 'La manipulación del DOM es fundamental en JavaScript. Permite crear experiencias interactivas seleccionando elementos, modificando su contenido, cambiando estilos y respondiendo a eventos del usuario. El uso de addEventListener proporciona una forma moderna y flexible de manejar interacciones, mientras que métodos como querySelector simplifican la selección de elementos.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JavaScript DOM</title>
    <style>
        .active { background-color: #fbbf24; color: white; }
        .item { padding: 15px; margin: 10px; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
        .item:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <div id="container">
        <h2 id="title">Lista Interactiva</h2>
        <button id="addBtn">Agregar Item</button>
        <div id="items"></div>
    </div>

    <script>
        // Selección de elementos
        const container = document.getElementById('items');
        const addBtn = document.getElementById('addBtn');
        const title = document.getElementById('title');
        
        let counter = 1;
        
        // Event listener para agregar items
        addBtn.addEventListener('click', () => {
            const newItem = document.createElement('div');
            newItem.className = 'item';
            newItem.textContent = \`Item \${counter++}\`;
            
            // Click en item
            newItem.addEventListener('click', function() {
                this.classList.toggle('active');
            });
            
            container.appendChild(newItem);
            title.textContent = \`Total: \${counter - 1} items\`;
        });
        
        // Cambio de estilo dinámico
        title.addEventListener('mouseover', () => {
            title.style.color = '#f59e0b';
        });
        
        title.addEventListener('mouseout', () => {
            title.style.color = 'black';
        });
    </script>
</body>
</html>`
    },
    {
      id: 4,
      title: 'JavaScript Async/Await & Fetch',
      description: 'Consumo de APIs con async/await y manejo de promesas',
      icon: <Sparkles className="w-5 h-5 text-red-600" />,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      reflection: 'Las operaciones asíncronas son esenciales en JavaScript moderno. Async/await proporciona una sintaxis más limpia que las promesas tradicionales, haciendo que el código asíncrono sea más legible. Fetch API permite realizar peticiones HTTP de manera sencilla, y la combinación con async/await facilita el manejo de datos de APIs externas y la gestión de errores.',
      code: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Avanzado</title>
    <style>
        .user-card { border: 2px solid #ef4444; border-radius: 12px; padding: 20px; margin: 10px; background: linear-gradient(135deg, #fecaca 0%, #fca5a5 100%); }
        .loading { color: #dc2626; font-weight: bold; }
        button { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
        button:hover { transform: scale(1.05); }
    </style>
</head>
<body>
    <div id="app">
        <h2>Usuarios desde API</h2>
        <button id="loadBtn">Cargar Usuarios</button>
        <div id="users"></div>
    </div>

    <script>
        const usersContainer = document.getElementById('users');
        const loadBtn = document.getElementById('loadBtn');
        
        // Función asíncrona para obtener usuarios
        async function fetchUsers() {
            try {
                usersContainer.innerHTML = '<p class="loading">Cargando...</p>';
                
                // Fetch API con await
                const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5');
                
                if (!response.ok) {
                    throw new Error('Error en la petición');
                }
                
                const users = await response.json();
                
                // Renderizar usuarios
                usersContainer.innerHTML = users.map(user => \`
                    <div class="user-card">
                        <h3>\${user.name}</h3>
                        <p>Email: \${user.email}</p>
                        <p>Ciudad: \${user.address.city}</p>
                    </div>
                \`).join('');
                
            } catch (error) {
                usersContainer.innerHTML = \`<p style="color: red;">Error: \${error.message}</p>\`;
            }
        }
        
        // Event listener
        loadBtn.addEventListener('click', fetchUsers);
        
        // Ejemplo de Promise
        const delayedGreeting = (name) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(\`Hola, \${name}!\`);
                }, 1000);
            });
        };
        
        // Uso con async/await
        async function greet() {
            const message = await delayedGreeting('Desarrollador');
            console.log(message);
        }
    </script>
</body>
</html>`
    }
  ];

  const resources = [
    {
      title: 'Bootstrap Official Documentation',
      url: 'https://getbootstrap.com/docs/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Tailwind CSS Documentation',
      url: 'https://tailwindcss.com/docs',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'MDN JavaScript Guide',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'JavaScript.info - Modern Tutorial',
      url: 'https://javascript.info/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H2v4h4v2H4v4H2v-4H0v-2h4v-4h2v4h4v2H2zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-purple-600 via-cyan-600 to-yellow-500 text-white overflow-hidden">
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
          <Link href="/" className="group inline-flex items-center gap-2 mb-8 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Volver</span>
          </Link>
          <WeekNav currentWeek={weekConfig.number} />

          <div className="flex items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <div className={`${weekConfig.iconBg} rounded-3xl p-5 shadow-2xl backdrop-blur-sm transform hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group relative`}>
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <span className="text-4xl group-hover:scale-110 inline-block transition-transform relative z-10">{weekConfig.icon}</span>
                </div>
                
                <div className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border-2 border-white/30 shadow-2xl hover:bg-white/30 transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-xl tracking-wide">Semana {weekConfig.number}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-7xl font-black mb-2 animate-fade-in-up tracking-tight leading-tight">
                  {weekConfig.title}
                </h1>
                <div className="flex items-center gap-3 animate-fade-in-up animation-delay-200">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-yellow-400 via-cyan-400 to-purple-400 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-light opacity-95 tracking-wide">
                    {weekConfig.subtitle}
                  </h2>
                </div>
                <p className="text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 font-light">
                  {weekConfig.description}
                </p>
              </div>
            </div>

            {/* Illustration - Frontend Modern Design */}
            <div 
              className="hidden lg:block"
              onMouseEnter={() => setIsHoveringIllustration(true)}
              onMouseLeave={() => setIsHoveringIllustration(false)}
            >
              <div className={`relative w-[540px] h-[400px] transition-all duration-700 ${
                isHoveringIllustration ? 'scale-105' : 'scale-100'
              }`}>
                {/* Main card */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-500 rounded-[3rem] shadow-2xl transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[3rem]"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Background code symbol */}
                  <div className="absolute top-16 left-16 text-white/10 text-9xl font-black transition-all duration-500" style={{
                    transform: isHoveringIllustration ? 'translateX(-8px) translateY(-8px) rotate(-5deg)' : 'translateX(0) translateY(0) rotate(0)'
                  }}>
                    {'{ }'}
                  </div>
                  
                  {/* Bootstrap icon - top left */}
                  <div className={`absolute top-12 left-16 transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -translate-y-3 -rotate-6' : 'scale-100'
                  }`}>
                    <div className="w-24 h-24 bg-purple-600/30 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl flex items-center justify-center">
                      <span className="text-white text-4xl font-black">B</span>
                    </div>
                  </div>
                  
                  {/* Tailwind icon - top right */}
                  <div className={`absolute top-16 right-20 transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -translate-y-3 rotate-6' : 'scale-100'
                  }`}>
                    <div className="w-28 h-28 bg-cyan-500/30 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl flex items-center justify-center">
                      <Zap className="w-14 h-14 text-white" />
                    </div>
                  </div>
                  
                  {/* Main CSS text */}
                  <div className="relative z-10">
                    <div className={`text-white text-[140px] font-black leading-none tracking-tighter transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      CSS
                    </div>
                    <div className={`text-white text-[100px] font-black leading-none tracking-tighter mt-2 transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '8px 8px 0px rgba(0,0,0,0.2), 4px 4px 25px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '2px rgba(255,255,255,0.1)'
                    }}>
                      & JS
                    </div>
                  </div>
                  
                  {/* JavaScript icon - bottom left */}
                  <div className={`absolute bottom-16 left-20 w-32 h-32 bg-yellow-500/30 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 flex items-center justify-center ${
                    isHoveringIllustration ? 'scale-110 -rotate-6' : 'scale-100'
                  }`}>
                    <span className="text-white text-6xl font-black">JS</span>
                  </div>
                  
                  {/* Code snippet card - bottom right */}
                  <div className={`absolute bottom-16 right-16 w-36 h-44 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 rotate-6' : 'scale-100'
                  }`}>
                    <div className="p-5 space-y-2.5">
                      {[1, 0.8, 1, 0.65, 1, 0.9, 0.7].map((width, i) => (
                        <div key={i} style={{ width: `${width * 100}%` }} className="h-2 bg-white/50 rounded-full shadow"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating dots */}
                  <div className="absolute top-1/3 left-24 w-10 h-10 bg-purple-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-28 left-1/3 w-12 h-12 bg-cyan-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-yellow-300/40 rounded-full animate-bounce"></div>
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
                className={`group flex items-center gap-3 py-5 px-8 font-bold transition-all duration-300 relative rounded-t-2xl
                  ${activeTab === tab.id
                    ? 'text-gray-900 bg-gradient-to-r from-purple-300 via-cyan-300 to-yellow-200 shadow-lg'
                    : 'text-gray-600 hover:text-purple-700 hover:bg-purple-50'}
                `}
              >
                <span className={`transition-all duration-300 ${activeTab === tab.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className="text-base">{tab.label}</span>
                {activeTab === tab.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-yellow-500 rounded-t-full animate-slide-in"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-300/90 via-cyan-300/90 to-yellow-200/90 rounded-t-2xl"></div>
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
                <div className="p-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl shadow-2xl">
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
                    className="p-10 cursor-pointer hover:bg-gradient-to-r hover:from-purple-50/70 hover:to-transparent transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`p-5 bg-gradient-to-br ${item.color} rounded-3xl text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <h4 className="text-3xl font-black text-gray-800 group-hover:text-purple-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronRight 
                        className={`w-8 h-8 text-gray-400 transition-all duration-500 ${
                          expandedContent === item.id ? 'rotate-90 text-purple-600 scale-125' : 'group-hover:translate-x-2'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {expandedContent === item.id && (
                    <div className="px-10 pb-10 animate-fade-in-up">
                      <div className="pl-24 space-y-5 border-l-4 border-gradient-to-b from-purple-500 to-cyan-500 ml-6">
                        {item.subtopics.map((subtopic, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-5 text-gray-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 transition-all duration-300 group/item animate-fade-in-right"
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
                      Ejemplos Prácticos - Semana 4
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {examples.map((example, index) => (
                      <div
                        key={example.id}
                        onClick={() => setSelectedExample(example)}
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-purple-300 overflow-hidden"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                        
                        <div className="relative">
                          <div className="flex items-start gap-6">
                            <div className={`p-5 bg-gradient-to-br ${example.gradient} rounded-3xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-2xl`}>
                              <div className="text-white">{example.icon}</div>
                            </div>
                            <div className="flex-1 space-y-4">
                              <h4 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                                {example.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {example.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-3 text-purple-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-3 transition-all duration-300 text-lg">
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
                    className="group flex items-center gap-3 mb-10 text-purple-600 hover:text-purple-700 font-bold transition-all duration-300 hover:gap-4 text-lg"
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
                              ? 'bg-white text-purple-600 shadow-xl scale-105' 
                              : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
                          }`}
                        >
                          <Sparkles className="w-5 h-5" />
                          Reflexión
                        </button>
                        <button 
                          onClick={() => setExampleTab('codigo')}
                          className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${
                            exampleTab === 'codigo' 
                              ? 'bg-white text-purple-600 shadow-xl scale-105' 
                              : 'text-gray-600 hover:text-purple-600 hover:bg-white/50'
                          }`}
                        >
                          <Code className="w-5 h-5" />
                          Código
                        </button>
                      </div>

                      {exampleTab === 'reflexion' && selectedExample.reflection && (
                        <div className="animate-fade-in-up">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-gradient-to-br from-purple-50 via-cyan-50 to-yellow-50 border-l-4 border-purple-600 p-10 rounded-3xl shadow-lg">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-cyan-600 to-yellow-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
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
            <div id="bibliografia" className="space-y-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl shadow-2xl">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800">
                  Bibliografía
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((resource, index) => (
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
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-white/90 backdrop-blur-xl border-t-2 border-gray-200 shadow-2xl mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/projects/semana-3" className="flex items-center gap-3 text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-purple-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Semana Anterior
            </Link>
            <a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </a>
            <Link href="/projects/semana-5" className="flex items-center gap-3 bg-gradient-to-r from-purple-600 via-cyan-600 to-yellow-500 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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
