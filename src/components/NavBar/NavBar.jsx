import {useState} from 'react'
import './NavBar.scss'
import CardWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavBar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <nav className='m-0 row justify-content-between align-items-center pt-3' style={{background:"linear-gradient(0deg, rgba(27,34,77,1) 0%, rgba(174,2,204,0.2) 100%)", borderBottom:"1px solid #9d5bff"}}>
           
{/*             <div className='col-lg-4' >
                <input style={{border:"none", borderRadius:"4px", padding:"5px 10px"}} placeholder='Buscar...'/>
            </div> */}
            <ul className='d-flex justify-content-between align-items-center' style={{color:"white"}}>
                <Link to="/" className='logoPosition ' style={{textDecoration:"none"}}>
                    <img style={{height: "25px", width: "40px" }} src="../../assets/images/logo.png" alt="logogamercommerce"/>
                </Link>

                <Link to="/productos" className='p-0 m-0 mx-4' style={{color:"white", textDecoration:"none", lineHeight:2.3}}>Productos</Link>
    {/*                 <Link to="/category" className='p-0 m-0 mx-4' style={{color:"white", textDecoration:"none"}}>Categorias</Link> */}
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                        <DropdownToggle caret color="" className='text-white px-3 py-0' style={{lineHeight:2.2}} >
                            Categorias
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem><Link to="/category/motherboards">MotherBoard</Link></DropdownItem>
                            <DropdownItem><Link to="/category/placas_video">Placas de Video</Link></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                <Link to="/contacto" className='contactoStyles p-0 m-0 mx-4' style={{color:"white", textDecoration:"none", lineHeight:2.3}}>Contacto</Link>
                <CardWidget />
            </ul>

        </nav>
    )
}

export default NavBar