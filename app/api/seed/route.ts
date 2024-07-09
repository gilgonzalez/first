import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 


  await prisma.task.deleteMany(); // delete * from task

  // const task = await prisma.task.create( {
  //   data: {
  //     name: 'Inventario',
  //     description: 'Realizar el inventario mensual. Mes (Junio)',
  //     completed: true
  //   }
  // } );

  await prisma.task.createMany({
    data :[
      {
          "name": "Instalación de Visual Studio Code",
          "description": "Instalar Visual Studio Code en tu computadora. Asegúrate de descargar la versión adecuada para tu sistema operativo desde la página oficial. Configura las extensiones esenciales como Prettier, ESLint y GitLens. Configura los atajos de teclado y temas que prefieras para que tu entorno de desarrollo sea eficiente y cómodo.",
          "completed": true
      },
      {
          "name": "Configuración de Android Studio",
          "description": "Descarga e instala Android Studio. Configura el entorno de desarrollo incluyendo la instalación del SDK de Android y los emuladores necesarios para pruebas. Familiarízate con la interfaz de usuario de Android Studio y explora las herramientas disponibles como el layout editor, logcat, y profiler para un desarrollo eficiente de aplicaciones Android.",
          "completed": true
      },
      {
          "name": "Introducción a React",
          "description": "Lee la documentación oficial de React para entender los conceptos básicos como componentes, props, state y el ciclo de vida de los componentes. Crea un proyecto simple utilizando Create React App para poner en práctica lo aprendido. Familiarízate con el JSX y las funciones hooks, que son fundamentales para el desarrollo moderno con React.",
          "completed": true
      },
      {
          "name": "Primeros pasos con Astro",
          "description": "Investiga sobre Astro y sus ventajas en la construcción de sitios web rápidos. Sigue la guía de inicio rápido en la documentación oficial para crear tu primer proyecto. Aprende a utilizar las plantillas y cómo integrar componentes de diferentes frameworks como React o Vue dentro de Astro para un desarrollo más flexible.",
          "completed": true
      },
      {
          "name": "Exploración de Next.js",
          "description": "Descarga y configura un proyecto básico con Next.js siguiendo la documentación oficial. Comprende las características principales como el enrutamiento basado en archivos, generación estática, y renderizado del lado del servidor. Crea una aplicación simple para experimentar con estas características y entender cómo se integran con React.",
          "completed": true
      },
      {
          "name": "Desarrollo móvil con Expo",
          "description": "Instala Expo CLI y crea un nuevo proyecto utilizando el comando 'expo init'. Aprende a usar el Expo Go app para probar tus aplicaciones en dispositivos reales sin necesidad de compilarlas. Explora las API de Expo para funcionalidades como cámara, sensores y notificaciones, y desarrolla una pequeña aplicación que utilice estas características.",
          "completed": false
      },
      {
          "name": "Configuración del entorno de desarrollo",
          "description": "Asegúrate de que todas las herramientas y dependencias necesarias estén instaladas y configuradas correctamente en tu máquina. Esto incluye Node.js, npm/yarn, Git, y cualquier otra herramienta específica que tu equipo utilice. Configura tu terminal y gestor de versiones de manera eficiente para mejorar tu flujo de trabajo diario.",
          "completed": false
      },
      {
          "name": "Familiarización con el repositorio de código",
          "description": "Clona el repositorio de código de la empresa y explora la estructura del proyecto. Lee la documentación interna para comprender las convenciones de codificación, estructura de carpetas y el flujo de trabajo de Git que se sigue en el equipo. Realiza un pequeño cambio y abre un pull request para practicar el proceso de revisión de código.",
          "completed": false
      },
      {
          "name": "Configuración de pruebas automatizadas",
          "description": "Instala y configura las herramientas de pruebas que se utilizan en tu equipo, como Jest para pruebas unitarias y Cypress para pruebas de integración. Escribe y ejecuta algunos casos de prueba básicos para asegurarte de que todo está funcionando correctamente. Entiende cómo se integran estas pruebas en el pipeline de CI/CD de la empresa.",
          "completed": false
      },
      {
          "name": "Participación en reuniones de equipo",
          "description": "Asiste a las reuniones diarias del equipo para comprender la dinámica y los procesos de trabajo. Toma notas sobre las metodologías ágiles que se utilizan, como Scrum o Kanban, y familiarízate con las herramientas de gestión de proyectos como Jira o Trello. Asegúrate de entender las prioridades del equipo y cómo se planifican los sprints o ciclos de desarrollo.",
          "completed": false
      }
  ]
  
  
  })

  return NextResponse.json({message:'Seed executed'});
}