import React from 'react'
import './CheakoutProduct.css'
import { useStateValue } from "./Stateprovider";
function CheakoutProduct({ id, title, image, price, rating }) {
    // console.log(id, title, image, price, rating)
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFrombasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id

        });
    }
    return (
        < div className="CheakoutProduct" >

            <img className="CheakoutProduct__img " src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="cheakoutProduct__title">{title}</p>
                <p className="cheakoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cheakoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={RemoveFrombasket} >Remove to Basket</button>
            </div>
        </div >
    )
}

export default CheakoutProduct
