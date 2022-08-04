import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom"
const Products = () =>{

    const {categoryId} = useParams()
    console.log(categoryId)
    


    return(
        <div className='container my-4'>
              <section className='main-container'>
                { !categoryId ? 
                  <h3 style={{color:"white"}}>Seccion de productos</h3> 
                  : 
                  <h3 style={{color:"white"}}>Categorias</h3>
                }
   {/*              <h3 style={{color:"white"}}>Sección de Productos</h3> */}
                <ItemListContainer section="Productos"/>
              </section>
        </div>
    )
}
export default Products