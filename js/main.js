import { allPost } from './database.js'
import { mainCardGen, secondaryCardGen } from './postDom.js'
/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

const posts = await allPost()
