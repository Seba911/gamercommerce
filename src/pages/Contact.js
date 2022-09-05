import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () =>{
    return(
        <div className='container my-4 text-white d-flex justify-content-center align-items-center' style={{minHeight:"75vh"}}>
              <section className='main-container'>
                <h3>Contacto</h3>
                  <div>
                    <h5>Sebastián Nahuel Seminara</h5>
                    <h6>Diseñador Gráfico - Diseñador UX/UI - Desarrollador Front-End</h6>
                    <div className="">
                      <a href="https://www.linkedin.com/in/sebastianseminaradg/" className="mx-1 btn btn-primary" target="_blank" rel="noreferrer" ><LinkedInIcon /> LinkedIn</a>
                      <a href="https://www.behance.net/sebass10e461" className="mx-1 btn text-white" style={{backgroundColor:"rgb(104, 113, 255)"}} target="_blank" rel="noreferrer" > Behance</a>
                      <a href="https://github.com/Seba911" className="mx-1 btn text-white" style={{backgroundColor:"rgb(157, 91, 255)"}} target="_blank" rel="noreferrer" ><GitHubIcon /> Github</a>
                    </div>
                  </div>
              </section>  
        </div>
    )
}
export default Contact