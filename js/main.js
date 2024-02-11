document.addEventListener('DOMContentLoaded', () => {

    let btnSubmit = document.querySelector("#submitButton")
    let postContent = document.querySelector("#postContent")
    let postTitle = document.querySelector("#postTitle")
    let updateButton = document.querySelector("#updateButton")
    let deleteButton = document.querySelector("#deleteButton")
    let msgContent = document.querySelector("#msgContent")
    let postPublisher = document.querySelector ("#actualPosts")
    let postHeader =document.querySelector("#postHeader")
    let postText =document.querySelector("#postText")
    
    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault()

        firstValidation()
    })

    let firstValidation = () =>{
        if (postTitle.value == "" || postContent.value==""){
            msgContent.style.color="red"
            msgContent.innerHTML = ("Llena todos los campos!")
        }
        else {
            acceptPost()
            // publishPost(postTitle.value, postContent.value)
            displayAllPosts()
        }
    }

let resetForm = () =>{
        // debugger
        postTitle.value=""
        postContent.value=""
    }

    let posts = []

    let acceptPost = () =>{
        posts.push({
            title: postTitle.value,
            date: Date.now(),
            description: postContent.value,
        })
        localStorage.setItem('posts', JSON.stringify(posts))
        console.log("Este es el post", posts)
    }


    const publishPost = (pt, pc) =>{

        let newContainer = document.createElement("p")
        postPublisher.appendChild(newContainer)
        postHeader.innerHTML += pt,
        postText.innerHTML += pc,
        // this is updating just one of the divs 
        //update p element so each post is inside and create an ID
        //once with the ID, we also need to 
        updateButton.innerHTML += "📝"
        deleteButton.innerHTML += "🗑️"
        // updateButton()
        // deleteButton()
        resetForm()
    }


    const displayAllPosts = () =>{
        postPublisher.innerHTML=''
        let postHeaderDiv = document.createElement('div')
        let postContentDiv = document.createElement('div')
        postHeaderDiv.id = "postHeader"
        postContentDiv.id ="postText"
        postPublisher.appendChild(postHeaderDiv)
        postPublisher.appendChild(postContentDiv)

        postHeader = postHeaderDiv
        postText = postContentDiv
        
        posts = JSON.parse(localStorage.posts)
        console.log(posts)
        posts.forEach((post)=>{
            publishPost(post.title,post.description)
        })
        // publishPost()
    }
     displayAllPosts()

    updateButton.addEventListener('click', (e) =>{
        debugger
        e.preventDefault()
        let forEdit = this.parentElement;
        let input = document.createElement('input');
        input.type = 'text';
        input.value = 
    
        forEdit.replaceWith(input);
    
        editButton.textContent = 'save';
    }) 
        
    

    deleteButton.addEventListener ('click', (e) =>{
        e.preventDefault()
        let deleting = this.parentElement
        postPublisher.removeChild(deleting)
    })

    const createButton = (postNumber) =>{
        let newBUtton = document.createElement("a")
        newBUtton.id= "updateButton" + postNumber
    }




    })
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
