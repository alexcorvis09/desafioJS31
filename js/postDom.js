import { allPost } from './database.js'



/// ///////////Generador de cards///////////////////
const cardColumn = document.getElementById('cardColumn')
const cover = 'https://picsum.photos/600/400'
const date = new Date().getDate()

export const mainCardGen = (obj, picture, time) => {
  const post = obj
  const { body, rate, tags, title, id } = post

  const mainC = document.createElement('div')
  const anchor = document.createElement('a')
  const image = document.createElement('img')
  const infoUser = document.createElement('div')
  // const profilePic = document.createElement('img')
  // const userNameText = document.createElement('h5')
  const infoContainer = document.createElement('div')
  const info = document.createElement('div')
  const infoTitle = document.createElement('h2')
  const infoText = document.createElement('p')
  const hashTagsContainer = document.createElement('div')
  const hashTag = document.createElement('p')
  const reactionContainer = document.createElement('div')
  const reactions = document.createElement('div')
  // const commentsC = document.createElement('p')
  const date = document.createElement('p')
  const contDate = document.createElement('div')

  // reacciones//
  reactionContainer.classList.add('d-flex', 'flex-row', 'p-2')
  reactions.classList.add('mx-2', 'fs-6')
  reactions.innerText = `🤔❤️👍😒Reactions ${rate}`
  // commentsC.classList.add('mx-2', 'f-6', 'text-decoration-none')
  // comments.length == 0 || comments.length == undefined
  //   ? (commentsC.innerText = '🗨️ Add Comment')
  //   : (commentsC.innerText = `🗨️ Comments ${comments.length}`)
  reactionContainer.append(reactions /*, commentsC */)

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
  // userNameText.classList.add('card-text', 'p-2')
  // profilePic.classList.add('card-img-top', 'rounded-circle')
  // profilePic.classList.add('w-3')
  // profilePic.setAttribute('src', `${picture}`)
  // profilePic.setAttribute('style', 'width: 85px;')
  // infoUser.classList.add('post-Creator', 'card-body', 'd-flex', 'flex-row')
  contDate.classList.add('d-flex', 'flex-column', 'ps-2')
  // userNameText.innerHTML = userId
  date.innerText = time
  contDate.append(/* userNameText, */date)
  infoUser.append(/* profilePic, */ contDate)

  // top image//
  image.classList.add('card-img-top')
  image.setAttribute('src', `${picture}`)

  anchor.classList.add('postlink')
  anchor.append(image)

  // full card//
  mainC.classList.add('card', 'm-1')
  mainC.append(anchor, infoUser, infoContainer)
  mainC.setAttribute('id', `${id}`)
  cardColumn.append(mainC)
  // openPost(mainC)
}

export const secondaryCardGen = (obj, time) => {
  const post = obj
  const { body, rate, tags, title, id } = post

  const mainC = document.createElement('div')
  const anchor = document.createElement('a')
  const image = document.createElement('img')
  const infoUser = document.createElement('div')
  // const profilePic = document.createElement('img')
  // const userNameText = document.createElement('h5')
  const infoContainer = document.createElement('div')
  const info = document.createElement('div')
  const infoTitle = document.createElement('h2')
  const infoText = document.createElement('p')
  const hashTagsContainer = document.createElement('div')
  const hashTag = document.createElement('p')
  const reactionContainer = document.createElement('div')
  const reactions = document.createElement('div')
  // const commentsC = document.createElement('p')
  const date = document.createElement('p')
  const contDate = document.createElement('div')

  // reacciones//
  reactionContainer.classList.add('d-flex', 'flex-row', 'p-2')
  reactions.classList.add('mx-2', 'fs-6')
  reactions.innerText = `🤔❤️👍😒Reactions ${rate}`
  // commentsC.classList.add('mx-2', 'f-6', 'text-decoration-none')
  // comments.length == 0 || comments.length == undefined
  //   ? (commentsC.innerText = '🗨️ Add Comment')
  //   : (commentsC.innerText = `🗨️ Comments ${comments.length}`)
  reactionContainer.append(reactions /*, commentsC */)

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
  // userNameText.classList.add('card-text', 'p-2')
  // profilePic.classList.add('card-img-top', 'rounded-circle')
  // profilePic.classList.add('w-3')
  // profilePic.setAttribute('src', `${picture}`)
  // profilePic.setAttribute('style', 'width: 85px;')
  // infoUser.classList.add('post-Creator', 'card-body', 'd-flex', 'flex-row')
  // contDate.classList.add('d-flex', 'flex-column', 'ps-2')
  // userNameText.innerHTML = userId
  // date.innerText = date
  // contDate.append(/* userNameText, */date)
  // infoUser.append(/* profilePic, */ contDate)

  // full card//
  mainC.classList.add('card', 'm-1')
  mainC.append(anchor, infoUser, infoContainer)
  mainC.setAttribute('id', `${id}`)
  cardColumn.append(mainC)
  // openPost(mainC)
}

/* La siguiente funcion muestra una card,
recibe como parametro un post del array de
todos los posts */
const postLSdb = await allPost()
const post1 = postLSdb[1]
const post2 = postLSdb[5]

mainCardGen(post1, cover, date)
secondaryCardGen(post2, cover, date)


