import { useParams } from "react-router-dom"; 
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const Form = (props) => {

  let { id } = useParams()

  let navigate = useNavigate()
  // navigate(`categories/${id}/posts`)

  const initialState = {
    nickname: '',
    description: '',
    url: '',
    category: id
  }
  
  const [postValues, setPostValues] = useState(initialState)

  const handleChange = event => {
    setPostValues({...postValues, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${BASE_URL}/categories`, postValues)
    navigate(`/categories/${id}/posts`)
  }



  return (
    <div>
      <h1>Sign Up with us today!</h1>
      <h4>Please enter your info below...</h4>
      <form onSubmit={handleSubmit}>

        <label htmlFor='nickname'>Nickname:</label>
        <input
          id='nickname'
          type="text"
          placeholder="Choose Your Nickname"
          value={postValues.nickname}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id='description'
          placeholder="Enter a comment about your post"
          cols="30" rows="10"           
          value={postValues.description}
          onChange={handleChange}
          ></textarea>

        <label htmlFor='url'>Image Link</label>
        <input
          id='url'
          type="text"
          placeholder="enter your image's URL here"
          value={postValues.url}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
      <h1>Post:</h1>
        <div>
          <h3>Nickname: { postValues.nickname }</h3>
          <p>Description: { postValues.description }</p>
          <image src={postValues.url} alt='user image' />
          
        </div>
      <div></div>
    </div>
  )
}
export default Form
