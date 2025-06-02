Instalación (dependencias importantes)
bash
npm install @nestjs/mongoose mongoose
npm install @nestjs/jwt passport-jwt
npm install bcrypt
npm install @nestjs/passport passport
npm install @types/passport-jwt --save-dev
npm install @types/bcrypt --save-dev
URL base: http://localhost:3000
url de la api montada con render.com: https://repuestos-tyqo.onrender.com
=====================
Rutas de Autenticación
=====================
POST /auth/register
Registrar un nuevo usuario

Cuerpo de la solicitud:

json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
Respuesta:

json
{
  "accessToken": "JWT_TOKEN"
}
POST /auth/login
Iniciar sesión con un usuario existente

Cuerpo de la solicitud:

json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
Respuesta:

json
{
  "accessToken": "JWT_TOKEN"
}
=================
Rutas de Repuestos
=================
GET /repuestos
Obtener todos los repuestos

No requiere autenticación

Respuesta: Arreglo de repuestos

GET /repuestos/:id
Obtener un repuesto por ID

No requiere autenticación

Respuesta: Objeto de un solo repuesto

POST /repuestos
Crear un nuevo repuesto

Requiere autenticación (token Bearer)

Cuerpo de la solicitud:

json
{
  "nombre": "Filtro de aire",
  "marca": "Toyota",
  "modelo": "Corolla",
  "año": 2020,
  "precio": 45.99,
  "foto": "http://ejemplo.com/foto.jpg"
}
Respuesta: Objeto del repuesto creado

PUT /repuestos/:id
Actualizar un repuesto por ID

Requiere autenticación (token Bearer)

Cuerpo de la solicitud (todos los campos son opcionales):

json
{
  "nombre": "Filtro de aire nuevo",
  "precio": 49.99
}
Respuesta: Objeto del repuesto actualizado

DELETE /repuestos/:id
Eliminar un repuesto por ID

Requiere autenticación (token Bearer)

Respuesta: Objeto del repuesto eliminado
