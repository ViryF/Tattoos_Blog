// import { useParams } from "react-router-dom"; 
import Form from './components/Form';
import Posts from './components/Posts';
import Categories from './components/Categories'
import Nav from './components/Nav'
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import './styles/App.css';

const BASE_URL = 'http://localhost:3001'

function App() {

  // const initialState = {
  //   nickname: '',
  //   description: '',
  //   url: '',
  //   category: ''
  // }
  
  // const [postValues, setPostValues] = useState(initialState)
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([])


  useEffect(() => {
    const getCategories = async () => {
      const category = await axios.get(`${BASE_URL}/categories`)
      setCategories(category.data)
    }
    getCategories()
  }, [])

  

  // const handleChange = event => {
  //   setPostValues({...postValues, [event.target.id]: event.target.value })
  // }

  // let { id } = useParams()

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   let res = await axios.post(`${BASE_URL}/categories/${id}`, postValues)
  //   setPostValues(initialState)
  // }


  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/categories" element={ <Categories categories={categories} /> } />
          <Route path="/categories/:id/posts" element={ <Posts posts={posts} /> } />
          <Route path="/categories/:id/form" element={ <Form /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

{/* <Route path="/categories/:id/form" element={ <Form  /> } /> */}
