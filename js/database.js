export const getPosts = async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=40')
    .then((res) => res.json())
    .catch((err) => {
      const error = err;
      const msg = "Ha ocurrido un error, intenta mas tarde"
      return msg
    })
  return res
}
