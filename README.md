### Trivia de Música con Leaderboard
Esta es una aplicación web de trivia de música que te permite jugar y competir en un leaderboard. Los jugadores pueden responder preguntas sobre el artista YSY A, ver un video de YouTube relacionado y acumular puntos. Además, pueden iniciar sesión utilizando sus cuentas de Google para mantener un registro de sus puntuaciones en el leaderboard.

Link a la página web: https://trivia-nextjs.vercel.app/

## Configuración del proyecto
Antes de comenzar a usar la aplicación, asegúrate de configurar adecuadamente tus variables de entorno.

# Variables de entorno
*(solamente son necesarias si querés configurar el Leaderboard)*
Asegúrate de tener un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

```
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_URL=...
NEXTAUTH_SECRET=...
PG_CONNECTION=...
```
- GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET son las credenciales de OAuth 2.0 de Google. Puedes obtenerlas registrando tu aplicación en Google Developers Console.
- NEXTAUTH_URL es la URL base de tu aplicación Next.js. Asegúrate de que coincida con la configuración de Next.js y Google Developers Console.
- NEXTAUTH_SECRET es una cadena secreta utilizada por NextAuth.js para firmar y cifrar cookies de sesión. Debe ser una cadena única y segura.
- PG_CONNECTION es la cadena de conexión a tu base de datos PostgreSQL, que debe incluir el nombre de usuario, contraseña, host y nombre de la base de datos.

# Instalación
Para ejecutar la aplicación, sigue estos pasos:
Clona el repositorio:
```
git clone https://github.com/manuimfeld/trivia-ysya-nextjs.git
```
Accede al directorio del proyecto:
```
cd trivia-ysya-nextjs
```
Instala las dependencias:
```
npm install
```
Inicia la aplicación
```
npm run dev
```
La aplicación se ejecutará en http://localhost:3000.

# Uso
Una vez que la aplicación esté en funcionamiento, puedes acceder a ella en tu navegador. Aquí tienes una descripción de las características principales:
- Jugar a la Trivia: Responde a las 11 preguntas sobre el artista y acumula puntos. Tendrás un tiempo limitado para responder cada pregunta.
- Leaderboard: Compite con otros jugadores y consulta el leaderboard para ver las puntuaciones más altas. Inicia sesión con tu cuenta de Google para que tus puntuaciones se registren en el leaderboard. (solo si configuras las variables de entorno)

### Tecnologías Utilizadas

- Next.js: Un marco de trabajo de React para aplicaciones web.
- NextAuth.js: Proporciona autenticación y autorización para la aplicación.
- PG: Un controlador de PostgreSQL para Node.js, utilizado para interactuar con la base de datos PostgreSQL.
- YouTube Embed (URL): Utilizada para mostrar videos de YouTube relacionados a las preguntas de la trivia.
- Axios: Una biblioteca para hacer solicitudes HTTP desde el navegador o Node.js.
- Eslint: Una herramienta de linting que ayuda a mantener un código limpio y coherente.
- Autoprefixer: Una herramienta para agregar automáticamente prefijos de navegador CSS a tu código, garantizando la compatibilidad con diferentes navegadores.
- SweetAlert2: Una biblioteca que proporciona ventanas emergentes de confirmación y notificaciones.
- TailwindCSS: Un marco de diseño CSS altamente personalizable utilizado para estilizar la aplicación.
- Framer Motion: Una biblioteca de animaciones para React.
- Zustand: Una biblioteca de gestión de estado.
