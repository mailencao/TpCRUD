## **TP CRUD tienda**

### **Descripción**
Este proyecto simula una tienda virtual que cuenta con categorías y productos. Además, se integra un sistema de autenticación de usuarios que deben iniciar sesión para acceder a varias acciones CRUD del proyecto. Las rutas CRUD están implementadas para cada una de las entidades mencionadas. La autenticación de usuarios se realiza mediante JWT y las contraseñas se almacenan encriptadas en la base de datos.

### **Tecnologías Utilizadas**
- JavaScript (Node.js)
- Base de Datos MongoDB
- Dependencias:
  - bcrypt
  - body-parser
  - express
  - jsonwebtoken
  - method-override
  - mongodb
  - mongoose
  - dotenv
  - nodemon
  - npm-check-updates

### **Cómo Ejecutar el Proyecto**
1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js y MongoDB instalados en tu sistema.
3. Instala las dependencias del proyecto ejecutando el comando:

   npm install
      
5. Una vez que la instalacion este realizada podras iniciar el proyecto usando el comando:

   npm run dev

**Nota importante:** Para realizar pruebas de los métodos CRUD, será necesario primero crear un usuario que cumpla con las condiciones detalladas en el modelo de usuario. La mayoría de las rutas están protegidas con middleware de autenticación, por lo que deberás autenticarte como usuario antes de acceder a ellas. Puedes utilizar herramientas como Postman para enviar solicitudes HTTP con los encabezados de autenticación correspondientes.

