import {useState} from 'react'
import './NavBar.scss'
import CardWidget from '../CardWidget/CardWidget'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <nav className='m-0 row justify-content-between align-items-center p-3' style={{backgroundColor:"#ae02cc"}}>
            <Link to="/" className='d-flex col-lg-4 align-items-center' style={{textDecoration:"none"}}>
                <div style={{ backgroundColor: "white", height: "25px", width: "25px", borderRadius:"114px" }}></div>
                <p className='m-0 p-0' style={{color:"white", fontWeight:"700", textAlign:"left", }}>Logo</p>
            </Link>
{/*             <div className='col-lg-4' >
                <input style={{border:"none", borderRadius:"4px", padding:"5px 10px"}} placeholder='Buscar...'/>
            </div> */}
            <ul className='col-lg-4 m-0 p-0 d-flex justify-content-end' style={{color:"white"}}>
                <CardWidget />
                <Link to="/productos" className='p-0 m-0 mx-4' style={{color:"white", textDecoration:"none"}}>Productos</Link>
{/*                 <Link to="/category" className='p-0 m-0 mx-4' style={{color:"white", textDecoration:"none"}}>Categorias</Link> */}
                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                    <DropdownToggle caret color="none" className='px-3 py-0'>
                        Categorias
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><Link to="/category/motherboards">MotherBoard</Link></DropdownItem>
                        <DropdownItem><Link to="/category/placas_video">Placas de Video</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Link to="/contacto" className='p-0 m-0 mx-4' style={{color:"white", textDecoration:"none"}}>Contacto</Link>
            </ul>

        </nav>
    )
}

export default NavBar