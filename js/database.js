export const getPosts = async () => {
  const res = await fetch('https://dummyjson.com/posts?limit=40')
    .then((res) => res.json())
  return res
}
