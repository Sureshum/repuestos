Documentación de la API de Repuestos
Esta API permite gestionar repuestos automotrices, con funcionalidades para crear, leer, actualizar y eliminar artículos. A continuación, se detallan los endpoints disponibles y los formatos de datos.

Modelo de Datos: Repuesto
Cada artículo de repuesto está representado por el siguiente modelo de datos.


*_id; string; ID único del repuesto, generado automáticamente por MongoDB.

*nombre; string; Nombre del repuesto.

*marca; string; Marca del repuesto.

*modelo; string; Modelo de vehículo para el que aplica el repuesto.

*año; number; Año del producto.

*precio; number; Precio del producto.

foto; string; URL o ruta de la foto del repuesto.

Endpoints de la API
Todos los endpoints tiendran la url https://repuestos2-0.onrender.com.

1. Crear un nuevo repuesto
Método: POST
Ruta: /repuesto
Descripción: Crea y registra un nuevo repuesto en la base de datos.
Cuerpo de la Petición:

{
  "nombre": "Filtro de Aire",
  "marca": "nike",
  "modelo": "fium",
  "año": 2018,
  "precio": 15.50,
  "foto": "http://ejemplo.com/imagen.jpg"
}

Respuesta Exitosa (201 Created): Devuelve el objeto repuesto creado con su ID único asignado.

2. Leer todos los repuestos
Método: GET
Ruta: /repuesto
Descripción: Obtiene una lista de todos los repuestos registrados en la base de datos.
Respuesta Exitosa (200 OK): Devuelve un arreglo de objetos repuesto.

[
  {
    "_id": "60c72b2f9b1d8c001f3b01a1",
    "nombre": "Filtro de Aire",
    "marca": "Bosch",
    "modelo": "Spark",
    "año": 2018,
    "precio": 15.50,
    "foto": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.santevet.es%2Farticulo%2Fgato-gordo&psig=AOvVaw00YuRxPA7GLTkxEoFdLk83&ust=1756401036082000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOj-ifG9q48DFQAAAAAdAAAAABAK"
  },
  ...
]

3. Leer un repuesto por su ID
Método: GET
Ruta: /repuesto/:id
Descripción: Obtiene los detalles de un repuesto específico utilizando su ID.

Parámetros de Ruta: id (string, el ID del repuesto)

Respuesta Exitosa (200 OK): Devuelve el objeto repuesto correspondiente.

Respuesta de Error (404 Not Found): Si el ID no existe, devuelve un error.

4. Actualizar un repuesto por su ID
Método: PUT
Ruta: /repuesto/:id
Descripción: Actualiza la información de un repuesto existente. Puedes enviar todos los campos o solo los que desees modificar.
Parámetros de Ruta: id (string, el ID del repuesto)

Cuerpo de la Petición:

{
  "precio": 18.00,
  "foto": "https://images.ctfassets.net/denf86kkcx7r/1PKz6sDJvJXhONBEMzPQIY/48a700dc59e7f4fa64bff5ef5477ee2f/gato_gordo_santevet-83?fm=webp&w=913"
}

Respuesta Exitosa (200 OK): Devuelve el objeto repuesto actualizado.

Respuesta de Error (404 Not Found): Si el ID no existe, devuelve un error.

5. Eliminar un repuesto por su ID
Método: DELETE
Ruta: /repuesto/:id
Descripción: Elimina un repuesto de la base de datos.

Parámetros de Ruta: id (string, el ID del repuesto)

Respuesta Exitosa (200 OK): Devuelve el objeto repuesto que fue eliminado.

Respuesta de Error (404 Not Found): Si el ID no existe, devuelve un error.
