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

  useEffect(() => {
    const getCategories = async () => {
      const category = await axios.get(`${BASE_URL}/categories`)
      setCategories(category.data)
      console.log(category.data)
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
          <Route path="/categories" element={ <Categories categories={categories}/> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
