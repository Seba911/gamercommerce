import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import { Link } from "react-router-dom"

const Home = () =>{

    const links = [
      {name:"Motherboards", url:"/category/motherboards"},
      {name:"Placas de Video", url:"/category/placas_video"}
    ]

    return(
        <>
        <div className='container my-4'>
              <section className='main-container'>
                <h1 style={{color:"white"}}>Home</h1>
                <ul>
                  {links.map( (link, i) =>{
                    return (
                      <li key={i}>
                        <Link to={link.url}>{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
{/*                 <ItemDetailContainer /> */}
                <ItemListContainer section="Productos en oferta" />
              </section>
            </div>
        </>
    )
}
export default Home