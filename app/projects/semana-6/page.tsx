"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, Zap, Component, Layers, Box } from 'lucide-react';

const tabs: { id: 'contenido' | 'ejemplos' | 'recursos'; label: string; icon: JSX.Element }[] = [
  { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'ejemplos', label: 'Ejemplos Prácticos', icon: <Code className="w-4 h-4" /> },
  { id: 'recursos', label: 'Recursos', icon: <Sparkles className="w-4 h-4" /> }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<'contenido' | 'ejemplos' | 'recursos'>('ejemplos');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#contenido') {
        setActiveTab('contenido');
      }
    }
  }, []);
  const [selectedExample, setSelectedExample] = useState<any>(null);
  const [expandedContent, setExpandedContent] = useState<number | null>(null);
  const [exampleTab, setExampleTab] = useState<'reflexion' | 'codigo'>('reflexion');
  const [isHoveringIllustration, setIsHoveringIllustration] = useState<boolean>(false);

  const weekConfig = {
    number: 6,
    icon: '⚛️',
    iconBg: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600',
    title: 'Componentes en React',
    subtitle: 'JSX, Props, Children y TypeScript',
    description: 'Domina la creación de componentes en React con JSX y TypeScript. Aprende sobre props, children, componentes anidados, estilos CSS y Tailwind CSS para construir interfaces modernas y reutilizables.'
  };
  
  const contentItems = [
    { 
      id: 1, 
      title: 'Fundamentos de React y JSX', 
      icon: <Component className="w-5 h-5" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      subtopics: [
        'Función ReactDOM.render() y Virtual DOM',
        'Creación de componentes: Clase vs Función',
        'JSX: Sintaxis y expresiones JavaScript',
        'Variables y constantes en JSX',
        'Insertar atributos y expresiones con { }',
        'Elementos de nivel superior y fragments',
        'Renderizado condicional: if, ternario, &&',
        'Bucles con map() para iterar arrays',
        'Reglas de sintaxis JSX'
      ]
    },
    { 
      id: 2, 
      title: 'TypeScript en React', 
      icon: <Code className="w-5 h-5" />,
      color: 'from-purple-500 via-indigo-500 to-blue-500',
      subtopics: [
        'Tipado estático en componentes React',
        'Definición de tipos para variables y constantes',
        'JSX.Element y tipos de retorno',
        'Interfaces para Props',
        'Traducción de componentes JSX a TypeScript',
        'Detección de errores en tiempo de desarrollo',
        'Transpilación con Babel',
        'Mejores prácticas de tipado en React'
      ]
    },
    { 
      id: 3, 
      title: 'Estilos CSS en React', 
      icon: <Layers className="w-5 h-5" />,
      color: 'from-pink-500 via-rose-500 to-red-500',
      subtopics: [
        'Hojas de estilo CSS externas',
        'Módulos CSS (*.module.css)',
        'Estilos inline con objetos {{ }}',
        'Instalación de Tailwind CSS en Vite',
        'Configuración de tailwind.config.js',
        'Directivas @tailwind en index.css',
        'Uso de clases utility de Tailwind',
        'Diseño responsivo con Tailwind'
      ]
    },
    { 
      id: 4, 
      title: 'Props y Children', 
      icon: <Box className="w-5 h-5" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      subtopics: [
        'Props: transferencia de datos entre componentes',
        'Definición de props como atributos',
        'Children: contenido hijo en componentes',
        'Componentes anidados y jerarquía',
        'Paso de datos de padre a hijo',
        'Paso de datos entre hermanos',
        'Paso de datos de hijo a padre',
        'Renderizado de objetos con props'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'Componente Funcional con JSX',
      description: 'Creación de un componente funcional básico usando JSX con expresiones, variables y condicionales',
      icon: <Component className="w-5 h-5 text-blue-600" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      reflection: 'Los componentes funcionales son la forma moderna de crear componentes en React. JSX permite combinar JavaScript con HTML de manera intuitiva, insertando expresiones con llaves { }. El Virtual DOM de React optimiza el renderizado, actualizando solo las partes necesarias del DOM real mediante el proceso de reconciliación.',
      code: `import React from 'react';

// Componente Funcional
function ComponentHeader() {
  const usuario = 'Jaime';
  const myId = 'titulo';
  const añoActual = 2024;
  const isLoggedIn = true;
  
  return (
    <>
      {/* Insertar variables y expresiones */}
      <h1 id={myId}>Bienvenido {usuario}!!!</h1>
      <p>Año actual: {2000 + 24}</p>
      
      {/* Condicional IF */}
      {isLoggedIn ? (
        <div className="user-panel">
          <h2>Panel de Usuario</h2>
          <p>Sesión activa</p>
        </div>
      ) : (
        <button>Iniciar Sesión</button>
      )}
      
      {/* Operador && */}
      {usuario && <p>Usuario autenticado: {usuario}</p>}
      
      {/* Map para arrays */}
      <ul>
        {['React', 'Vue', 'Angular'].map((framework, index) => (
          <li key={index}>{framework}</li>
        ))}
      </ul>
    </>
  );
}

export default ComponentHeader;

// Renderizado
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ComponentHeader />);`
    },
    {
      id: 2,
      title: 'Componente con TypeScript',
      description: 'Implementación de componentes React con TypeScript para tipado estático y detección de errores',
      icon: <Code className="w-5 h-5 text-purple-600" />,
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      reflection: 'TypeScript añade tipado estático a React, permitiendo detectar errores antes de ejecutar el código. Los tipos JSX.Element, interfaces para props y tipos para estados mejoran la mantenibilidad del código. El transpilador Babel convierte TypeScript a JavaScript para ejecución en el navegador.',
      code: `import React from 'react';

// Definir interface para Props
interface HeaderProps {
  usuario: string;
  edad: number;
  isAdmin: boolean;
}

// Componente con TypeScript
function ComponentHeader({ usuario, edad, isAdmin }: HeaderProps): JSX.Element {
  const myId: string = 'titulo';
  const añoNacimiento: number = 2024 - edad;
  
  return (
    <>
      <h1 id={myId}>Bienvenido {usuario}!!!</h1>
      <p>Edad: {edad} años</p>
      <p>Año de nacimiento: {añoNacimiento}</p>
      
      {isAdmin && (
        <div className="admin-panel">
          <h2>Panel de Administrador</h2>
          <button>Configuración</button>
        </div>
      )}
    </>
  );
}

export default ComponentHeader;

// Uso del componente con tipos
function App(): JSX.Element {
  return (
    <div>
      <ComponentHeader 
        usuario="Jaime" 
        edad={30} 
        isAdmin={true} 
      />
    </div>
  );
}`
    },
    {
      id: 3,
      title: 'Props y Children',
      description: 'Transferencia de datos entre componentes usando props y children para componentes reutilizables',
      icon: <Box className="w-5 h-5 text-green-600" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      reflection: 'Props permiten pasar datos de componentes padres a hijos, creando una arquitectura unidireccional de flujo de datos. Children es una prop especial que permite pasar contenido JSX como hijo del componente. Esto facilita la composición de componentes y la reutilización de lógica.',
      code: `import React from 'react';

// Componente Hijo que recibe props
interface CardProps {
  nombre: string;
  direccion: string;
  ciudad: string;
}

function Card({ nombre, direccion, ciudad }: CardProps) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>{direccion}</p>
      <p>{ciudad}</p>
    </div>
  );
}

// Componente con Children
interface ContainerProps {
  children: React.ReactNode;
  titulo: string;
}

function Container({ children, titulo }: ContainerProps) {
  return (
    <div className="container">
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

// Componente Padre
function App() {
  const persona = {
    nombre: "Jaime",
    direccion: "Jr. Junin 450",
    ciudad: "Huancayo"
  };
  
  return (
    <Container titulo="Información de Usuario">
      <Card 
        nombre={persona.nombre}
        direccion={persona.direccion}
        ciudad={persona.ciudad}
      />
      <p>Contenido adicional como children</p>
    </Container>
  );
}

export default App;`
    },
    {
      id: 4,
      title: 'Estilos CSS y Tailwind',
      description: 'Aplicación de estilos usando CSS puro, módulos CSS y Tailwind CSS en componentes React',
      icon: <Layers className="w-5 h-5 text-pink-600" />,
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      reflection: 'React ofrece múltiples formas de aplicar estilos: hojas CSS externas con className, módulos CSS para estilos localizados, inline styles con objetos, y Tailwind CSS para desarrollo rápido con clases utilitarias. Tailwind se integra perfectamente con React y permite crear diseños responsivos sin salir del JSX.',
      code: `// 1. CSS Externo (App.css)
// Importar en componente
import './App.css';

function Component1() {
  return <div className="card">Contenido</div>;
}

// 2. Módulos CSS (estilos.module.css)
import styles from '../css/estilos.module.css';

function Component2() {
  return <div className={styles.card}>Contenido</div>;
}

// 3. Estilos Inline
function Component3() {
  const estiloCard = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };
  
  return (
    <div style={estiloCard}>
      <h3 style={{ color: '#333', fontSize: '1.5rem' }}>Título</h3>
    </div>
  );
}

// 4. Tailwind CSS
// Instalación: npm install -D tailwindcss postcss autoprefixer
// Inicializar: npx tailwindcss init -p

// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// Componente con Tailwind
function Component4() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Título con Tailwind
      </h3>
      <p className="text-gray-600">
        Diseño responsivo y moderno
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
        Acción
      </button>
    </div>
  );
}`
    }
  ];

  const resources = [
    {
      title: 'React Official Documentation',
      url: 'https://react.dev/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'TypeScript with React',
      url: 'https://react-typescript-cheatsheet.netlify.app/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Tailwind CSS Documentation',
      url: 'https://tailwindcss.com/docs',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'React JSX in Depth',
      url: 'https://react.dev/learn/writing-markup-with-jsx',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Components and Props',
      url: 'https://react.dev/learn/passing-props-to-a-component',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Styling React Components',
      url: 'https://react.dev/learn/styling',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'PDF: Componentes en React',
      url: '/ComponentesenReact.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-blue-600 to-purple-800',
      download: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H2v4h4v2H4v4H2v-4H0v-2h4v-4h2v4h4v2H2zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-purple-600 text-white overflow-hidden">
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
                  <div className="h-1.5 w-16 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-light opacity-95 tracking-wide">
                    {weekConfig.subtitle}
                  </h2>
                </div>
                <p className="text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 font-light">
                  {weekConfig.description}
                </p>
              </div>
            </div>

            {/* Illustration - React themed */}
            <div 
              className="hidden lg:block"
              onMouseEnter={() => setIsHoveringIllustration(true)}
              onMouseLeave={() => setIsHoveringIllustration(false)}
            >
              <div className={`relative w-[540px] h-[400px] transition-all duration-700 ${
                isHoveringIllustration ? 'scale-105' : 'scale-100'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-600 rounded-[3rem] shadow-2xl transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[3rem]"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* React atom electrons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`absolute w-64 h-64 border-4 border-white/30 rounded-full transition-all duration-700 ${isHoveringIllustration ? 'rotate-45' : 'rotate-0'}`}></div>
                    <div className={`absolute w-64 h-64 border-4 border-white/30 rounded-full transition-all duration-700 ${isHoveringIllustration ? 'rotate-90' : 'rotate-60'}`}></div>
                    <div className={`absolute w-64 h-64 border-4 border-white/30 rounded-full transition-all duration-700 ${isHoveringIllustration ? 'rotate-135' : 'rotate-120'}`}></div>
                  </div>
                  
                  {/* Component boxes */}
                  <div className={`absolute top-12 right-20 transition-all duration-500 ${isHoveringIllustration ? 'scale-110 -translate-y-3 rotate-3' : 'scale-100'}`}>
                    <div className="w-32 h-28 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl flex items-center justify-center">
                      <Component className="w-16 h-16 text-white/80" />
                    </div>
                  </div>
                  
                  {/* Main "REACT" text */}
                  <div className="relative z-10">
                    <div className={`text-white text-[160px] font-black leading-none tracking-tighter transition-all duration-500 ${isHoveringIllustration ? 'scale-110' : 'scale-100'}`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      REACT
                    </div>
                    
                    {/* JSX/TSX badges */}
                    <div className="absolute -bottom-16 left-0 flex gap-3">
                      {['JSX', 'TSX'].map((tech, i) => (
                        <div key={i} className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-xl font-bold text-sm shadow-lg animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Code snippet card */}
                  <div className={`absolute bottom-16 right-16 w-32 h-40 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 ${isHoveringIllustration ? 'scale-110 rotate-6' : 'scale-100'}`}>
                    <div className="p-5 space-y-2.5">
                      {[1, 0.8, 1, 0.65, 1, 0.9].map((width, i) => (
                        <div key={i} style={{ width: `${width * 100}%` }} className="h-2 bg-white/50 rounded-full shadow"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating dots */}
                  <div className="absolute top-1/3 left-20 w-10 h-10 bg-cyan-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 left-20 w-12 h-12 bg-blue-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-purple-300/40 rounded-full animate-bounce"></div>
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
                  activeTab === tab.id ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                <span className={`transition-all duration-300 ${activeTab === tab.id ? 'scale-125' : 'group-hover:scale-110'}`}>
                  {tab.icon}
                </span>
                <span className="text-base">{tab.label}</span>
                {activeTab === tab.id && (
                  <>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-t-full animate-slide-in"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/80 to-transparent rounded-t-2xl"></div>
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
                <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-800">Contenido del Curso</h3>
              </div>
              
              {contentItems.map((item, index) => (
                <div key={item.id} className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2">
                  <div onClick={() => setExpandedContent(expandedContent === item.id ? null : item.id)} className="p-10 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50/70 hover:to-transparent transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`p-5 bg-gradient-to-br ${item.color} rounded-3xl text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          {item.icon}
                        </div>
                        <h4 className="text-3xl font-black text-gray-800 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <ChevronRight className={`w-8 h-8 text-gray-400 transition-all duration-500 ${expandedContent === item.id ? 'rotate-90 text-blue-600 scale-125' : 'group-hover:translate-x-2'}`} />
                    </div>
                  </div>
                  
                  {expandedContent === item.id && (
                    <div className="px-10 pb-10 animate-fade-in-up">
                      <div className="pl-24 space-y-5 border-l-4 border-gradient-to-b from-blue-500 to-cyan-500 ml-6">
                        {item.subtopics.map((subtopic, idx) => (
                          <div key={idx} className="flex items-center gap-5 text-gray-700 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group/item animate-fade-in-right" style={{ animationDelay: `${idx * 100}ms` }}>
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

          {activeTab === 'ejemplos' && (
            <div>
              {!selectedExample ? (
                <div className="space-y-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-3xl shadow-2xl">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-gray-800">Ejemplos Prácticos - Semana 6</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {examples.map((example, index) => (
                      <div key={example.id} onClick={() => setSelectedExample(example)} className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-blue-300 overflow-hidden">
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
                  <button onClick={() => { setSelectedExample(null); setExampleTab('reflexion'); }} className="group flex items-center gap-3 mb-10 text-blue-600 hover:text-blue-700 font-bold transition-all duration-300 hover:gap-4 text-lg">
                    <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                    Volver a ejemplos
                  </button>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                    <div className={`bg-gradient-to-r ${selectedExample.gradient} text-white p-10 relative overflow-hidden`}>
                      <div className="relative flex items-center gap-6">
                        <div className="p-5 bg-white/25 backdrop-blur-md rounded-2xl shadow-2xl">
                          <div className="text-white">{selectedExample?.icon}</div>
                        </div>
                        <h3 className="text-4xl font-black">{selectedExample?.title}</h3>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="flex gap-3 mb-10 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-3 shadow-inner">
                        <button onClick={() => setExampleTab('reflexion')} className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${exampleTab === 'reflexion' ? 'bg-white text-blue-600 shadow-xl scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'}`}>
                          <Sparkles className="w-5 h-5" />
                          Reflexión
                        </button>
                        <button onClick={() => setExampleTab('codigo')} className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-bold transition-all duration-300 text-lg ${exampleTab === 'codigo' ? 'bg-white text-blue-600 shadow-xl scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-white/50'}`}>
                          <Code className="w-5 h-5" />
                          Código
                        </button>
                      </div>

                      {exampleTab === 'reflexion' && selectedExample.reflection && (
                        <div className="animate-fade-in-up">
                          <div className="prose prose-lg max-w-none">
                            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 border-l-4 border-blue-600 p-10 rounded-3xl shadow-lg">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
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
            <a href="/projects/semana-5" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-blue-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Semana Anterior
            </a>
            <a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </a>
            <a href="/projects/semana-7" className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
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