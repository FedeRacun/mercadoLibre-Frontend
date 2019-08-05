# Test Práctico - Frontend

Bienvenido al test práctico para aspirantes al área de front-end de Mercado Libre.

A continuación presentamos el diseño y la descripción funcional de una pequeña aplicación que será la
base del trabajo que deberás desarrollar.

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de
resultados, y la descripción del detalle del producto.

Tenés que usar el siguiente stack tecnológico para construir la aplicación:

### Cliente:
* HTML
* JS (Deseable utilizar React o Backbone)
* CSS (Deseable utilizar Sass)

### Servidor:
* Node >= 6
* Express

## Instalacion

Por favor descargue el repositorio y ejecute los siguientes comandos

## Iniciar Backend

```
cd backend/
```

```
npm i
```
```
npm run dev
```
Ahora que nuestro backend ya esta funcionando levantamos el frontend, para eso:

## Iniciar Frontend

```
cd ..
```
```
cd frontend/
```

```
npm i
```
```
npm start
```

**Todo listo!** nuestra aplicacion ya se encuentra funcionando en http://localhost:3000/

## Desarrollo

**Backend :** para facilitar su desarrollo y comprension el backend se encuentra modularizando en las siguientes carpetas:
* config: *contiene las variables de entorno como el puerto del server por si desea deployarse en la nube*.
* controllers: *esto conecta las request que lleguen del front con la API de mercado libre*.
* models: *cuando el controller quiere responder al frontend se comunica con la carpeta models para modelar la data recibida*.
* routes: *las distintas rutas junto con los metodos PUT GET y SET se encuentran aqui*.

**Frontend :** se podria decir que se encuentra separado en 2 partes, el searchbar y las vistas. El **searchBar** se mantiene siempre presente y solo cumple la funcion de redireccionar a la vista de "Products". La vista **Products**  toma el parametro "search" de la url y consulta al backend por los productos para dicho parametro, mientras espera a la respuesta muestra una vista llamada **LoadingProducts** la cual es solo HTML y CSS que simula ser una pantalla de carga. Cuando la informacion llega a cada imagen de producto y a cada titulo se le agrega un Link a la vista Detail junto con el ID del producto. La vista **Detail** hace lo mismo que products, toma el parametro y consulta al backend mientras muestra la vista LoadingDetail.

En cuanto a estructura contamos con las carpetas:
* views: hacen referencia a la pantalla que se va a renderizar y solo traen componentes de la carpeta containers
* Containers y Components: en Containers almacenamos componentes que solo trabajaran la parte "logica" del mismo y luego llamara a otros componentes de la carpeta components que solo mostraran la interfaz HTML

## Pendiente
* Implementar server side rendering (SEO)
* Un unico script de ejecucion
* Test Unitarios
* Tests Funcionales
