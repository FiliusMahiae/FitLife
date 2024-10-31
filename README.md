# FitLife - Formulario de Registro

Desarrollado por Sergio Mahía INSO 2A

### Descripción

**FitLife** es una aplicación de formulario de registro para un gimnasio, desarrollada con **React**. La aplicación guía al usuario a través de un proceso de registro en varias etapas, recopilando información personal, detalles de contacto, preferencias de entrenamiento y datos de pago.

Cada sección es un componente de React que permite al usuario avanzar a la siguiente etapa mediante un botón "Siguiente". En la última etapa, un botón "Enviar Formulario" consolida y envía todos los datos ingresados.

### Características

- **Formulario dividido en etapas**: El formulario está organizado en secciones o etapas que los usuarios completan paso a paso.
- **Validación en tiempo real**: Cada campo del formulario se valida a medida que el usuario escribe, mostrando mensajes de error si es necesario.
- **Indicador de progreso**: Muestra el progreso del usuario a medida que avanza por las etapas del formulario.
- **Diseño atractivo**: Estilizado con CSS para una experiencia de usuario moderna y sencilla.

### Estructura del proyecto

El proyecto está dividido en varios componentes de React:

- **App.js**: Componente principal que maneja el estado del formulario y el avance entre etapas.
- **DatosPersonales**: Componente para capturar el nombre, email y teléfono del usuario.
- **InformacionDeContacto**: Componente para capturar la dirección, ciudad y código postal.
- **PreferenciasEntrenamiento**: Componente para seleccionar el tipo de entrenamiento, objetivos y disponibilidad.
- **MetodoDePago**: Componente para ingresar los datos de tarjeta de crédito.
- **IndicadorDeProceso**: Componente que muestra el progreso visual de las etapas del formulario.
- **EnviarFormulario**: Botón final para enviar todos los datos del formulario en la última etapa.

### Tecnologías utilizadas

- **React** - Librería principal para construir la interfaz de usuario.
- **React Hook Form** - Manejo de formularios y validación de campos.
- **CSS3** - Para el estilizado del formulario y los componentes.

---

¡Gracias por revisar FitLife! Este proyecto está diseñado para ayudar a nuevos usuarios a registrarse de manera fácil y guiada en un gimnasio, siguiendo un flujo intuitivo de varias etapas.
