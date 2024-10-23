import { Component } from "react";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
// import Fourth from "./components/fourth/Fourth";
// import watch from "./images/icons/watch-series5-logo.png";
// import applecard from "./images/home/apple-card.jpg";
import tv from "../../images/icons/apple-tv-logo.png";
import ipadlogo from "../../images/icons/new-ipad-logo.png";
import servantlogo from "../../images/icons/servant-logo.png";
import mac from "../../images/home/mac-laptop.jpg";
import './Pages.css'
class Pages extends Component {
  render() {
    return (
      <div>
        <section className="main-highlight-wrapper">
          <div className="internal-wrapper">
            <div className="model">16-inch model</div>
            <div className="product-title">MacBook Pro</div>
            <div className="brief-description">The best for the brightest.</div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
            <div className="main-image-wrapper">
              <img src={mac} alt="MacBook Pro" />
            </div>
          </div>
        </section>

        <section className="second-hightlight-wrapper">
          <div className="internal-wrapper">
            <div className="title-wraper">iPhone 11 Pro</div>
            <div className="description-wrapper">
              Pro cameras. Pro display. Pro performance.
            </div>
            <div className="price-wrapper">
              From $24.95/mo. or $599 with trade‑in.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="third-highlight-wrapper">
          <div className="internal-wrapper">
            <div className="title-wraper">iPhone 11</div>
            <div className="description-wrapper">
              Just the right amount of everything.
            </div>
            <div className="price-wrapper">
              From $16.62/mo. or $399 with trade‑in.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="fifth-heghlight-wrapper">
          <div className="left-side-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={tv} alt="Apple TV Logo" />
              </div>
            </div>
            <div className="tvshow-logo-wraper">
              <img src={servantlogo} alt="Servant Logo" />
            </div>
            <div className="watch-more-wrapper">
              <a href="#">Watch the trailer</a>
            </div>
          </div>
          <div className="right-side-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">AirPods Pro</div>
            </div>
            <div className="description-wraper">
              Magic like you’ve never heard.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sixth-heghlight-wrapper">
          <div className="left-side-wrapper">
            <div className="model">16-inch model</div>
            <div className="product-title-small">MacBook Pro</div>
            <div className="description-wraper">
              The best for the brightest.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-side-wrapper">
            <div className="top-logo-wrapper">
              <div className="logo-wrapper">
                <img src={ipadlogo} alt="iPad Logo" />
              </div>
            </div>
            <div className="description-wraper">
              Like a computer. Unlike any computer.
            </div>
            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
            
          </div>
        </section>
      </div>

    );
  }
}

export default Pages;
