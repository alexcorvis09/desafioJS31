import { getPosts } from './database.js'
import { aleatoryDate } from './filterDate.js'
import { postWDate } from './filterDate.js'

/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

// const posts = await getPosts()
const fecha =  aleatoryDate()
const fechaPost =  postWDate()

// console.log(posts)
console.log(fecha)
console.log(fechaPost)
