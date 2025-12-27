export const navItems = [
  { name: "Sobre mí", link: "#about" },
  { name: "Proyectos", link: "#relevant-projects" },
  { name: "Cuaderno", link: "#projects" },
  { name: "Bibliografía", link: "#bibliografia" },
  { name: "Certificaciones", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
  title: "Priorizo la colaboración con el cliente, fomentando la comunicación abierta.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
  title: "Soy muy flexible con la comunicación en diferentes zonas horarias",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
  title: "Mi stack\ntecnológico",
  description: "Siempre busco mejorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
  title: "Entusiasta de la tecnología con pasión por el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actualmente estoy aprendiendo Next.js",
    description: "Novedades internas",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
  title: "¿Quieres iniciar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Unidad 1",
    des: "Semanas 1 a 7: fundamentos web, HTML/CSS avanzado, practicas calificadas, frameworks y React.",
    img: "/p5.png",
    iconLists: [
      "/HTML.svg",
      "/CSS.svg",
      "/JavaScript.svg",
      "/Tailwind CSS.svg",
      "/React.svg"
    ],
    link: "",
    slug: "semana-1",
  },
  {
    id: 2,
    title: "Unidad 2",
    des: "Semanas 9 a 15: desarrollo backend y servidores.",
    img: "/p6.png",
    iconLists: ["/TypeScript.svg", "/Next.js.svg"],
    link: "",
    slug: "semana-9",
  },
];


export const testimonials = [
  {
    quote:
      "Participar en el curso de Cisco Networking Academy me permitió desarrollar habilidades sólidas en la administración y diseño de redes, preparando mi camino en el mundo de las tecnologías de infraestructura. Aprendí a configurar y administrar redes complejas, a resolver problemas en tiempo real, y a optimizar el rendimiento de las redes para garantizar su eficiencia y seguridad. Este curso no solo mejoró mis habilidades técnicas, sino que también me enseñó la importancia de la seguridad y el mantenimiento preventivo de las redes.",
    name: "Carrera Profesional de Técnico en Redes ",
    title: "Cisco Networking Academy",
    img: "/Cisco Networking Academy.png",
  },
  {
    quote:
      "El curso de Power BI transformó mi enfoque hacia el análisis de datos. Aprendí a generar reportes interactivos que mejoran la toma de decisiones en empresas, utilizando herramientas de visualización avanzadas. Con Power Query, pude realizar transformaciones de datos de manera eficiente y automatizada, permitiendo un análisis más preciso y relevante. Esta certificación me brindó las habilidades necesarias para crear dashboards dinámicos y visuales que permiten a las organizaciones comprender mejor su rendimiento y tomar decisiones informadas basadas en datos.",
    name: "Power BI",
    title: "Centro de Informática UNMSM",
    img: "/UNMSM.png",
  },
  {
    quote:
      "El curso de Excel Avanzado fue fundamental para perfeccionar mis habilidades en la automatización de tareas y el análisis detallado de grandes volúmenes de datos. Aprendí a utilizar fórmulas complejas, tablas dinámicas, y macros, lo que me permitió optimizar procesos en mi trabajo y aumentar la productividad. Gracias a este curso, también pude crear soluciones personalizadas para la gestión de datos, lo que me ha permitido trabajar de manera más eficiente y tomar decisiones basadas en datos analíticos.",
    name: "Excel Avanzado",
    title: "Centro de Informática UNMSM",
    img: "/UNMSM.png",
  },
  {
    quote:
      "El curso de Python me permitió adquirir una comprensión sólida de los principios de la programación, las estructuras de datos y la resolución de problemas. Aprendí a utilizar bibliotecas clave como NumPy y Pandas para el análisis de datos y a desarrollar aplicaciones sencillas pero funcionales. Esta certificación me proporcionó las herramientas necesarias para desarrollar soluciones automáticas, crear scripts y mejorar mi capacidad para trabajar con grandes volúmenes de datos. Además, me ayudó a consolidar mis habilidades de programación orientada a objetos y a crear aplicaciones con interfaces básicas.",
    name: "Python",
    title: "UDEMY",
    img: "/udemy.png",
  },
  {
    quote:
      "El curso de HTML, CSS y JavaScript me proporcionó los conocimientos esenciales para el desarrollo web. Aprendí a crear páginas web desde cero, estructurarlas con HTML, aplicar estilos con CSS y agregar interactividad con JavaScript. Gracias a este curso, pude comprender cómo construir sitios web funcionales y visualmente atractivos, con un enfoque en la experiencia del usuario. También aprendí a implementar técnicas de diseño responsivo para asegurar que los sitios web sean accesibles y funcionales en diversos dispositivos y tamaños de pantalla",
    name: "HTML, CSS, JavaScript",
    title: "UDEMY",
    img: "/udemy.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "Java",
    img: "/java.svg",
    nameImg: "/javaName.svg",
  },
  {
    id: 7,
    name: "Python",
    img: "/python.svg",
    nameImg: "/pythonName.svg",
  },
  {
    id: 8,
    name: "NET",
    img: "/NET.svg",
    nameImg: "/NETName.svg",
  },
  {
    id: 9,
    name: "Oracle",
    img: "/oracle.svg",
    nameImg: "/oracleName.svg",
  },
  {    id: 10,
    name: "SQL",
    img: "/SQL.svg",
    nameImg: "/SQLname.svg",
  },
  {   id: 11, 
    name: "Power BI",
    img: "/BI.svg",
    nameImg: "/BIName.svg",
  },
  {   id: 12,
    name: "Excel",
    img: "/excel.svg",
    nameImg: "/excelName.svg",
  },

];

export const workExperience = [
  {
    id: 1,
    title: "Diseñador de aplicaciones y sistemas web – EDHEC S.A.C.",
    desc: "Abr 2025 – Ago 2025\n• Análisis y diseño de prototipos web empresariales con criterios de usabilidad, accesibilidad e identidad corporativa.\n• Implementación de sistemas web para optimizar procesos internos y mejorar la interacción con clientes.\n• Validación de prototipos interactivos, reduciendo en 30% los tiempos de aprobación de diseños.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Ayudante de soporte de TI – Grupo Zárate Verastegui",
    desc: "Nov 2024 – Mar 2025\n• Mantención y optimización de la infraestructura de TI y redes, logrando un 99% de disponibilidad de sistemas críticos.\n• Administración de bases de datos SQL Server, reduciendo en 15% los errores de registro.\n• Desarrollo de automatizaciones internas que disminuyeron en 20% las incidencias técnicas recurrentes.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/gianfranco25-pro/portafolio"
  },
  {
    id: 2,
    img: "/wha.svg",
    url: "https://wa.me/51972093359"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/gianfranco-nu%C3%B1ez-delzo-b219b832b/"
  },
];
