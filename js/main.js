
    // update con que sea alerta y no que cambie el HTML 
    //si se actualiza el innerHTML regresa success como si estuviera
    // lleno el campo 
import { allPost } from './database.js'
import { mainCardGen, secondaryCardGen } from './postDom.js'
/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

const posts = await allPost()
