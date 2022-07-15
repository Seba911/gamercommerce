import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App" style={{ background: "linear-gradient(180deg, rgba(25,25,25,1) 0%, rgba(60,60,60,1) 100%)" }}>
      <NavBar />
      <div className='my-4'>
        <h1 style={{ color: "white" }}>Gamer Commerce</h1>
        <ItemListContainer section="Productos en oferta" />
      </div>
    </div>
  );
}

export default App;
