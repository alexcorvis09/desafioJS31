import { getPosts } from './database.js'

/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

const posts = await getPosts()

console.log(posts)
