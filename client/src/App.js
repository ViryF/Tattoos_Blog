import Nav from './components/Nav'
import Home from './components/Home';
import { Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1>Hello World!</h1>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={ <Home /> } /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
