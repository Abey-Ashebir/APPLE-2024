import logo from "../../images/icons/logo.png";
import search from "../../images/icons/search-icon.png";
import cart from "../../images/icons/cart.png";
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link">
                <Link to="/">
                  <img src={logo}></img>
                </Link>
              </li>
              <li>
                <Link to="/mac/">Mac</Link>
              </li>
              <li>
                <Link to="/Iphone/">iPhone</Link>
             </li>

              <li>
                <Link to="/Ipad/">ipad</Link>
              </li>
              <li>
                <Link to="/Watch/">watch</Link>
              </li>
              <li>
                <Link to="#">tv</Link>
              </li>
              <li>
                <Link to="/Music/">Music</Link>
              </li>
              <li>
                <Link to="#">Support</Link>
              </li>
              <li className="search-link">
                <Link to="/search/">
                  <img src={search}></img>
                </Link>
              </li>
              <li className="cart-link">
                <Link to="/cart/">
                  <img src={cart}></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
