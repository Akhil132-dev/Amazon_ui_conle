import React from "react";
import "./Cheackout.css";
import CheakoutProduct from "./CheakoutProduct";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";

function Cheackout() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    console.log("lover" + basket?.length);
    return (
        <div className="checkout">
            <div className="cheakout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    className="checkout_ad"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2 className="cheakout__title" >Your Shooping basket is empty</h2>
                        <p className="cheakout__title">
                            You have no items in your basket .To buy one or"Add to basket" next
                            to them item
          </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="cheakout__title">Your Shopping Basket</h2>
                        {/* list out all of the cheakout products */}
                        {basket?.map((item) => (
                            <CheakoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                )}
            </div>


            {basket.length > 0 && (
                <div className="checkout__rigth">
                    <Subtotal />
                </div>
            )
            }

        </div>
    );
}

export default Cheackout;
