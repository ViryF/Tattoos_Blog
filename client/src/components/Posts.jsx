import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

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
      {
        posts?.map((post) =>(
          <div className="post-card"  key={post.id}>
            <img style={{display : 'block'}} src={post.url} alt={post.description} />
            <h3>{post.nickname}</h3>
            </div>
        ))}
    </div>
  )
}

export default Posts