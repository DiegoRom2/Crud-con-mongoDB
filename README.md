# API de Pizzas

## Descripción
API REST hecha con Node.js, Express y MongoDB que permite administrar pizzas
(consultar, crear, actualizar y eliminar).

## Requisitos
- Node.js 18 o superior
- MongoDB corriendo en `localhost:27017`
- Postman (para las pruebas)

## Base de datos
- Motor: MongoDB
- Base de datos: `prueba`
- Colección: `pizzas`
- Cadena de conexión: `mongodb://root:12345678@localhost:27017/`

Las pizzas tienen los campos `nombre` y `descripcion`. El `_id` lo genera Mongo
automáticamente. La base y la colección se crean solas al insertar la primera pizza.

Si usas Docker, puedes levantar Mongo con:

```bash
docker run -d --name mongo -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=12345678 mongo
```

## Instrucciones para ejecutar
```bash
npm install
node index.js
```
El servidor queda en `http://localhost:3000`.

## Endpoints
| Método | Ruta | Descripción | Status |
|---|---|---|---|
| GET | `/api/v1/pizzas` | Lista todas las pizzas | 200 |
| GET | `/api/v1/pizzas/:id` | Obtiene una pizza por id | 200 |
| POST | `/api/v1/pizzas` | Crea una pizza | 201 |
| PUT | `/api/v1/pizzas/:id` | Actualiza una pizza | 202 |
| DELETE | `/api/v1/pizzas/:id` | Elimina una pizza | 200 |

## Pruebas con Postman
1. Abre Postman e importa los archivos de la carpeta `postman/`:
   `Pizzas.postman_collection.json` y `dev.postman_environment.json`.
2. Selecciona el environment **dev** (variable `baseUrl` = `http://localhost:3000`).
3. Con el servidor corriendo, ejecuta la colección con el **Runner**.
   El POST guarda el id de la pizza creada en la variable `pizzaId`, que usan
   el GET, PUT y DELETE.

