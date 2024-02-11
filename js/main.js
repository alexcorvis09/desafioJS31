import { allPost } from './database.js'
import { mainCardGen, secondaryCardGen } from './postDom.js'
import { aleatoryDate, postWDate } from './filterDate.js'
/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

const posts = await allPost()
const fecha =  aleatoryDate()
const fechaPost =  postWDate()

console.log(fecha)
console.log(fechaPost)
