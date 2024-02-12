
    // update con que sea alerta y no que cambie el HTML 
    //si se actualiza el innerHTML regresa success como si estuviera
    // lleno el campo 
import { allPost } from './database.js'
import { mainCardGen, secondaryCardGen } from './postDom.js'
import { aleatoryDate, postWDate } from './filterDate.js'
/* Los post no tienen fecha, hay que simular fechas con alguna funcion para añadirle
de forma aleatoria una fecha */

const posts = await allPost()
const fecha =  aleatoryDate()
const fechaPost =  postWDate()
document.addEventListener('DOMContentLoaded', () => {
  const btnSubmit = document.querySelector('#submitButton')
  const postContent = document.querySelector('#postContent')
  const postTitle = document.querySelector('#postTitle')
  const updateButton = document.querySelector('#updateButton')
  const deleteButton = document.querySelector('#deleteButton')
  const msgContent = document.querySelector('#msgContent')
  const postPublisher = document.querySelector('#actualPosts')
  let postHeader = document.querySelector('#postHeader')
  let postText = document.querySelector('#postText')

  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()

    firstValidation()
  })

  const firstValidation = () => {
    if (postTitle.value == '' || postContent.value == '') {
      msgContent.style.color = 'red'
      msgContent.innerHTML = 'Llena todos los campos!'
    } else {
      acceptPost()
      // publishPost(postTitle.value, postContent.value)
      displayAllPosts()
    }
  }

  const resetForm = () => {
    // debugger
    postTitle.value = ''
    postContent.value = ''
  }

  let posts = []

  const acceptPost = () => {
    posts.push({
      title: postTitle.value,
      date: Date.now(),
      description: postContent.value
    })
    localStorage.setItem('posts', JSON.stringify(posts))
    console.log('Este es el post', posts)
  }

  const publishPost = (pt, pc) => {
    const newContainer = document.createElement('p')
    postPublisher.appendChild(newContainer)
    ;(postHeader.innerHTML += pt),
    (postText.innerHTML += pc),
    // this is updating just one of the divs
    // update p element so each post is inside and create an ID
    // once with the ID, we also need to
    (updateButton.innerHTML += '📝')
    deleteButton.innerHTML += '🗑️'
    // updateButton()
    // deleteButton()
    resetForm()
  }

  const displayAllPosts = () => {
    postPublisher.innerHTML = ''
    const postHeaderDiv = document.createElement('div')
    const postContentDiv = document.createElement('div')
    postHeaderDiv.id = 'postHeader'
    postContentDiv.id = 'postText'
    postPublisher.appendChild(postHeaderDiv)
    postPublisher.appendChild(postContentDiv)

    postHeader = postHeaderDiv
    postText = postContentDiv

    posts = JSON.parse(localStorage.posts)
    console.log(posts)
    posts.forEach((post) => {
      publishPost(post.title, post.description)
    })
    // publishPost()
  }
  displayAllPosts()

  updateButton.addEventListener('click', (e) => {
    debugger
    e.preventDefault()
    const forEdit = this.parentElement
    const input = document.createElement('input')
    input.type = 'text'
    input.value = forEdit.replaceWith(input)

    editButton.textContent = 'save'
  })

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault()
    const deleting = this.parentElement
    postPublisher.removeChild(deleting)
  })

  const createButton = (postNumber) => {
    const newBUtton = document.createElement('a')
    newBUtton.id = 'updateButton' + postNumber
  }
})
// update con que sea alerta y no que cambie el HTML
// si se actualiza el innerHTML regresa success como si estuviera
// lleno el campo
