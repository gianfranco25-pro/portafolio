"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Code, FileText, BookOpen, ExternalLink, Sparkles, Zap, Coffee, Layers, Database, Box } from 'lucide-react';
import Link from "next/link";

type Example = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  reflection: string;
  code: string;
};
type Resource = {
  title: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  download?: boolean;
};
type ContentItem = {
  id: number;
  title: string;
  icon: React.ReactNode;
  color: string;
  subtopics: string[];
};

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>('ejemplos');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#contenido') {
        setActiveTab('contenido');
      }
    }
  }, []);
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);
  const [expandedContent, setExpandedContent] = useState<number | null>(null);
  const [exampleTab, setExampleTab] = useState<'reflexion' | 'codigo'>('reflexion');
  const [isHoveringIllustration, setIsHoveringIllustration] = useState(false);

  const weekConfig = {
    number: 7,
    icon: '⚛️',
    iconBg: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-600',
    title: 'React Hooks',
    subtitle: 'State Management y Hooks Avanzados',
    description: 'Domina los React Hooks desde useState y useEffect hasta hooks avanzados como useReducer, useContext y custom hooks. Aprende gestión de estado moderna y patrones de desarrollo en React.'
  };

  const tabs = [
    { id: 'contenido', label: 'Contenido', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'ejemplos', label: 'Ejemplos Prácticos', icon: <Code className="w-4 h-4" /> },
    { id: 'recursos', label: 'Recursos', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const contentItems = [
    { 
      id: 1, 
      title: 'Hooks Básicos de React', 
      icon: <Box className="w-5 h-5" />,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      subtopics: [
        'Introducción a Hooks (React 16.8+)',
        'useState: Gestión de estado local',
        'useEffect: Efectos secundarios y ciclo de vida',
        'Eventos de useEffect: mount, update, render',
        'useRef: Referencias a elementos del DOM',
        'Diferencias entre state y props',
        'Class Components vs Function Components'
      ]
    },
    { 
      id: 2, 
      title: 'Hooks Avanzados', 
      icon: <Layers className="w-5 h-5" />,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      subtopics: [
        'useContext: Estado global y Context API',
        'useReducer: Estados complejos y acciones',
        'useState vs useReducer: Cuándo usar cada uno',
        'useCallback: Memorización de funciones',
        'useMemo: Optimización de cálculos',
        'useNavigate: Navegación en React Router',
        'useParams: Parámetros de URL dinámicos'
      ]
    },
    { 
      id: 3, 
      title: 'State Management y Custom Hooks', 
      icon: <Database className="w-5 h-5" />,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      subtopics: [
        'Local State vs Global State',
        'Custom Hooks: Creación y reutilización',
        'Buenas prácticas en Custom Hooks',
        'Lazy Loading y Suspense',
        'Array de dependencias en useEffect',
        'Limpieza de efectos (cleanup)',
        'Testing de Hooks personalizados'
      ]
    }
  ];

  const examples = [
    {
      id: 1,
      title: 'useState y useEffect Básico',
      description: 'Contador con estado y efectos secundarios para entender los hooks fundamentales',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      reflection: 'useState permite agregar estado a componentes funcionales, reemplazando el this.state de componentes de clase. useEffect maneja efectos secundarios como llamadas a APIs, suscripciones o manipulación del DOM. El array de dependencias controla cuándo se ejecuta el efecto: vacío [] solo en mount, sin array en cada render, y con dependencias solo cuando estas cambian.',
      code: `import React, { useState, useEffect } from 'react';

function CounterWithEffect() {
  // useState: Gestión de estado local
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Usuario');

  // useEffect sin dependencias: Se ejecuta en cada render
  useEffect(() => {
    console.log('Componente renderizado');
  });

  // useEffect con array vacío: Solo se ejecuta en mount
  useEffect(() => {
    console.log('Componente montado');
    document.title = 'React Hooks App';
    
    // Cleanup function: Se ejecuta al desmontar
    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  // useEffect con dependencias: Se ejecuta cuando count cambia
  useEffect(() => {
    console.log(\`Count cambió a: \${count}\`);
    document.title = \`Contador: \${count}\`;
  }, [count]);

  // Múltiples estados independientes
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Contador: {count}</h1>
      <p>Usuario: {name}</p>
      
      <div className="buttons">
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
      />
    </div>
  );
}

export default CounterWithEffect;`
    },
    {
      id: 2,
      title: 'useContext y useReducer',
      description: 'Sistema de gestión de estado global con Context API y reducer para estados complejos',
      icon: <Layers className="w-5 h-5 text-pink-600" />,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      reflection: 'useContext elimina prop drilling permitiendo compartir estado entre componentes sin pasar props manualmente. useReducer es ideal para estados complejos con múltiples sub-valores o cuando el próximo estado depende del anterior. La combinación de ambos crea un patrón similar a Redux pero más ligero y nativo de React.',
      code: `import React, { createContext, useContext, useReducer } from 'react';

// 1. Crear el Context
const ProductContext = createContext();

// 2. Definir el reducer
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload)
      };
    
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(p => 
          p.id === action.payload.id ? action.payload : p
        )
      };
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    
    default:
      return state;
  }
};

// 3. Provider Component
export function ProductProvider({ children }) {
  const initialState = {
    products: [],
    filter: 'all'
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

// 4. Custom Hook para usar el contexto
export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts debe usarse dentro de ProductProvider');
  }
  return context;
}

// 5. Componente que consume el contexto
function ProductList() {
  const { state, dispatch } = useProducts();

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: 'Producto Nuevo',
      price: 100
    };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  const deleteProduct = (id) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <button onClick={addProduct}>Agregar Producto</button>
      
      <ul>
        {state.products.map(product => (
          <li key={product.id}>
            {product.name} - {'$' + product.price}
            <button onClick={() => deleteProduct(product.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      
      <p>Total de productos: {state.products.length}</p>
    </div>
  );
}

// 6. App principal
function App() {
  return (
    <ProductProvider>
      <ProductList />
    </ProductProvider>
  );
}

export default App;`
    },
    {
      id: 3,
      title: 'Custom Hook - useFetch',
      description: 'Hook personalizado para consumir APIs con manejo de loading, error y datos',
      icon: <Sparkles className="w-5 h-5 text-green-600" />,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      reflection: 'Los Custom Hooks encapsulan lógica reutilizable siguiendo las mismas reglas que los hooks nativos. Deben comenzar con "use" y pueden usar otros hooks internamente. Son perfectos para abstraer lógica compleja como fetching de datos, manejo de formularios o suscripciones, manteniendo los componentes limpios y enfocados en la UI.',
      code: `import { useState, useEffect } from 'react';

// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Bandera para cancelar actualización si el componente se desmonta
    let isCancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`Error: \${response.status}\`);
        }

        const result = await response.json();
        
        // Solo actualizar si no se canceló
        if (!isCancelled) {
          setData(result);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup: Marcar como cancelado al desmontar
    return () => {
      isCancelled = true;
    };
  }, [url]); // Re-ejecutar si la URL cambia

  return { data, loading, error };
}

// Componente que usa el Custom Hook
function UserList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  if (loading) {
    return <div className="loading">Cargando usuarios...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="user-list">
      <h2>Lista de Usuarios</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Otro componente usando el mismo hook con diferente URL
function PostList() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Posts Recientes</h2>
      {data?.map(post => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

// Custom Hook avanzado: useFetch con refetch
function useFetchWithRefetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refetchIndex, setRefetchIndex] = useState(0);

  const refetch = () => {
    setRefetchIndex(prev => prev + 1);
  };

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const result = await response.json();
        
        if (!isCancelled) {
          setData(result);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [url, refetchIndex]);

  return { data, loading, error, refetch };
}

export default UserList;
export { useFetch, useFetchWithRefetch };`
    },
    {
      id: 4,
      title: 'useNavigate y useParams',
      description: 'Navegación programática y manejo de parámetros de URL con React Router',
      icon: <Box className="w-5 h-5 text-orange-600" />,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
      reflection: 'useNavigate reemplaza useHistory en React Router v6, proporcionando una API más simple para navegación programática. useParams extrae parámetros dinámicos de la URL, permitiendo crear rutas flexibles. Juntos, estos hooks facilitan la creación de aplicaciones SPA con navegación fluida y URLs semánticas.',
      code: `import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link,
  useNavigate,
  useParams 
} from 'react-router-dom';

// Componente: Lista de productos
function ProductList() {
  const navigate = useNavigate();
  
  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Teclado', price: 80 },
    { id: 4, name: 'Monitor', price: 300 }
  ];

  const handleViewDetails = (id) => {
    // Navegación programática
    navigate(\`/product/\${id}\`);
  };

  const handleGoBack = () => {
    // Navegar hacia atrás en el historial
    navigate(-1);
  };

  const handleGoHome = () => {
    // Navegar a la página principal
    navigate('/');
  };

  return (
    <div className="product-list">
      <h1>Lista de Productos</h1>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">\${product.price}</p>
            <button onClick={() => handleViewDetails(product.id)}>
              Ver Detalles
            </button>
          </div>
        ))}
      </div>

      <div className="navigation-buttons">
        <button onClick={handleGoBack}>← Atrás</button>
        <button onClick={handleGoHome}>🏠 Inicio</button>
      </div>
    </div>
  );
}

// Componente: Detalle de producto
function ProductDetail() {
  // useParams: Obtener el ID de la URL
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    const fetchProduct = async () => {
      setLoading(true);
      
      // Simulación de productos
      const products = {
        '1': { id: 1, name: 'Laptop', price: 1200, description: 'Laptop de alta gama' },
        '2': { id: 2, name: 'Mouse', price: 25, description: 'Mouse inalámbrico' },
        '3': { id: 3, name: 'Teclado', price: 80, description: 'Teclado mecánico' },
        '4': { id: 4, name: 'Monitor', price: 300, description: 'Monitor 27 pulgadas' }
      };
      
      setTimeout(() => {
        setProduct(products[id]);
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [id]);

  const handleEdit = () => {
    navigate(\`/product/\${id}/edit\`);
  };

  const handleDelete = () => {
    if (confirm('¿Eliminar este producto?')) {
      navigate('/products');
    }
  };

  const handleBack = () => {
    navigate('/products');
  };

  if (loading) {
    return <div className="loading">Cargando producto...</div>;
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Producto no encontrado</h2>
        <button onClick={handleBack}>Volver a la lista</button>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <button onClick={handleBack} className="back-button">
        ← Volver
      </button>
      
      <h1>{product.name}</h1>
      <p className="price">\${product.price}</p>
      <p className="description">{product.description}</p>
      <p className="id">ID del producto: {id}</p>
      
      <div className="actions">
        <button onClick={handleEdit} className="btn-edit">
          ✏️ Editar
        </button>
        <button onClick={handleDelete} className="btn-delete">
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

// Componente: Editar producto
function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    // Cargar datos del producto
    const products = {
      '1': { name: 'Laptop', price: 1200, description: 'Laptop de alta gama' },
      '2': { name: 'Mouse', price: 25, description: 'Mouse inalámbrico' },
      '3': { name: 'Teclado', price: 80, description: 'Teclado mecánico' },
      '4': { name: 'Monitor', price: 300, description: 'Monitor 27 pulgadas' }
    };
    
    setFormData(products[id]);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Guardando producto:', formData);
    
    // Navegar al detalle después de guardar
    navigate(\`/product/\${id}\`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="product-edit">
      <h1>Editar Producto #{id}</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </div>
        
        <div className="form-actions">
          <button type="submit">💾 Guardar</button>
          <button 
            type="button" 
            onClick={() => navigate(\`/product/\${id}\`)}
          >
            ❌ Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

// App principal con rutas
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<h1>Página de Inicio</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/:id/edit" element={<ProductEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;`
    }
  ];

  const resources = [
    {
      title: 'React Docs - Hooks',
      url: 'https://react.dev/reference/react',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'React Hooks Cheatsheet',
      url: 'https://react-hooks-cheatsheet.com/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'useHooks - Custom Hooks Collection',
      url: 'https://usehooks.com/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'React Router Documentation',
      url: 'https://reactrouter.com/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'React State Management Guide',
      url: 'https://www.etatvasoft.com/blog/react-state-management/',
      icon: <ExternalLink className="w-4 h-4" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Descargar PDF: React Hooks',
      url: '/Hooks.pdf',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-indigo-500 to-purple-500',
      download: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H2v4h4v2H4v4H2v-4H0v-2h4v-4h2v4h4v2H2zM6 4V0H4v4H0v2h4v4h2V6h4V4H6zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Header */}
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
                  <span className="text-white font-bold text-xl tracking-wide">Semana {weekConfig.number}</span>
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

            {/* Illustration - React themed */}
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
                  {/* Background decorative elements */}
                  <div className="absolute top-16 left-16 text-white/10 text-8xl font-black transition-all duration-500" style={{
                    transform: isHoveringIllustration ? 'translateX(-8px) translateY(-8px) rotate(-5deg)' : 'translateX(0) translateY(0) rotate(0)'
                  }}>
                    {'</>'}
                  </div>
                  
                  {/* Hook symbols floating */}
                  <div className={`absolute top-12 right-20 transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -translate-y-3 rotate-3' : 'scale-100'
                  }`}>
                    <div className="w-32 h-32 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">⚛️</span>
                    </div>
                  </div>
                  
                  {/* Main REACT text */}
                  <div className="relative z-10">
                    <div className={`text-white text-[150px] font-black leading-none tracking-tighter transition-all duration-500 ${
                      isHoveringIllustration ? 'scale-110' : 'scale-100'
                    }`} style={{
                      textShadow: '10px 10px 0px rgba(0,0,0,0.2), 5px 5px 30px rgba(0,0,0,0.3)',
                      WebkitTextStroke: '3px rgba(255,255,255,0.1)'
                    }}>
                      REACT
                    </div>
                    
                    {/* Hooks badge */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-md px-8 py-4 rounded-2xl font-bold text-3xl shadow-2xl animate-pulse whitespace-nowrap">
                      Hooks
                    </div>
                  </div>
                  
                  {/* Code snippet card - bottom left */}
                  <div className={`absolute bottom-16 left-16 w-40 h-32 bg-white/25 backdrop-blur-md rounded-2xl border-2 border-white/40 shadow-2xl transition-all duration-500 ${
                    isHoveringIllustration ? 'scale-110 -rotate-6' : 'scale-100'
                  }`}>
                    <div className="p-4 space-y-2">
                      <div className="text-white/80 text-xs font-mono">useState</div>
                      <div className="text-white/80 text-xs font-mono">useEffect</div>
                      <div className="text-white/80 text-xs font-mono">useContext</div>
                      <div className="text-white/80 text-xs font-mono">useReducer</div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-1/3 left-20 w-10 h-10 bg-cyan-300/40 rounded-full animate-ping"></div>
                  <div className="absolute bottom-24 right-32 w-12 h-12 bg-blue-300/30 rounded-full animate-pulse"></div>
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
              
              {contentItems.map((item: ContentItem, index: number) => (
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
                        {item.subtopics.map((subtopic: string, idx: number) => (
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
                      Ejemplos Prácticos - Semana 7
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {examples.map((example: Example, index: number) => (
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
                {resources.map((resource: Resource, index: number) => (
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
            <Link href="/projects/semana-6" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 font-bold transition-all duration-300 hover:gap-4 px-6 py-3 rounded-xl hover:bg-blue-50 text-lg">
              <ChevronLeft className="w-6 h-6" />
              Semana Anterior
            </Link>
            <a href="/#projects" className="px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
              Ver Todas las Semanas
            </a>
            <Link href="/projects/semana-1" className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:gap-4 transform hover:scale-105 text-lg">
              Volver a la semana 1
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