import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"

const Home = () =>{
    return(
        <>
        <div className='container my-4'>
              <section className='main-container'>
                <h1 style={{color:"white"}}>Home</h1>
{/*                 <ItemDetailContainer /> */}
                <ItemListContainer section="Productos en oferta" />
              </section>
            </div>
        </>
    )
}
export default Home