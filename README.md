API Documentation for Repuestos Automotrices

instalar esto importante
npm install @nestjs/mongoose mongoose
npm install @nestjs/jwt passport-jwt
npm install bcrypt
npm install @nestjs/passport passport
npm install @types/passport-jwt --save-dev
npm install @types/bcrypt --save-dev

url base: http://localhost:3000

=====================
rutas de autenticacion
=====================

POST /auth/register
- Register a new user
- Request body:
  {
    "email": "user@example.com",
    "password": "password123"
  }
- Response:
  {
    "accessToken": "JWT_TOKEN"
  }

POST /auth/login
- Login an existing user
- Request body:
  {
    "email": "user@example.com",
    "password": "password123"
  }
- Response:
  {
    "accessToken": "JWT_TOKEN"
  }

=================
ruta de repuestos
=================

GET /repuestos
- Get all repuestos
- No authentication required
- Response: Array of repuestos

GET /repuestos/:id
- Get a single repuesto by ID
- No authentication required
- Response: Single repuesto object

POST /repuestos
- Create a new repuesto
- Requires authentication (Bearer token)
- Request body:
  {
    "nombre": "Filtro de aire",
    "marca": "Toyota",
    "modelo": "Corolla",
    "anio": 2020,
    "precio": 45.99,
    "foto": "http://example.com/foto.jpg"
  }
- Response: Created repuesto object

PUT /repuestos/:id
- Update a repuesto by ID
- Requires authentication (Bearer token)
- Request body (all fields optional):
  {
    "nombre": "Filtro de aire nuevo",
    "precio": 49.99
  }
- Response: Updated repuesto object

DELETE /repuestos/:id
- Delete a repuesto by ID
- Requires authentication (Bearer token)
- Response: Deleted repuesto object