import './App.css';
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Detail from './pages/Detail'
import CheckOut from './pages/Checkout';
import CartProvider from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App" style={{ background: "#030434" }}>
          <NavBar />
          <Routes>
            {/* Se llama 1 por cada ruta de la app */}
            <Route path="/" element={<Home />}/>
            <Route path="/contacto" element={<Contact />}/>
            <Route path="/productos" element={<Products />}/>
            {/* :id la libreria reconoce que es un dato dinamico */}
            <Route path="/productos/:id" element={<Detail />} />
            <Route path="/category/:categoryId" element={<Products />}/>
            <Route path="/cart" element={<CheckOut />} />
          </Routes>
  {/*         <div className='my-4'>
            <h1 style={{ color: "white" }}>Gamer Commerce</h1>
            <ItemDetailContainer />
            <ItemListContainer section="Productos en oferta" />
          </div> */}
          <footer className='p-4 bg-dark' style={{zIndex:"2"}}>
            <h6 className='text-white'>Proyecto ecommerce gamer</h6>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
