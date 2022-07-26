import { useParams } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'



const EditPost = (props) => {

  let { catId, postId, index } = useParams()

  let navigate = useNavigate()

  const initialState = {
    nickname: props.posts[index].nickname,
    description: props.posts[index].description,
    url: props.posts[index].url,
    category: catId
  }
  
  const [formState, setFormState] = useState(initialState)

  const handleChange = event => {
    setFormState({...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`/categories/${catId}/posts/${postId}`, formState)
    setFormState(initialState)
    navigate(`/categories/${catId}/posts`)
  }



  return (
    <div id="editPost">
      <h1>Edit your own post now! {props.posts[index].nickname}</h1>
      <h4>Please enter your info below...</h4>
      <form onSubmit={handleSubmit}>

        <label htmlFor='nickname'>Nickname:</label>
        <input
          id='nickname'
          type="text"
          placeholder="Choose Your Nickname"
          value={formState.nickname}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id='description'
          placeholder="Enter a comment about your post"
          cols="30" rows="10"           
          value={formState.description}
          onChange={handleChange}
          ></textarea>

        <label htmlFor='url'>Image Link</label>
        <input
          id='url'
          type="text"
          placeholder="enter your image's URL here"
          value={formState.url}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <h1>Update Post to:</h1>
        <div>
          <h3>Nickname: { formState.nickname }</h3>
          <p>Description: { formState.description }</p>
          <image src={formState.url} alt='user image' />
          
        </div>
      <div></div>
    </div>
  )
}
export default EditPost
