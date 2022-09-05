import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { Link } from "react-router-dom"


const Home = () => {


  return (
      <div className='container'>
        <section className="showcase">
          <header className="d-flex justify-content-center">
            <img style={{height: "35px", width: "53px", marginBottom:5, marginRight:5 }} src="../../assets/images/logo.png" alt="logogamercommerce"/>
            <h2 className="logo">GAMERCOMMERCE</h2>

          </header>
          <video className='videoTag' autoPlay loop muted>
            <source src="../assets/video/video_gamercommerce.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
          <div className="text">
            <h2>Armá la PC Gamer</h2>
            <h3>Que siempre quisiste</h3>
            <p className="" style={{fontWeight:"100"}}>Bienvenido a mi proyecto de ecommerce en base a productos gamers.

            Este proyecto fue hecho con fines de aprendizaje por lo que cada imagen o video utilizado no tiene propositos
            comerciales.</p>
              <div>
                <Link to="/productos" className='neonBtn'>
                Explorar
                </Link>
             {/*    <a href="#">Explorar</a> */}
              </div>
            <div className="mt-3">
                <ItemListContainer section="Productos destacados" />
              </div>
              
          </div>

        </section>
        {/* <section className='main-container'>
                <div className=""  >
                  <div className="" >
                    <video className='videoTag' autoPlay loop muted>
                      <source src="../assets/video/video_gamercommerce.mp4" type="video/mp4" />
                    </video>
                    <h1 style={{color:"white", fontWeight:"100", fontSize:"2em"}}>Arma la <strong>PC gamer</strong> que siempre quisiste</h1>
                    <p style={{color:"white"}}>Lorem Ipsum texto de relleno Ipsum texto de relleno Ipsum texto de relleno Ipsum texto de relleno Ipsum 
                      texto de relleno Ipsum texto de relleno </p>
                    <button>Explorar</button>
                  </div>
                  <div className="">
                    <ItemListContainer section="Productos destacados" />
                  </div>

                </div>
                
              </section> */}
      </div>

  )
}
export default Home