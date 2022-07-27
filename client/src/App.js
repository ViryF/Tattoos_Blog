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

  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const category = await axios.get(`${BASE_URL}/categories`)
      setCategories(category.data)
    }
    getCategories()
  }, [])


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
        </Routes>
      </main>
    </div>
  );
}

export default App;
