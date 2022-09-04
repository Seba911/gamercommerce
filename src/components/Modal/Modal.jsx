import './Modal.scss'
import CloseIcon from '@mui/icons-material/Close'

const Modal = ({title, close, children}) =>{
    return(

        <div className="modal-custom bg-dark text-white">
            <CloseIcon onClick={ () => close(false)} />
            <h3>{title}</h3>
            {children}
        </div>

    )
}

export default Modal