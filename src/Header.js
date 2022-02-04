import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img src="photo/logo2.png" alt="logo pictures" className="header_logo" />
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
                {/* logo */}
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header_optionLineTwo">
                            {user ? 'Sign out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <div className="header_option">
                     <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                     <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket />
                        <span className='header_optionLineTwo header_basketCount'>{ basket?.length }</span>
                    </div>
                </Link>
                
                <Link>
                    <div className="header_option">
                     <span className="header_optionLineOne">
                        Food
                    </span>
                    <span className="header_optionLineTwo">
                        Order
                    </span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
