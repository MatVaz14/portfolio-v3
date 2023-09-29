import AboutImage from "../assets/AboutMe.png";
import CV from "../MatiasVazquez-CV2023.pdf";

import CRM from "../assets/crmApp.jpg";
import STARWARS from "../assets/starWarsApp.jpg";
import FOOD from "../assets/foodApp.jpg";
import COUNTRIE from "../assets/countrieApp.jpg";

const AboutMe = {
  image: AboutImage,
  textTitle: "Ey, Hola!",
  emoji: "👋",
  text: `Mi nombre es Matias Vazquez, tengo 22 años de edad. Soy Desarrollador Fullstack y estudiante en Ingenieria en Sistemas.
				Cuento con la pasión, motivación, energía, positividad, compromiso y mucho más para poder dar lo mejor de mí y desarrollarme 
		de la mejor manera en la industria. 
		En estos momentos estoy en búsqueda de poder desempeñar mis conocimientos en el mundo real y comenzar a dar vida a los proyectos que alguna vez soñé.`,
  cv: CV,
  download: "Matias Vazquez - CV.pdf",
};

const ExperienceData = [
  {
    title: "Universidad Tecnologica Nacional",
    name: "Ingenieria en Sistemas de Información",
    description: "",
    inicio: "2021",
    final: "actualidad",
  },
  {
    title: "Henry Bootcamp",
    name: "Desarrollador Fullstack",
    description:
      "+800 horas de aprendizaje tanto práctico como teórico, con tecnologías como HTML, CSS, JavaScript, React, Redux, MySQL, Node y Express.",
    inicio: "Noviembre 2022",
    final: "Febrero 2023",
  },
  {
    title: "Udemy",
    name: "Curso profesional de Javascript 2022",
    description: `
      Aprender fundamentos de Javascript.
Conocer las últimas funcionalidades de ECMAScript
Desarrollar aplicaciones web con las mejores prácticas en el mercado
      `,
    inicio: "Febrero 2023",
    final: "Febrero 2023",
  },
  {
    title: "Universidad Tecnologica Nacional",
    name: "Curso de Reparación de PC y Notebooks",
    description: `Prevención de fallas. Diagnóstico de fallas con sus arreglos. Mantener PC o Laptop actualizada con las nuevas tecnologías (Hardware y Software),
      Protegerla de ataques externos, tanto del medio ambiente como de virus y malware.`,
    inicio: "Junio 2021",
    final: "Julio 2021",
  },
];

const Projects = [
  {
    title: "Proyecto Grupal - Henry",
    name: "CRM",
    img: CRM,
    description: `Proyecto CRM inspirada en empresas pequeñas, implementando un sistema de inventarios en la gestión de ventas.
El proyecto fue todo un reto y demostró ser uno de los mejores en su grupo, siendo un CRM escalable, de clasificación y una excelente aplicación Fullstack segura. 
        `,
    more: `Esta plataforma contiene funcionalidades como:
        • Creación de usuarios admin.
        • Creación de vendedores.
        • Agregar, editar y deshabilitar productos y vendedores.
        • Promoción de clientes a VIP.
        • Gráficos para monitorear las ventas e inventario de productos.
        • Modificación de los perfiles de admin y vendedores.
        • Sistema de notificación por email cuando se registra un usuario nuevo.
        • Creación de actividades o tareas.
        • Versión gratuita por 7 días.
        • Realización de pagos a través de Paypal después de la prueba gratuita.`,
    deploy: "https://crm-henry-34b.vercel.app",
    githubFront: "https://github.com/MatVaz14/crm-front",
    githubBack: "https://github.com/HanJian16/CRMBack",
    githubFull: "",
    url: "https://www.youtube.com/watch?v=EGDI0xhNJ0s",
  },
  {
    title: "Star Wars - Challenge",
    name: "Star Wars Swapi",
    img: STARWARS,
    description:
      "Aplicación FrontEnd. Se basa en una aplicación para práctica de contextos globales. Los usuarios pueden ingresar el nombre de un personaje de la saga de Star Wars y se traera informacion del personaje buscado, que al seleccionarlo le mostrara información extra",
    deploy: "https://star-wars-swapi-challenge.vercel.app",
    githubFront: "https://github.com/MatVaz14/Star-Wars-Challenge",
    githubBack: "",
    githubFull: "",
    more: `Esta app contiene los siguientes filtros:
    • Filtro por orden Alfabético.
    • Filtro por Género.
    • Filtro por orden de su lugar natal.
    Cabe destacar que cuenta con un paginado, cada pagina contiene 6 personajes...
    `,
    url: "",
  },
  {
    title: "Proyecto Individual - Countries",
    name: "Countries",
    img: COUNTRIE,
    description:
      "Aplicación Fullstack, se trata de una aplicación en la que se visualizan los 150 paises, pueden filtrarse por orden alfabético, por numero de población, etc. Además de dar la posibilidad de 'crear' una actividad en cierto País",
    deploy: "",
    githubFront: "",
    githubBack: "",
    githubFull: "https://github.com/MatVaz14/countries-app",
    more: `Esta plataforma contiene funcionalidades como:
    • Creación de Actividades.
    • Filtro por Continentes.
    • Filtro por orden de Población.
    • Filtro por orden Alfabetico.
    `,
    url: "",
  },
  {
    title: "Proyecto Individual - Henry",
    name: "Food App",
    img: FOOD,
    description: `Aplicación Fullstack, se trata de una aplicación en la que se pueden buscar 
    recetas de comida traidas de Spoonacular API`,
    deploy: "",
    githubFront: "",
    githubBack: "",
    githubFull: "https://github.com/MatVaz14/Food-App-PI",
    more: `Esta plataforma contiene funcionalidades como:
    • Creación de nuevas Recetas.
    • Filtro por Categoria.
    • Filtro por orden de Nivel Saludable.
    • Filtro por orden Alfabetico.
    `,
    url: "",
  },
];

export { AboutMe, ExperienceData, Projects };
