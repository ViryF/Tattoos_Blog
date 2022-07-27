import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const Form = (props) => {
  let navigate = useNavigate()

  const initialState = {
    nickname: '',
    description: '',
    url: '',
    category: ''
  }
  
  const [postValues, setPostValues] = useState(initialState)


  const handleChange = event => {
    setPostValues({...postValues, [event.target.id]: event.target.value })
  }

  let { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${BASE_URL}/categories/${id}`, postValues)
    setPostValues(initialState)
  }



  return (
    <div>
      <h1>Sign Up with us today!</h1>
      <h4>Please enter your info below...</h4>
      <form onSubmit={handleSubmit}>
      <label htmlFor='category'>Please choose the category for your post.</label>
        <select id='category' onChange={handleChange} >
          <option value="Languages">Languages</option>
          <option value="Mandala">Mandala</option>
          <option value="Tribal">Tribal</option>
          <option value="Botanical">Botanical</option>
          <option value="Animals">Animals</option>
          <option value="Realism">Realism</option>
        </select>

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
          cols="30" rows="10"></textarea>

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
      { posts.map((post) => (
        <div key={ post._id }>
          <h3>Nickname: { post.nickname }</h3>
          <h3>Category: { post.category }</h3>
          <p>Description: { post.description }</p>
          <p>URL: { post.url }</p>
          
        </div>
      ))}
      <div></div>
    </div>
  )
}
export default Form
