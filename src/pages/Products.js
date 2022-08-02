import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Products = () =>{
    return(
        <div className='container my-4'>
              <section className='main-container'>
                <h3 style={{color:"white"}}>Sección de Productos</h3>
                <ItemListContainer section="Productos"/>
              </section>
        </div>
    )
}
export default Products