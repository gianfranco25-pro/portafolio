"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, Zap, Settings, PackageOpen, Blocks } from 'lucide-react';

const tabs: { id: 'contenido' | 'ejemplos' | 'recursos'; label: string; icon: JSX.Element }[] = [
  { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'ejemplos', label: 'Prácticas', icon: <Code className="w-4 h-4" /> },
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
    number: 5,
    icon: '⚡',
    iconBg: 'bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600',
    title: 'JavaScript Avanzado y React',
    subtitle: 'JS Vanilla, LocalStorage y React.js',
    description: 'Desarrollo de aplicaciones interactivas con JavaScript puro: ruletas dinámicas, sorteo de equipos, LocalStorage. Introducción a React.js: herramientas de desarrollo, Vite, Create React App y Next.js.'
  };

  const contentItems = [
    { 
      id: 1, 
      title: 'Práctica Calificada 3 - JavaScript Puro', 
      icon: <Zap className="w-5 h-5" />,
      color: 'from-yellow-500 via-orange-500 to-red-500',
      subtopics: [
        'Ruleta dinámica con rotación aleatoria y animaciones CSS',
        'Subdivisión en sectores con 5 colores básicos',
        'Obtención de datos desde TextArea',
        'Eventos: click, teclas (SPACE, S, E, R, F)',
        'LocalStorage: guardado y recuperación de datos',
        'Actualización automática de la ruleta desde textarea',
        'Funcionalidad de ocultar elementos sorteados (tecla S)',
        'Pantalla completa (tecla F) y reinicio (tecla R)',
        'Sorteo de equipos: hasta 100 participantes',
        'Generación aleatoria con selección de equipos/participantes',
        'Exportación: JPG, portapapeles, copiar por columnas'
      ]
    },
    { 
      id: 2, 
      title: 'Introducción a React.js', 
      icon: <Blocks className="w-5 h-5" />,
      color: 'from-cyan-500 via-blue-500 to-indigo-500',
      subtopics: [
        'React: librería JavaScript para interfaces de usuario',
        'Componentes reutilizables y SPA (Single Page Application)',
        'Historia: creado por Jordan Walke (Facebook, 2011)',
        'Versión actual: React 18.0.0 (abril 2022)',
        'CDN: React 17 y React 18 con ReactDOM',
        'Babel: transpilación de JSX y ES6+',
        'React directamente en HTML con script tags',
        'Instalación de Node.js y npm',
        'Carpeta node_modules: dependencias del proyecto'
      ]
    },
    { 
      id: 3, 
      title: 'Herramientas de Desarrollo React', 
      icon: <Settings className="w-5 h-5" />,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      subtopics: [
        'Webpack/TurboPack: bundling de dependencias',
        'Babel/SWC: transpilación de TypeScript y JSX',
        'ESLint: análisis estático de código',
        'Sass/SCSS: preprocesadores CSS',
        'Font Awesome: iconos vectoriales',
        'Create React App: configuración automática',
        'Vite: herramienta de build ultrarrápida',
        'Next.js: framework React con SSR',
        'Gatsby, Blitz, Remix, Hydrogen'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'Práctica Calificada 3 - Ruleta y Sorteo',
      description: 'Aplicación web interactiva: ruleta con rotación aleatoria y sistema de sorteo de equipos con LocalStorage',
      icon: <Zap className="w-5 h-5 text-yellow-600" />,
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      reflection: 'La Práctica Calificada 3 demostró dominio avanzado de JavaScript vanilla sin frameworks. La ruleta dinámica requirió manipulación del DOM, animaciones CSS con transform/rotate, y cálculos matemáticos para subdividir sectores. El sistema de eventos incluyó tanto clicks como teclas especiales (SPACE, S, E, R, F). LocalStorage permitió persistencia de datos entre sesiones. El sorteo de equipos implementó algoritmos de aleatorización y generación dinámica de elementos. La exportación a JPG requirió canvas/html2canvas, y la funcionalidad de copiar al portapapeles usó la API Clipboard.',
      
      code: `// Ejemplo: Ruleta dinámica con JavaScript puro

// Variables globales
let elementos = [];
let anguloActual = 0;
let elementoSeleccionado = null;
let elementosOcultos = [];

// Cargar datos desde LocalStorage
function cargarDatosLocalStorage() {
    const datosGuardados = localStorage.getItem('elementosRuleta');
    if (datosGuardados) {
        elementos = datosGuardados.split('\\n').filter(e => e.trim());
        actualizarTextArea();
        dibujarRuleta();
    }
}

// Guardar datos en LocalStorage
function guardarEnLocalStorage() {
    const textarea = document.getElementById('textarea-elementos');
    localStorage.setItem('elementosRuleta', textarea.value);
    elementos = textarea.value.split('\\n').filter(e => e.trim());
    dibujarRuleta();
}

// Dibujar ruleta con Canvas
function dibujarRuleta() {
    const canvas = document.getElementById('ruleta');
    const ctx = canvas.getContext('2d');
    const colores = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    
    const elementosVisibles = elementos.filter(e => 
        !elementosOcultos.includes(e)
    );
    
    const anguloSector = (2 * Math.PI) / elementosVisibles.length;
    
    elementosVisibles.forEach((elemento, index) => {
        const anguloInicio = index * anguloSector;
        const anguloFin = anguloInicio + anguloSector;
        
        // Dibujar sector
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 180, anguloInicio, anguloFin);
        ctx.fillStyle = colores[index % 5];
        ctx.fill();
        ctx.stroke();
        
        // Dibujar texto
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(anguloInicio + anguloSector / 2);
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(elemento, 120, 0);
        ctx.restore();
    });
}

// Girar ruleta
function girarRuleta() {
    const rotaciones = Math.floor(Math.random() * 5) + 5; // 5-10 vueltas
    const anguloAleatorio = Math.random() * 360;
    const anguloTotal = (rotaciones * 360) + anguloAleatorio;
    
    const ruleta = document.getElementById('ruleta-container');
    ruleta.style.transition = 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
    ruleta.style.transform = \`rotate(\${anguloTotal}deg)\`;
    
    setTimeout(() => {
        seleccionarElemento(anguloTotal % 360);
    }, 4000);
}

// Seleccionar elemento ganador
function seleccionarElemento(angulo) {
    const elementosVisibles = elementos.filter(e => 
        !elementosOcultos.includes(e)
    );
    const anguloSector = 360 / elementosVisibles.length;
    const indice = Math.floor(angulo / anguloSector);
    elementoSeleccionado = elementosVisibles[indice];
    
    document.getElementById('respuesta').textContent = elementoSeleccionado;
}

// Event Listeners
document.getElementById('btn-iniciar').addEventListener('click', girarRuleta);
document.getElementById('ruleta').addEventListener('click', girarRuleta);
document.getElementById('textarea-elementos').addEventListener('input', guardarEnLocalStorage);

// Eventos de teclado
document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()) {
        case ' ': // SPACE
            e.preventDefault();
            girarRuleta();
            break;
        case 's': // Ocultar elemento sorteado
            if (elementoSeleccionado) {
                elementosOcultos.push(elementoSeleccionado);
                resaltarEnTextArea(elementoSeleccionado);
                dibujarRuleta();
            }
            break;
        case 'e': // Editar
            document.getElementById('textarea-elementos').focus();
            break;
        case 'r': // Reiniciar
            elementosOcultos = [];
            dibujarRuleta();
            break;
        case 'f': // Pantalla completa
            document.documentElement.requestFullscreen();
            break;
    }
});

// Resaltar en textarea
function resaltarEnTextArea(elemento) {
    const textarea = document.getElementById('textarea-elementos');
    const texto = textarea.value;
    const inicio = texto.indexOf(elemento);
    textarea.setSelectionRange(inicio, inicio + elemento.length);
    textarea.style.backgroundColor = '#e0e0e0';
}

// Inicializar
cargarDatosLocalStorage();

// ============================================
// SORTEO DE EQUIPOS
// ============================================

function generarEquiposAleatorios() {
    const participantes = document.getElementById('textarea-participantes')
        .value.split('\\n').filter(p => p.trim());
    
    const cantidadEquipos = parseInt(document.getElementById('cantidad-equipos').value);
    const tituloEquipo = document.getElementById('titulo-equipo').value;
    
    // Shuffle algoritmo Fisher-Yates
    const participantesAleatorios = [...participantes];
    for (let i = participantesAleatorios.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [participantesAleatorios[i], participantesAleatorios[j]] = 
        [participantesAleatorios[j], participantesAleatorios[i]];
    }
    
    // Dividir en equipos
    const equipos = [];
    const tamañoEquipo = Math.ceil(participantesAleatorios.length / cantidadEquipos);
    
    for (let i = 0; i < cantidadEquipos; i++) {
        equipos.push(participantesAleatorios.slice(
            i * tamañoEquipo, 
            (i + 1) * tamañoEquipo
        ));
    }
    
    mostrarEquipos(equipos, tituloEquipo);
}

function mostrarEquipos(equipos, titulo) {
    const contenedor = document.getElementById('resultado-equipos');
    contenedor.innerHTML = '';
    
    equipos.forEach((equipo, index) => {
        const divEquipo = document.createElement('div');
        divEquipo.className = 'equipo-card';
        divEquipo.innerHTML = \`
            <h3>\${titulo} \${index + 1}</h3>
            <ul>
                \${equipo.map(p => \`<li>\${p}</li>\`).join('')}
            </ul>
        \`;
        contenedor.appendChild(divEquipo);
    });
}

// Exportar a JPG (requiere html2canvas)
async function exportarJPG() {
    const elemento = document.getElementById('resultado-equipos');
    const canvas = await html2canvas(elemento);
    const link = document.createElement('a');
    link.download = 'equipos.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
}

// Copiar al portapapeles
function copiarPortapapeles() {
    const texto = document.getElementById('resultado-equipos').innerText;
    navigator.clipboard.writeText(texto);
    alert('Copiado al portapapeles');
}


// ============================================
// SEMANA 5 - REACT AVANZADO
// ============================================

/*
NOVEDADES:
- useEffect: Hook para efectos secundarios (data fetching, subscriptions)
- useContext: Hook para consumir contextos
- Custom Hooks: Hooks personalizados para lógica reutilizable
- Render props y Higher Order Components (HOC) para compartir lógica
- Suspense y React.lazy para carga diferida de componentes
- Portales para renderizar fuera de la jerarquía del DOM
- Fragments para agrupar elementos sin agregar nodos extra
- Memoización con React.memo y useMemo para optimizar rendimiento
*/

// ============================================
// useEffect - Ejemplo básico
// ============================================

/*
import React, { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    
    // Cleanup: limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // Dependencias vacías: solo al montar/desmontar

  return <div>Hora actual: {hora}</div>;
}

export default Reloj;
*/

// ============================================
// useContext - Ejemplo básico
// ============================================

/*
import React, { createContext, useContext } from 'react';

// Crear contexto
const TemaContext = createContext('claro');

function App() {
  return (
    <TemaContext.Provider value="oscuro">
      <Toolbar />
    </TemaContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

// Consumir contexto
function ThemedButton() {
  const tema = useContext(TemaContext);
  
  return <button className={tema}>Botón con tema {tema}</button>;
}

export default App;
*/

// ============================================
// Custom Hooks - Ejemplo básico
// ============================================

/*
import React, { useState, useEffect } from 'react';

// Custom Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setCargando(false);
    };
    
    fetchData();
  }, [url]);
  
  return { data, cargando };
}

function App() {
  const { data, cargando } = useFetch('https://api.example.com/datos');
  
  if (cargando) return <div>Cargando...</div>;
  
  return (
    <div>
      <h1>Datos:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
*/

// ============================================
// Suspense y React.lazy - Ejemplo básico
// ============================================

/*
import React, { Suspense, lazy } from 'react';

// Carga diferida del componente
const ComponentePesado = lazy(() => import('./ComponentePesado'));

function App() {
  return (
    <div>
      <h1>Mi App</h1>
      
      {/* Suspense: fallback mientras se carga el componente *}
      <Suspense fallback={<div>Cargando componente pesado...</div>}>
        <ComponentePesado />
      </Suspense>
    </div>
  );
}

export default App;
*/

// ============================================
// Portales - Ejemplo básico
// ============================================

/*
import React, { createPortal } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>,
    document.getElementById('portal') // Nodo fuera de la jerarquía del DOM
  );
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <h1>Mi App</h1>
      <button onClick={() => setIsOpen(true)}>Abrir modal</button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hola desde el modal!</h2>
        <p>Este es un contenido dentro de un portal.</p>
      </Modal>
    </div>
  );
}

export default App;
*/

// ============================================
// Fragments - Ejemplo básico
// ============================================

/*
import React from 'react';

function Lista({ items }) {
  return (
    <ul>
      {items.map(item => (
        // Fragment para agrupar sin nodo extra
        <React.Fragment key={item.id}>
          <li>{item.nombre}</li>
          <li>{item.descripcion}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Lista;
*/

// ============================================
// Memoización - Ejemplo básico
// ============================================

/*
import React, { useState, useMemo } from 'react';

function App() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');
  
  // useMemo para memorizar el resultado
  const valorMemorizado = useMemo(() => {
    return calcularValorComplejo(contador);
  }, [contador]); // Dependencias: solo recalcular si cambia "contador"
  
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      
      <h2>Valor memorizado: {valorMemorizado}</h2>
      
      <input 
        type="text" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo"
      />
    </div>
  );
}

function calcularValorComplejo(contador) {
  console.log('Calculando valor complejo...');
  // Simular cálculo costoso
  for (let i = 0; i < 1e6; i++) {}
  return contador * 2;
}

export default App;
*/

// ============================================
// COMANDOS ÚTILES
// ============================================

// Verificar versión de Node.js
node --version

// Verificar versión de npm
npm --version

// Instalar dependencia
npm install nombre-paquete

// Instalar dependencia de desarrollo
npm install --save-dev nombre-paquete

// Ejecutar servidor de desarrollo
npm run dev

// Compilar para producción
npm run build

// Vista previa de build
npm run preview

// ============================================
// PACKAGE.JSON - Ejemplo
// ============================================

{
  "name": "mi-app-react",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8"
  }
}`
    }
  ];

  const resources = [
    {
      title: 'PDF Práctica Calificada 3',
      url: '/PracticaCalificada3.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-yellow-600 to-orange-600',
      download: true
    },
    {
      title: 'Practica de React.js - Código Completo',
      url: '/PRACTICA REALIZADA SEMANA 5.rar',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-yellow-600 to-orange-600',
      download: true
    },
    {
      title: 'PDF Introducción a React',
      url: '/IntroduccionReact.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-cyan-600 to-blue-600',
      download: true
    },
    {
      title: 'React.js Documentation',
      url: 'https://es.reactjs.org/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Vite Documentation',
      url: 'https://vitejs.dev/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Create React App',
      url: 'https://create-react-app.dev/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Next.js Documentation',
      url: 'https://nextjs.org/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Babel Documentation',
      url: 'https://babeljs.io/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Webpack Documentation',
      url: 'https://webpack.js.org/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Node.js Downloads',
      url: 'https://nodejs.org/es/',
      icon: <PackageOpen className="w-4 h-4" />,
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-red-400/20 to-yellow-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white overflow-hidden">
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
                  <div className="h-1.5 w-16 bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 rounded-full shadow-lg"></div>
                  <h2 className="text-3xl font-light opacity-95 tracking-wide">
                    {weekConfig.subtitle}
                  </h2>
                </div>
                <p className="text-xl opacity-90 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 font-light">
                  {weekConfig.description}
                </p>
              </div>
            </div>

            {/* Illustration - JS/React themed */}
            <div 
              className="hidden lg:block"
              onMouseEnter={() => setIsHoveringIllustration(true)}
              onMouseLeave={() => setIsHoveringIllustration(false)}
            >
              <div className={`relative w-[540px] h-[400px] transition-all duration-700 ${
                isHoveringIllustration ? 'scale-105' : 'scale-100'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 rounded-[3rem] shadow-2xl transform rotate-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[3rem]"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  {/* Background JS symbol */}
                  <div className="absolute top-16 left-16 text-white/10 text-9xl font-black transition-all duration-500" style={{
                    transform: isHoveringIllustration ? 'translateX(-8px) translateY(-8px) rotate(-5deg)' : 'translateX(0) translateY(0) rotate(0)'
                  }}>
                    JS
                  </div>
                  
                  {/* React logo card */}
                  <div className={`absolute top-12 right-20 transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -translate-y-3 rotate-3' : 'scale-100'
                  }`}>
                    <div className="w-40 h-32 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl flex items-center justify-center">
                      <div className="text-6xl">⚛️</div>
                    </div>
                  </div>
                  
                  {/* Main React text */}
                  <div className="relative z-10">
                    <div className={`text-white text-[180px] font-black leading-none tracking-tighter transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      REACT
                    </div>
                    
                    {/* Tech badges */}
                    <div className="absolute -bottom-20 left-0 flex gap-3">
                      {['Vite', 'JSX', 'npm'].map((tech, i) => (
                        <div key={i} className="px-4 py-2 bg-white/30 backdrop-blur-sm rounded-xl font-bold text-sm shadow-lg animate-pulse" style={{ animationDelay: `${i * 200}ms` }}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Ruleta icon card */}
                  <div className={`absolute bottom-16 right-16 w-32 h-40 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 flex items-center justify-center ${
                    isHoveringIllustration ? 'scale-110 rotate-6' : 'scale-100'
                  }`}>
                    <div className="text-7xl animate-spin-slow">🎡</div>
                  </div>
                  
                  {/* Floating lightning dots */}
                  <div className="absolute top-1/3 left-20 w-10 h-10 bg-yellow-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 left-20 w-12 h-12 bg-orange-300/30 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-red-300/40 rounded-full animate-bounce"></div>
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-t-full animate-slide-in"></div>
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
                <h3 className="text-4xl font-black text-gray-800">
                  Contenido de la Semana
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
                              <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>
                              <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-40"></div>
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

          {/* Ejemplos/Prácticas Tab */}
          {activeTab === 'ejemplos' && (
            <div>
              {!selectedExample ? (
                <div className="space-y-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-2xl">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-4xl font-black text-gray-800">
                      Práctica y Clases - Semana 4
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
                            <span>Ver detalles</span>
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
                    Volver a prácticas
                  </button>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                    <div className={`bg-gradient-to-r ${selectedExample.gradient} text-white p-10 relative overflow-hidden`}>
                      <div className="relative flex items-center gap-6">
                        <div className="p-5 bg-white/25 backdrop-blur-md rounded-2xl shadow-2xl">
                          <div className="text-white">
                            {selectedExample?.icon}
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h3 className="text-4xl font-black">
                            {selectedExample?.title}
                          </h3>
                          {/* Botón GitHub solo para Práctica Calificada 3 */}
                          {selectedExample?.id === 1 && (
                            <a
                              href="https://github.com/giannunezdelzo-prog/Practica-3"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-white/20 text-white font-semibold shadow hover:bg-white/30 transition-all duration-300 border border-white/30 text-base"
                              style={{ maxWidth: '170px', minWidth: '120px' }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                                <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z" />
                              </svg>
                              Ver en GitHub
                            </a>
                          )}
                        </div>
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
                            <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-l-4 border-orange-600 p-10 rounded-3xl shadow-lg">
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
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
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
                  Recursos y Documentación
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
            <a href="/projects/semana-4" className="flex items-center gap-3 text-gray-700 hover:text-orange-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-orange-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Semana Anterior
            </a>
            <a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </a>
            <a href="/projects/semana-6" className="flex items-center gap-3 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
              Siguiente Semana
              <ChevronRight className="w-6 h-6" />
            </a>
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
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
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