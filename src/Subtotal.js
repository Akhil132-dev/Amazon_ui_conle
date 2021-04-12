import React, { useEffect } from 'react'
import { useStateValue } from './Stateprovider';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './Reducer';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    console.log(`baske `)
    console.log(basket)


    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>

                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift</small>
            <button >Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal
