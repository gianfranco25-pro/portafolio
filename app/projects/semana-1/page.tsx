"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, Zap, Coffee, Layers, Database, Globe } from 'lucide-react';
import Link from "next/link";

// Tipos para TypeScript
type ExampleType = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  gradient: string;
  reflection: string;
  code: string;
};

type ResourceType = {
  title: string;
  url: string;
  icon: JSX.Element;
  color: string;
  download?: boolean;
};

type ContentItemType = {
  id: number;
  title: string;
  icon: JSX.Element;
  color: string;
  subtopics: string[];
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>('ejemplos');
    useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#contenido') {
        setActiveTab('contenido');
      }
    }
  }, []);
  const [selectedExample, setSelectedExample] = useState<ExampleType | null>(null);
  const [expandedContent, setExpandedContent] = useState<number | null>(null);
  const [exampleTab, setExampleTab] = useState<string>('reflexion');
  const [isHoveringIllustration, setIsHoveringIllustration] = useState<boolean>(false);

  const weekConfig = {
    number: 1,
    icon: '🌐',
    iconBg: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500',
    title: 'Fundamentos de Tecnologías Web',
    subtitle: 'Introducción al Desarrollo Web',
    description: 'Conoce los fundamentos de las tecnologías web, estándares internacionales, funcionamiento de la web (DNS, HTTP, TCP/IP), roles en el desarrollo web y configuración del entorno de desarrollo con Visual Studio Code.'
  };

  const tabs = [
    { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ejemplos', label: 'Ejemplos Prácticos', icon: <Code className="w-4 h-4" /> },
    { id: 'recursos', label: 'Recursos', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const contentItems = [
    { 
      id: 1, 
      title: 'Fundamentos de la Web', 
      icon: <Globe className="w-5 h-5" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      subtopics: [
        'Soluciones web: sistema web, aplicación web, sitio web y página web',
        'Tecnologías web básicas: lenguajes y gráficos',
        'Funcionamiento de la web: DNS, Protocolo TCP/IP, Protocolo HTTP',
        'Estándares Open Web Platform (HTML5, CSS3, JavaScript, XML)'
      ]
    },
    { 
      id: 2, 
      title: 'Roles y Herramientas de Desarrollo', 
      icon: <Layers className="w-5 h-5" />,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      subtopics: [
        'Desarrollador Frontend: interfaz y experiencia del usuario',
        'Desarrollador Backend: lógica, base de datos y APIs',
        'Desarrollador Fullstack: frontend y backend integrados',
        'Visual Studio Code: elementos de interfaz, extensiones y atajos'
      ]
    },
    { 
      id: 3, 
      title: 'Estándares Internacionales Web', 
      icon: <Database className="w-5 h-5" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      subtopics: [
        'HTTP/HTTPS: protocolo de transferencia de hipertexto',
        'HTML: lenguaje de marcado de hipertexto',
        'CSS: hojas de estilo en cascada',
        'JavaScript: lenguaje de programación del navegador',
        'Web APIs, SVG, WebGL, MathML, ARIA'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'Configuración de Visual Studio Code',
      description: 'Reconocimiento y uso del IDE Visual Studio Code, áreas de la pantalla principal y aplicaciones',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      reflection: 'Visual Studio Code es una herramienta fundamental para el desarrollo web moderno. Conocer sus áreas de trabajo, la paleta de comandos, las extensiones y los atajos de teclado permite aumentar significativamente la productividad. La integración con Git y GitHub facilita el control de versiones y la colaboración en equipo.',
      code: `// Atajos de teclado más útiles en VSC

// Paleta de comandos
Ctrl + Shift + P (Windows/Linux)
Cmd + Shift + P (Mac)

// Terminal integrada
Ctrl + \` (backtick)

// Buscar archivo
Ctrl + P

// Ir a línea
Ctrl + G

// Comentar/descomentar
Ctrl + /

// Duplicar línea
Shift + Alt + Down/Up

// Mover línea
Alt + Down/Up

// Multi-cursor
Alt + Click
Ctrl + Alt + Down/Up

// Snippets Emmet
html:5 + Tab
ul>li*5 + Tab
.container>.row>.col*3 + Tab`
    },
    {
      id: 2,
      title: 'Funcionamiento DNS y HTTP',
      description: 'Cómo funciona el Sistema de Nombres de Dominio y el protocolo HTTP en la web',
      icon: <Globe className="w-5 h-5 text-green-600" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      reflection: 'Comprender cómo funciona DNS es esencial para entender la infraestructura de Internet. DNS actúa como el "directorio telefónico" de Internet, traduciendo nombres de dominio legibles (como www.uncp.edu.pe) a direcciones IP numéricas. El protocolo HTTP/HTTPS permite la comunicación entre clientes y servidores, siendo la base de toda interacción web.',
      code: `// Proceso de resolución DNS y petición HTTP

1. Usuario ingresa: www.uncp.edu.pe en el navegador

2. DNS Resolution:
   - Navegador consulta cache local
   - Si no existe, consulta DNS Resolver
   - DNS Resolver consulta Root DNS Server
   - Root redirige a TLD Server (.pe)
   - TLD redirige a Authoritative DNS Server
   - Retorna IP: 200.37.104.36

3. Conexión HTTP:
   GET /index.html HTTP/1.1
   Host: www.uncp.edu.pe
   User-Agent: Mozilla/5.0
   Accept: text/html,application/xhtml+xml
   Accept-Language: es-ES,es;q=0.9
   Connection: keep-alive

4. Servidor responde:
   HTTP/1.1 200 OK
   Content-Type: text/html; charset=UTF-8
   Content-Length: 1234
   Server: Apache/2.4.41
   
   <!DOCTYPE html>
   <html>
   ...
   </html>

5. Navegador renderiza el contenido`
    },
    {
      id: 3,
      title: 'Control de Versiones con Git',
      description: 'Comandos básicos de Git para control de versiones y colaboración',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      reflection: 'Git es el sistema de control de versiones más utilizado en el desarrollo de software. Permite rastrear cambios, trabajar en ramas paralelas y colaborar con otros desarrolladores. GitHub complementa a Git proporcionando un repositorio remoto en la nube, facilitando el trabajo en equipo y la gestión de proyectos.',
      code: `// Comandos básicos de Git

// Inicializar repositorio
git init

// Configurar usuario
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

// Ver estado de archivos
git status

// Agregar archivos al staging
git add index.html
git add .  // Todos los archivos

// Hacer commit
git commit -m "Mensaje descriptivo del cambio"

// Ver historial de commits
git log
git log --oneline

// Crear nueva rama
git branch nombre-rama
git checkout -b nueva-rama  // Crear y cambiar

// Cambiar de rama
git checkout nombre-rama

// Fusionar ramas
git merge nombre-rama

// Conectar con repositorio remoto
git remote add origin https://github.com/usuario/repo.git

// Subir cambios
git push origin main

// Descargar cambios
git pull origin main

// Clonar repositorio
git clone https://github.com/usuario/repo.git`
    }
  ];

  const resources = [
    {
      title: 'MDN Web Docs - Tecnologías Web',
      url: 'https://developer.mozilla.org/es/docs/Web',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Visual Studio Code - Documentación',
      url: 'https://code.visualstudio.com/docs',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500'
    },
    
    {
      title: 'W3C - Estándares Web',
      url: 'https://www.w3.org/standards/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Git Documentation',
      url: 'https://git-scm.com/doc',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'GitHub Skills',
      url: 'https://skills.github.com/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Emmet Cheat Sheet',
      url: 'https://docs.emmet.io/cheat-sheet/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Descargar PDF: Sem01 Tecnologías Web',
      url: '/Sem01TecnologiasWeb.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-green-500 to-teal-500',
      download: true
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H2v4h4v2H4v4H2v-4H0v-2h4v-4h2v4h4v2H2zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header - Enhanced with better gradients */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white overflow-hidden">
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
                  <span className="text-white font-bold text-xl tracking-wide">Semana 1</span>
                </div>
              </div>

              {/* Titles */}
              <div className="space-y-4">
                <h1 className="text-7xl font-black mb-2 animate-fade-in-up tracking-tight leading-tight">
                  {weekConfig.title}
                </h1>
                <div className="flex items-center gap-3 animate-fade-in-up animation-delay-200">
                  <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-light opacity-95 tracking-wide">
                    {weekConfig.subtitle}
                  </h2>
                </div>
                <p className="text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 font-light">
                  {weekConfig.description}
                </p>
              </div>
            </div>

            {/* Illustration - Web themed */}
            <div 
              className="hidden lg:block"
              onMouseEnter={() => setIsHoveringIllustration(true)}
              onMouseLeave={() => setIsHoveringIllustration(false)}
            >
              <div className={`relative w-[540px] h-[400px] transition-all duration-700 ${
                isHoveringIllustration ? 'scale-105' : 'scale-100'
              }`}>
                {/* Main card */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600 rounded-[3rem] shadow-2xl transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[3rem]"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Background decorative elements - HTML tags */}
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
                  
                  {/* Main WEB text */}
                  <div className="relative z-10">
                    <div className={`text-white text-[200px] font-black leading-none tracking-tighter transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      WEB
                    </div>
                    
                    {/* Tech stack badges */}
                    <div className="absolute -bottom-20 left-0 flex gap-3">
                      {['HTML', 'CSS', 'JS'].map((tech, i) => (
                        <div key={i} className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-xl font-bold text-sm shadow-lg animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* VSCode icon - bottom right */}
                  <div className={`absolute bottom-16 right-16 w-24 h-24 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 flex items-center justify-center ${
                    isHoveringIllustration ? 'scale-110 rotate-6' : 'scale-100'
                  }`}>
                    <Code className="w-12 h-12 text-white/70" />
                  </div>
                  
                  {/* Floating network nodes */}
                  <div className="absolute top-1/3 left-20 w-10 h-10 bg-cyan-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 left-20 w-12 h-12 bg-blue-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-teal-300/40 rounded-full animate-bounce"></div>
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
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <span className={`transition-all duration-300 ${activeTab === tab.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className="text-base">{tab.label}</span>
                {activeTab === tab.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-t-full animate-slide-in"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent rounded-t-2xl"></div>
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
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl">
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
                    className="p-10 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-transparent transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`p-5 bg-gradient-to-br ${item.color} rounded-3xl text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <h4 className="text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronRight 
                        className={`w-8 h-8 text-gray-400 transition-all duration-500 ${
                          expandedContent === item.id ? 'rotate-90 text-blue-600 scale-125' : 'group-hover:translate-x-2'
                        }`}
                      />
                    </div>
                  </div>
                  
                  {expandedContent === item.id && (
                    <div className="px-10 pb-10 animate-fade-in-up">
                      <div className="pl-24 space-y-5 border-l-4 border-gradient-to-b from-blue-500 to-cyan-500 ml-6">
                        {item.subtopics.map((subtopic, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-5 text-gray-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group/item animate-fade-in-right"
                            style={{ animationDelay: `${idx * 100}ms` }}
                          >
                            <div className="relative">
                              <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg"></div>
                              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-40"></div>
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
                      Ejemplos Prácticos - Semana 1
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {examples.map((example, index) => (
                      <div
                        key={example.id}
                        onClick={() => setSelectedExample(example)}
                        className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-300 overflow-hidden"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                        
                        <div className="relative">
                          <div className="flex items-start gap-6">
                            <div className={`p-5 bg-gradient-to-br ${example.gradient} rounded-3xl group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-2xl`}>
                              <div className="text-white">{example.icon}</div>
                            </div>
                            <div className="flex-1 space-y-4">
                              <h4 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {example.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {example.description}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-8 flex items-center gap-3 text-blue-600 font-bold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-3 transition-all duration-300 text-lg">
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
                    className="group flex items-center gap-3 mb-10 text-blue-600 hover:text-blue-700 font-bold transition-all duration-300 hover:gap-4 text-lg"
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
                              ? 'bg-white text-blue-600 shadow-xl scale-105' 
                              : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                          }`}
                        >
                          <Sparkles className="w-5 h-5" />
                          Reflexión
                        </button>
                        <button 
                          onClick={() => setExampleTab('codigo')}
                          className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${
                            exampleTab === 'codigo' 
                              ? 'bg-white text-blue-600 shadow-xl scale-105' 
                              : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'
                          }`}
                        >
                          <Code className="w-5 h-5" />
                          Código
                        </button>
                      </div>

                      {exampleTab === 'reflexion' && selectedExample.reflection && (
                        <div className="animate-fade-in-up">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 border-l-4 border-blue-600 p-10 rounded-3xl shadow-lg">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
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
            <Link href="/" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-blue-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Volver al Menu Principal
            </Link>
            <Link href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </Link>
            <Link href="/projects/semana-2" className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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