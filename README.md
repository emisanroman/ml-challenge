## App Info

### Ejecutar nivel 2
POST con la matrix que se desea analizar en el body

 POST → https://emitestml.azurewebsites.net/mutant/
{ “dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] }

### Ejecutar nivel 3
GET con el endpoint /stats

 GET → https://emitestml.azurewebsites.net/stats/
