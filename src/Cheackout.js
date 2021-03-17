import React from "react";
import Basketitem from "./Basketitem";
import "./Cheackout.css";
import Subtotal from "./Subtotal";
function Cheackout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    <Basketitem
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"


                    />

                    <Basketitem
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"

                    /> <Basketitem
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"

                    />
                    {/* baskeItem */}
                    {/* baskeItem */}
                    {/* baskeItem */}
                </div>{" "}
            </div>

            <div className="check__right">
                <Subtotal />


            </div>
        </div>
    );
}

export default Cheackout;
