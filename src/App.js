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
            <div className='d-flex mb-2 justify-content-center align-items-center'>
                <img style={{height: "20px", width: "30px" }} src="../../assets/images/logo.png" alt="logogamercommerce"/>
                <h2 className="logo" style={{fontSize:"1.2em", marginTop:5, marginLeft:5}}>GAMERCOMMERCE</h2>
            </div>
            <span className='text-white' style={{fontSize:".8em"}}>Proyecto Ecommerce realizado en curso de ReactJS-Coderhouse</span>
          </footer>
        </div>
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
