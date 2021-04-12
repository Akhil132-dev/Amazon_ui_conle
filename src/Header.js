import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

import { useStateValue } from "./Stateprovider";

function Header() {

    const [{ basket }, dispatch] = useStateValue();
    console.log(useStateValue());
    console.log(basket?.length);
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="Header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__search__input" />
                <SearchIcon className="header__search__icon" />
            </div>
            <div className="header__nav">

                <div className="header__opation">
                    <span className="header__option__line_1">Hello Guest</span>
                    <Link to='/login'><span className="header__option__line_2">SIgn In</span></Link>
                </div>
                <div className="header__opation">
                    <span className="header__option__line_1">Retruns</span>
                    <span className="header__option__line_2">Orders</span>
                </div>
                <div className="header__opation">
                    <span className="header__option__line_1">Your</span>
                    <span className="header__option__line_2">Prime</span>
                </div>

                <Link to="/checkout">
                    {" "}
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="baskeet" />{" "}
                        <span className="header__option__line_2 header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
