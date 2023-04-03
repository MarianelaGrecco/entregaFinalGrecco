import { Button } from "@mui/material";
import {  useParams } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../Contexts/CartContext";


 const ItemDetailContainer = ({productos}) => {
    const { addToCart } = useContext(CartContext);
    const {id} = useParams();
    const producto = productos.find((producto) => producto.id == id);
    const handleAddToCart = (producto) => {
        addToCart(producto);
    };
    return (
        <div className= "container">
            <h3>{producto.title}</h3>
            <img className= "image" src={producto.image} alt="imagen del producto" width={200}/>
            <p>{producto.description}</p>
            <p>$ {producto.price}</p>
            <p>Rating: {producto.rating.rate}</p>
            <Button variant="outlined" onClick={() => handleAddToCart(producto)}>Agregar al carrito</Button>
        </div>
    );
    }
    export default ItemDetailContainer;