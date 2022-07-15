import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidget = () => {
    return (
        <div className='mx-1 d-flex'>
            <ShoppingCartIcon />
            {/* Cantidad productos carrito */}
            <div style={{backgroundColor:"red", width:15, borderRadius:25, height:16, margin:"-5px -10px"}} >
                <p className='' style={{fontSize:".7em", margin:"-1px 5px 0px 3px"}}>1</p>
            </div>
        </div >
    )
}
export default CardWidget