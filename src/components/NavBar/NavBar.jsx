import './NavBar.scss'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
    return (
        <nav className='m-0 row justify-content-between align-items-center p-3' style={{backgroundColor:"#ae02cc"}}>
            <div className='d-flex col-lg-4 align-items-center'>
                <div style={{ backgroundColor: "white", height: "25px", width: "25px", borderRadius:"114px" }}></div>
                <p className='m-0 p-0' style={{color:"white", fontWeight:"700", textAlign:"left"}}>Logo</p>
            </div>
            <div className='col-lg-4' >
                <input style={{border:"none", borderRadius:"4px", padding:"5px 10px"}} placeholder='Buscar...'/>
            </div>
            <ul className='col-lg-4 m-0 p-0 d-flex justify-content-end' style={{color:"white"}}>
                <CardWidget />
                <p className='p-0 m-0 mx-4' >Ingresar</p>
                <p className='p-0 m-0 mx-4' >Favoritos</p>
            </ul>

        </nav>
    )
}

export default NavBar