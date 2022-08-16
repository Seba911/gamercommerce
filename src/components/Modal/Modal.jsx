import CloseIcon from '@mui/icons-material/Close'
const Modal = ({title, close, children}) =>{
    return(

        <div>
            <h3>{title}</h3>
            <CloseIcon onClick={ () => close(false)} />
            {children}
        </div>

    )
}

export default Modal