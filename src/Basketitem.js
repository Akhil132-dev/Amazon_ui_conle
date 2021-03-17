import React from 'react'
import './Basketitem.css'
function Basketitem({ id, title, image, price, rating }) {
    return (
        <div className="bitem">
            <div className="bitem-img">
                <img src={image} alt="" className="bimg" />
            </div>
            <div className="biteminfo">
                <p className="title">{title}</p>
                <p className="title">${price}</p>

                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button className="btn">Remove from Basket</button>
            </div>




        </div>
    )
}

export default Basketitem
