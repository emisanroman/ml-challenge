Para la solución se consideró comocadenas válida en el caso de más de 4 string iguales en la misma línea la cantidad de caracteres dividido 4 (si hay 8 son 2 cadenas, si hay 7 es 1). Pero si un caracter puede pertenecer a una cadena diagonal y otra horizontal (por ejemplo) al mismo tiempo. 

## App Info

### Ejecutar nivel 2
POST con la matrix que se desea analizar en el body

 POST → https://emitestml.azurewebsites.net/mutant/
{ “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }

### Ejecutar nivel 3
GET con el endpoint /stats

 GET → https://emitestml.azurewebsites.net/stats/
 
