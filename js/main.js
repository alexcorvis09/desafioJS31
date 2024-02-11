
    // update con que sea alerta y no que cambie el HTML 
    //si se actualiza el innerHTML regresa success como si estuviera
    // lleno el campo 
import { allPost } from './database.js'
import { mainCardGen, secondaryCardGen } from './postDom.js'
/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

const posts = await allPost()
console.log(posts)

// // Search
// const searchInput = document.getElementById('searchInput')
// const searchButton = document.getElementById('searchButton')
// const cardColumn = document.getElementById('cardColumn')

// const searchPost = async () => {
//   const postsArray = await allPost()

//   const filterResult = postsArray.filter((post) =>
//     post.title.toLowerCase().includes(searchInput.value.toLowerCase())
//   )

//   console.log(filterResult)

//   const printSearch = async () => {
//     cardColumn.innerHTML = ''

//     filterResult.map((post) => mainCardGen(post))
//   }
//   printSearch()
// }

// searchInput.addEventListener('keyup', (event) => {
//   if (event.key === 'Enter') {
//     event.preventDefault()
//     searchPost()
//     console.log(searchInput.value)
//   }
// })

// searchButton.addEventListener('click', () => {
//   searchPost()
// })

// Search
const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const cardColumn = document.getElementById('cardColumn')

const printSearch = async (filterResult) => {
  cardColumn.innerHTML = ''

  filterResult.map((post) => mainCardGen(post))
}

const searchPost = async () => {
  const postsArray = await allPost()

  const filterResult = postsArray.filter((post) =>
    post.title
      .toString()
      .toLowerCase()
      .includes(searchInput.value.toLowerCase())
  )

  console.log(filterResult)

  printSearch(filterResult)
}

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    searchPost()
    console.log(searchInput.value)
  }
})

searchButton.addEventListener('click', () => {
  searchPost()
})
