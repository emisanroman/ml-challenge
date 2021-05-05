Para la solución se consideró comocadenas válida en el caso de más de 4 string iguales en la misma línea la cantidad de caracteres dividido 4 (si hay 8 son 2 cadenas, si hay 7 es 1). Pero si un caracter puede pertenecer a una cadena diagonal y otra horizontal (por ejemplo) al mismo tiempo. 

## App Info

### Ejecutar api
- Clonar o descargar el repositorio de Github rama main
- Agregar archivo config.json en la raíz del proyecto indicando puerto y url a la base mongodb
```
  { "development":{
      "port": 5000,
      "db_url": "mongodb+srv://admin:admin@cluster0.q8kxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }}
  ```
- Ejecutar _npm i_
- Ejecutar _npm start_ 

Para ejecutar los test: _npm test_


### Nivel 2
POST con la matrix que se desea analizar en el body

 POST → https://emitestml.azurewebsites.net/mutant/
{ “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }

### Nivel 3
GET con el endpoint /stats

 GET → https://emitestml.azurewebsites.net/stats/
 
