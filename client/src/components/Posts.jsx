import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 

const BASE_URL = 'http://localhost:3001'

const Posts = () => {

  const [posts, setPosts] = useState([])

  let { id } = useParams()

  useEffect(() => {
  const getCategoryById = async () => {
    let posts = await axios.get(`${BASE_URL}/categories/${id}/posts`)
    setPosts(posts.data)
    console.log(posts.data)
  }
    getCategoryById()
  }, [])

  return (
    <div className="category-grid">
      <Link to={`/categories/${id}/form`} > <button>Add Post</button> </Link>
      {
        posts?.map((post) =>(
          <div className="post-card"  key={post.id}>
            <h2>{post.nickname}</h2>
            <h3>{post.description}</h3>
            <img style={{display : 'block'}} src={post.url} alt='' />
            </div>
        ))}
    </div>
  )
}

export default Posts