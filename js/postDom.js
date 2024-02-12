import { allPost } from './database.js'

let posts = []

document.addEventListener('DOMContentLoaded', () => {
  let btnSubmit = document.querySelector("#submitButton")
  let postContent = document.querySelector("#postContent")
  let postTitle = document.querySelector("#postTitle")
  // let buttonEdit = document.getElementById("#editButton")
  // let deleteButton = document.querySelector("#deleteButton")
  let msgContent = document.querySelector("#msgContent")
  
  
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
      postTitle.value=""
      postContent.value=""
  }

  let acceptPost = () =>{
      posts.push({
          title: postTitle.value,
          date: Date.now(),
          description: postContent.value,
      })
      debugger
      localStorage.setItem('posts', JSON.stringify(posts))
      debugger
      console.log("Este es el post", posts)
  }

  const publishPost = (pt, pc, indx) =>{

    let p = {};
    p.body = pc;
    p.title = pt;
    p.reactions = 0;
    p.tags = "mytag";
    p.userId = 0;
    p.indexC = indx,

    secondaryCardGen(p, "time", user);
    resetForm()

  }

  const displayAllPosts = () =>{
      let stored_posts = localStorage.posts;
      if( stored_posts === undefined )
        posts = []
      else 
        posts = JSON.parse(localStorage.posts)
      console.log(posts)
      // posts.forEach((post)=>{
      //     publishPost(post.title,post.description)
      // })
      for (let index in posts){
        publishPost(posts[index].title, posts[index].description, index)
      }
  }
   displayAllPosts()
   ////adding update and eliminate function
  
})

const postsArray = await allPost()
const randomOrder = postsArray.map(
  (post) => postsArray[Math.floor(Math.random() * postsArray.length)]
)

// //////////////// Funcion para abrir los post en la pagina de Post
export const openPost = (id) => {
  window.open(`posts.html?id=${id}`, '_blank')
}

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
    if (postTitle.value === '' || postContent.value === '') {
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
    const p = {}
    p.body = pc
    p.title = pt
    p.reactions = 0
    p.tags = 'mytag'
    p.userId = 0

    secondaryCardGen(p, 'time', user)
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

/// ///////////Generador de cards///////////////////
const cardColumn = document.getElementById('cardColumn')
const cover = 'https://picsum.photos/600/400'
const date = '10/02/2024'
const user = {
  name: 'Jorge Drikha',
  avatar: 'https://randomuser.me/api/portraits/men/60.jpg',
  comment: Math.floor(Math.random() * 50) + 1
}

export const mainCardGen = (obj, picture, time, user) => {
  const post = obj
  const { body, reactions, tags, title, id } = post

  const mainC = document.createElement('div')
  const anchor = document.createElement('a')
  const image = document.createElement('img')
  const infoUser = document.createElement('div')
  const profilePic = document.createElement('img')
  const userNameText = document.createElement('h5')
  const infoContainer = document.createElement('div')
  const info = document.createElement('div')
  const infoTitle = document.createElement('h2')
  const infoText = document.createElement('p')
  const hashTagsContainer = document.createElement('div')
  const hashTag = document.createElement('p')
  const reactionContainer = document.createElement('div')
  const reaction = document.createElement('div')
  const commentsC = document.createElement('p')
  const date = document.createElement('p')
  const contDate = document.createElement('div')

  // reacciones//
  reactionContainer.classList.add('d-flex', 'flex-row', 'p-2')
  reaction.classList.add('mx-2', 'fs-6')
  reaction.innerText = `🤔❤️👍😒Reactions ${reactions}`
  commentsC.classList.add('mx-2', 'f-6', 'text-decoration-none')
  commentsC.innerText = `🗨️ Comments ${user.comment}`
  reactionContainer.append(reactions, commentsC)

  // hashtags//
  hashTagsContainer.classList.add('pl-5')
  hashTag.classList.add('badge', 'text-bg-light', 'text-decoration-none')
  hashTag.innerHTML = tags
  hashTagsContainer.append(hashTag)

  // card info//
  infoText.classList.add('card-text')
  infoTitle.classList.add('card-title', 'fw-bold')
  infoTitle.innerHTML = title
  infoText.innerHTML = body
  info.append(infoTitle, infoText)

  // info container//
  infoContainer.classList.add('p-4')
  infoContainer.setAttribute('id', 'openPost')
  infoContainer.append(info, hashTag, reactionContainer)

  // icon profile//
  userNameText.classList.add('card-text', 'p-2')
  profilePic.classList.add('card-img-top', 'rounded-circle')
  profilePic.classList.add('w-3')
  profilePic.setAttribute('src', `${user.avatar}`)
  profilePic.setAttribute('style', 'width: 85px;')
  infoUser.classList.add('post-Creator', 'card-body', 'd-flex', 'flex-row')
  contDate.classList.add('d-flex', 'flex-column', 'ps-2')
  userNameText.innerHTML = `${user.name}`
  date.innerText = time
  contDate.append(userNameText, date)
  infoUser.append(profilePic, contDate)

  // top image//
  image.classList.add('card-img-top')
  image.setAttribute('src', `${picture}`)

  anchor.classList.add('postlink')
  anchor.append(image)

  // full card//
  mainC.classList.add('card', 'm-1')
  mainC.append(anchor, infoUser, infoContainer)
  mainC.setAttribute('id', `${id}`)
  mainC.setAttribute('name', 'cardContainer')
  cardColumn.append(mainC)

  return id
}

// Generador de Card secundaria
export const secondaryCardGen = (obj, time, user) => {
  const post = obj
  const { body, reactions, tags, title, id } = post

  const mainC = document.createElement('div')
  const anchor = document.createElement('a')
  const infoUser = document.createElement('div')
  const profilePic = document.createElement('img')
  const userNameText = document.createElement('h5')
  const infoContainer = document.createElement('div')
  const info = document.createElement('div')
  const infoTitle = document.createElement('h2')
  const infoText = document.createElement('p')
  const hashTagsContainer = document.createElement('div')
  const hashTag = document.createElement('p')
  const reactionContainer = document.createElement('div')
  const reaction = document.createElement('div')
  const commentsC = document.createElement('p')
  const date = document.createElement('p')
  const contDate = document.createElement('div')
  const buttonEdit = document.createElement('a')
  const buttonEliminate = document.createElement('a')
  //p is a temporary array
  const eliminatePost = ()=>{
    let id = post.indexC
    let p = []
    for(let i in posts){
      if(i != id)
        p.push(posts[i])
    }
    posts = p
    localStorage.setItem('posts', JSON.stringify(posts))
    mainC.remove()
   }

   const editPost = () =>{
    console.log("ola2")
   }
  // reacciones//
  reactionContainer.classList.add('d-flex', 'flex-row', 'p-2')
  reaction.classList.add('mx-2', 'fs-6')
  reaction.innerText = `🤔❤️👍😒Reactions ${reactions}`
  commentsC.classList.add('mx-2', 'f-6', 'text-decoration-none')
  commentsC.innerText = `🗨️ Comments ${user.comment}`
  buttonEdit.classList.add('mx-2', 'f-6',)
  buttonEdit.innerText = ("Editar")
  buttonEdit.id =("buttonEdit")
  buttonEliminate.classList.add('mx-2', 'f-6')
  buttonEliminate.innerText = ("Eliminar")
  buttonEliminate.id=("buttonEliminate")
  buttonEdit.addEventListener('click', (event) =>{
      event.preventDefault()
      editPost()
  }) 
  buttonEliminate.addEventListener ('click', (e) =>{
    e.preventDefault()
    eliminatePost()
  })
  reactionContainer.append(reaction, commentsC,buttonEdit, buttonEliminate)


  // hashtags//
  hashTagsContainer.classList.add('pl-5')
  hashTag.classList.add('badge', 'text-bg-light', 'text-decoration-none')
  hashTag.innerHTML = tags
  hashTagsContainer.append(hashTag)

  // card info//
  infoText.classList.add('card-text')
  infoTitle.classList.add('card-title', 'fw-bold')
  infoTitle.innerHTML = title
  infoText.innerHTML = body
  info.append(infoTitle, infoText)

  // info container//
  infoContainer.classList.add('p-4')
  infoContainer.setAttribute('id', 'openPost')
  infoContainer.append(info, hashTag, reactionContainer)
  
  // icon profile//
  userNameText.classList.add('card-text', 'p-2')
  profilePic.classList.add('card-img-top', 'rounded-circle')
  profilePic.classList.add('w-3')
  profilePic.setAttribute('src', `${user.avatar}`)
  profilePic.setAttribute('style', 'width: 85px;')
  infoUser.classList.add('post-Creator', 'card-body', 'd-flex', 'flex-row')
  contDate.classList.add('d-flex', 'flex-column', 'ps-2')

  userNameText.innerHTML = user.name
  date.innerText = time
  contDate.append(userNameText, date)
  infoUser.append(profilePic, contDate)
  
  // full card//
  mainC.classList.add('card', 'm-1')
  mainC.append(anchor, infoUser, infoContainer)
  mainC.setAttribute('id', `${id}`)
  mainC.setAttribute('name', 'cardContainer2')
  cardColumn.append(mainC)

  return console.log(id)
}

const postFirstShow = () => {
  randomOrder.forEach((item) => {
    secondaryCardGen(item, date, user)
  })
}

mainCardGen(postsArray[0], cover, date, user)
postFirstShow()

document.addEventListener('DOMContentLoaded', () => {
  const mainC = document.getElementById('mainC')
  const id = mainC.id
  mainC.addEventListener('click', () => {
    openPost(id)
  })
})
