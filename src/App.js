import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Detail from './pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ background: "linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(60,60,60,1) 100%)" }}>
        <NavBar />
        <Routes>
          {/* Se llama 1 por cada ruta de la app */}
          <Route path="/" element={<Home />}/>
          <Route path="/contacto" element={<Contact />}/>
          <Route path="/productos" element={<Products />}/>
          {/* :id la libreria reconoce que es un dato dinamico */}
          <Route path="/:category/:id" element={<Detail />} />
        </Routes>
{/*         <div className='my-4'>
          <h1 style={{ color: "white" }}>Gamer Commerce</h1>
          <ItemDetailContainer />
          <ItemListContainer section="Productos en oferta" />
        </div> */}
        <footer className='p-4 bg-secondary'>
          <h6>Proyecto ecommerce gamer</h6>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
