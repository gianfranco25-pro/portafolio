"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, GitBranch, Github, Users, Layers } from 'lucide-react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('ejemplos');
  const [selectedExample, setSelectedExample] = useState(null);
  const [expandedContent, setExpandedContent] = useState(null);
  const [exampleTab, setExampleTab] = useState('reflexion');
  const [isHoveringIllustration, setIsHoveringIllustration] = useState(false);

  const weekConfig = {
    number: 3,
    icon: '🎯',
    iconBg: 'bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600',
    title: 'Prácticas Calificadas',
    subtitle: 'HTML/CSS Puro y Tailwind CSS',
    description: 'Desarrollo de prácticas calificadas en equipos de 3 personas utilizando Git/GitHub para control de versiones. Implementación de componentes web con HTML/CSS puro y Tailwind CSS.'
  };

  const tabs = [
    { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ejemplos', label: 'Prácticas', icon: <Code className="w-4 h-4" /> },
    { id: 'recursos', label: 'Recursos', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const contentItems = [
    { 
      id: 1, 
      title: 'Práctica Calificada 1 - HTML/CSS Puro', 
      icon: <Code className="w-5 h-5" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      subtopics: [
        'Formularios con animaciones CSS',
        'Text fields con efectos de desplazamiento y cambio de color',
        'Drag and Drop de imágenes con JavaScript vanilla',
        'Cards con selectores de color (sliders RGB)',
        'Diseño responsivo con Flexbox y Media Queries',
        'Cards animados con rotación 3D (180°)',
        'Trabajo colaborativo con Git: ramas por integrante',
        'Merge de ramas y entrega vía GitHub'
      ]
    },
    { 
      id: 2, 
      title: 'Práctica Calificada 2 - Tailwind CSS', 
      icon: <Layers className="w-5 h-5" />,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      subtopics: [
        'Listas de mensajes con iconos SVG',
        'Grid CSS: layouts de 2 columnas responsivos',
        'Cards de playas del Perú con imágenes',
        'Cards de ciudades importantes con información',
        'Efectos hover con cambios de opacidad',
        'Diseño responsivo: 4 breakpoints (<480px, <900px, <1200px, >1200px)',
        'Flexbox para distribución de elementos',
        'Integración de Tailwind CSS con HTML'
      ]
    },
    { 
      id: 3, 
      title: 'Metodología de Trabajo en Equipo', 
      icon: <Users className="w-5 h-5" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      subtopics: [
        'Equipos de 3 personas con líder asignado',
        'Creación de repositorio en GitHub',
        'Sistema de ramas: una por integrante (apellido-apellido)',
        'Trabajo paralelo en ramas independientes',
        'Merge final realizado por el líder',
        'Entrega de link de repositorio vía Microsoft Teams',
        'Control de tiempo: penalización por entregas tardías',
        'Duración: 90 min (PC1) y 60 min (PC2)'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'Práctica Calificada 1',
      description: 'Desarrollo con HTML y CSS puro: formularios animados, drag & drop, selectores de color y diseño responsivo',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      reflection: 'La Práctica Calificada 1 se enfocó en demostrar dominio de HTML y CSS sin frameworks. Los desafíos incluyeron: animaciones CSS para labels flotantes en formularios, implementación de drag & drop para carga de imágenes, y creación de un selector de color RGB con sliders. El trabajo en equipo con Git requirió coordinación: cada integrante trabajó en su rama, evitando conflictos de merge. El diseño responsivo con media queries aseguró compatibilidad en 4 tamaños de pantalla.',
      githubUrl: 'https://github.com/sayles1309/Practica-Calificada-01',
      code: `<!-- Ejemplo: Formulario con animación de label flotante -->
<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        .input-container {
            position: relative;
            margin: 30px 0;
        }
        
        .input-field {
            width: 100%;
            padding: 10px 0;
            font-size: 16px;
            border: none;
            border-bottom: 2px solid #fff;
            background: transparent;
            color: #fff;
            outline: none;
            transition: 0.3s;
        }
        
        .input-field:focus {
            border-bottom-color: #00bcd4;
        }
        
        .input-label {
            position: absolute;
            top: 10px;
            left: 0;
            font-size: 16px;
            color: #fff;
            pointer-events: none;
            transition: 0.3s;
        }
        
        .input-field:focus ~ .input-label,
        .input-field:valid ~ .input-label {
            top: -20px;
            font-size: 12px;
            color: #00bcd4;
        }
    </style>
</head>
<body>
    <div class="input-container">
        <input type="email" class="input-field" required>
        <label class="input-label">Email</label>
    </div>
</body>
</html>

<!-- Card con rotación 3D -->
<style>
    .card-container {
        perspective: 1000px;
    }
    
    .card {
        width: 300px;
        height: 200px;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    
    .card:hover {
        transform: rotateY(180deg);
    }
</style>`
    },
    {
      id: 2,
      title: 'Práctica Calificada 2',
      description: 'Implementación con HTML y Tailwind CSS: listas de mensajes, cards de playas y ciudades, grid responsivo',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      reflection: 'La Práctica Calificada 2 introdujo Tailwind CSS como framework de utilidades. Los componentes desarrollados incluyeron listas de mensajes con preview, cards informativos de playas y ciudades del Perú, y layouts grid responsivos con breakpoints específicos. El uso de Tailwind aceleró el desarrollo con clases utilitarias, mientras que el diseño responsivo se manejó con modificadores de pantalla (sm:, md:, lg:, xl:). El trabajo en Git siguió la misma metodología de ramas por integrante.',
      githubUrl: 'https://github.com/machaparionaangelyoelver-web/Practica02',
      code: `<!-- Ejemplo: Lista de mensajes con Tailwind -->
<!DOCTYPE html>
<html lang="es">
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <!-- Lista 1 -->
        <div class="w-full md:w-3/5 bg-white rounded-lg shadow">
            <div class="flex items-center justify-between p-4 border-b">
                <h2 class="text-xl font-bold">Mensajes</h2>
                <div class="flex gap-2">
                    <svg class="w-6 h-6"><!-- Icono --></svg>
                    <svg class="w-6 h-6"><!-- Icono --></svg>
                </div>
            </div>
            
            <div class="divide-y">
                <div class="p-4 hover:bg-gray-50 cursor-pointer">
                    <div class="font-bold text-gray-800">Reunión importante</div>
                    <div class="text-sm text-gray-600">De: Juan Pérez</div>
                    <div class="text-sm text-gray-500 mt-1">
                        Confirmar asistencia a la reunión del...
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Card de playa -->
        <div class="flex flex-wrap gap-2">
            <div class="w-52 bg-white rounded-lg shadow overflow-hidden">
                <img src="playa.jpg" alt="Playa" class="w-full h-32 object-cover">
                <div class="p-4">
                    <h3 class="font-bold">Máncora</h3>
                    <p class="text-sm text-gray-600">Piura, Perú</p>
                    <div class="flex gap-2 mt-4">
                        <button class="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                            Share
                        </button>
                        <button class="flex-1 bg-gray-200 hover:bg-gray-300 py-2 rounded">
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    }
  ];

  const resources = [
    {
      title: 'Repositorio PC1 - HTML/CSS Puro',
      url: 'https://github.com/sayles1309/Practica-Calificada-01',
      icon: <Github className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Repositorio PC2 - Tailwind CSS',
      url: 'https://github.com/machaparionaangelyoelver-web/Practica02',
      icon: <Github className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tailwind CSS Documentation',
      url: 'https://tailwindcss.com/docs',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Git Branching Strategies',
      url: 'https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows',
      icon: <GitBranch className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'CSS Animations Guide',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Flexbox Guide',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'PDF Práctica Calificada 1',
      url: '/PracticaCalificada1.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-blue-600 to-blue-800',
      download: true
    },
    {
      title: 'PDF Práctica Calificada 2',
      url: '/PracticaCalificada2.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-purple-600 to-purple-800',
      download: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float animation-delay-2000"></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <a href="/" className="group inline-flex items-center gap-2 mb-8 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 shadow-lg hover:shadow-xl">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Volver</span>
          </a>

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
                  <div className="h-1.5 w-16 bg-gradient-to-r from-lime-300 via-green-300 to-emerald-300 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-light opacity-95 tracking-wide">
                    {weekConfig.subtitle}
                  </h2>
                </div>
                <p className="text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 font-light">
                  {weekConfig.description}
                </p>
              </div>
            </div>

            {/* Illustration - Git/GitHub themed */}
            <div 
              className="hidden lg:block"
              onMouseEnter={() => setIsHoveringIllustration(true)}
              onMouseLeave={() => setIsHoveringIllustration(false)}
            >
              <div className={`relative w-[540px] h-[400px] transition-all duration-700 ${
                isHoveringIllustration ? 'scale-105' : 'scale-100'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-[3rem] shadow-2xl transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[3rem]"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="absolute top-16 left-16 transition-all duration-500" style={{
                    transform: isHoveringIllustration ? 'translateX(-8px) translateY(-8px) rotate(-5deg)' : 'translateX(0) translateY(0) rotate(0)'
                  }}>
                    <GitBranch className="w-24 h-24 text-white/20" />
                  </div>
                  
                  <div className={`absolute top-12 right-20 transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -translate-y-3 rotate-3' : 'scale-100'
                  }`}>
                    <div className="w-40 h-32 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl flex items-center justify-center">
                      <Github className="w-20 h-20 text-white/80" />
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`text-white text-[220px] font-black leading-none tracking-tighter transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      GIT
                    </div>
                    
                    <div className="absolute -bottom-20 left-0 flex flex-col gap-2">
                      {['main', 'perez-sosa', 'gomez-diaz'].map((branch, i) => (
                        <div key={i} className="flex items-center gap-2 animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                          <div className="w-3 h-3 bg-white/50 rounded-full shadow-lg"></div>
                          <div className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-lg text-sm font-bold shadow-lg">
                            {branch}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`absolute bottom-16 right-16 w-32 h-40 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 rotate-6' : 'scale-100'
                  }`}>
                    <div className="p-5 space-y-2.5">
                      {[1, 0.8, 1, 0.65, 1, 0.9].map((width, i) => (
                        <div key={i} style={{ width: `${width * 100}%` }} className="h-2 bg-white/50 rounded-full shadow"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 left-20 w-10 h-10 bg-lime-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 left-20 w-12 h-12 bg-green-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-emerald-300/40 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
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
                  activeTab === tab.id ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
                }`}
              >
                <span className={`transition-all duration-300 ${activeTab === tab.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className="text-base">{tab.label}</span>
                {activeTab === tab.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-t-full animate-slide-in"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-green-50/80 to-transparent rounded-t-2xl"></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="animate-fade-in">
          {activeTab === 'contenido' && (
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl shadow-2xl">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800">Contenido de las Prácticas</h3>
              </div>
              
              {contentItems.map((item, index) => (
                <div key={item.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2">
                  <div onClick={() => setExpandedContent(expandedContent === item.id ? null : item.id)} className="p-10 cursor-pointer hover:bg-gradient-to-r hover:from-green-50/70 hover:to-transparent transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`p-5 bg-gradient-to-br ${item.color} rounded-3xl text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <h4 className="text-3xl font-black text-gray-800 group-hover:text-green-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronRight className={`w-8 h-8 text-gray-400 transition-all duration-500 ${expandedContent === item.id ? 'rotate-90 text-green-600 scale-125' : 'group-hover:translate-x-2'}`} />
                    </div>
                  </div>
                  
                  {expandedContent === item.id && (
                    <div className="px-10 pb-10 animate-fade-in-up">
                      <div className="pl-24 space-y-5 border-l-4 border-gradient-to-b from-green-500 to-emerald-500 ml-6">
                        {item.subtopics.map((subtopic, idx) => (
                          <div key={idx} className="flex items-center gap-5 text-gray-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group/item animate-fade-in-right" style={{ animationDelay: `${idx * 100}ms` }}>
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

          {activeTab === 'ejemplos' && (
            <div>
              {!selectedExample ? (
                <div className="space-y-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-gray-800">Prácticas Desarrolladas</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {examples.map((example, index) => (
                      <div key={example.id} onClick={() => setSelectedExample(example)} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-green-300 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                        
                        <div className="relative">
                          <div className="flex items-start gap-6">
                            <div className={`p-5 bg-gradient-to-br ${example.gradient} rounded-3xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-2xl`}>
                              <div className="text-white">{example.icon}</div>
                            </div>
                            <div className="flex-1 space-y-4">
                              <h4 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                                {example.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {example.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-3 text-green-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-3 transition-all duration-300 text-lg">
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
                  <button onClick={() => { setSelectedExample(null); setExampleTab('reflexion'); }} className="group flex items-center gap-3 mb-10 text-green-600 hover:text-green-700 font-bold transition-all duration-300 hover:gap-4 text-lg">
                    <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                    Volver a prácticas
                  </button>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                    <div className={`bg-gradient-to-r ${selectedExample.gradient} text-white p-10 relative overflow-hidden`}>
                      <div className="relative flex items-center gap-6">
                        <div className="p-5 bg-white/25 backdrop-blur-md rounded-2xl shadow-2xl">
                          <div className="text-white">{selectedExample?.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-4xl font-black">{selectedExample?.title}</h3>
                          {selectedExample?.githubUrl && (
                            <a href={selectedExample.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 border border-white/30 hover:scale-105">
                              <Github className="w-5 h-5" />
                              <span className="font-semibold">Ver en GitHub</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="flex gap-3 mb-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 shadow-inner">
                        <button onClick={() => setExampleTab('reflexion')} className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${exampleTab === 'reflexion' ? 'bg-white text-green-600 shadow-xl scale-105' : 'text-gray-600 hover:text-green-600 hover:bg-white/50'}`}>
                          <Sparkles className="w-5 h-5" />
                          Reflexión
                        </button>
                        <button onClick={() => setExampleTab('codigo')} className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${exampleTab === 'codigo' ? 'bg-white text-green-600 shadow-xl scale-105' : 'text-gray-600 hover:text-green-600 hover:bg-white/50'}`}>
                          <Code className="w-5 h-5" />
                          Código
                        </button>
                      </div>

                      {exampleTab === 'reflexion' && selectedExample.reflection && (
                        <div className="animate-fade-in-up">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-l-4 border-green-600 p-10 rounded-3xl shadow-lg">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
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

          {activeTab === 'recursos' && (
            <div className="space-y-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl shadow-2xl">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800">Recursos Adicionales</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {resources.map((resource, index) => {
                  const isDownload = resource.download;
                  return isDownload ? (
                    <a key={resource.title} href={resource.url} download className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-300 overflow-hidden hover:-translate-y-2">
                      <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      <div className="relative flex items-center gap-5">
                        <div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                          <div className="text-white">{resource.icon}</div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Descarga directa</p>
                          <h4 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                            {resource.title}
                          </h4>
                        </div>
                        <FileText className="w-6 h-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                    </a>
                  ) : (
                    <a key={resource.title} href={resource.url} target="_blank" rel="noopener noreferrer" className="group relative block bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-green-300 overflow-hidden hover:-translate-y-2">
                      <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      <div className="relative flex items-center gap-5">
                        <div className={`p-5 bg-gradient-to-br ${resource.color} rounded-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                          <div className="text-white">{resource.icon}</div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Recurso externo</p>
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
            <a href="/projects/semana-2" className="flex items-center gap-3 text-gray-700 hover:text-green-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-green-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Semana Anterior
            </a>
            <a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </a>
            <a href="/projects/semana-4" className="flex items-center gap-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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