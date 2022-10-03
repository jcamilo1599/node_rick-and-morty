# Node - Rick and Morty

Aplicación desarrollada con Node y TypeScript para consumir un api de Rick and Morty, aplicar filtros, generar un
__.csv__ y __.json__; adicionalmente lo comprime en un __.zip__ y lo guarda en la raíz del proyecto.

# Versiones

- TypeScript: 4.8.4
- Node: 12.16.1
- NPM: 6.13.4

# Ejecución

- Debido a que es un proyecto con TypeScript, el proyecto debe ser compilado mediantes el comando ```tsc```
- Iniciar el proyecto (_dist/app.js_), mediante ```npm start```
- Puerto configurado por defecto: ```8080```
- Consumir el endpoint de tipo GET ```http://localhost:8080/generate_file```
- El paso anterior genera un __.zip__ con un __.csv__ y __.json__ en su interior que contiene los personajes de la
  primer página de la api de Rick and Morty
- Este endpoint local (```http://localhost:8080/generate_file```) acepta dos parámetros ```name``` y ```status```, con el
  fin de filtrar los personajes, ya sea por nombre y/o estado del personaje.
- Ejemplo del endpoint con parámetros: ```http://localhost:8080/generate_file?name=rick&status=alive```
