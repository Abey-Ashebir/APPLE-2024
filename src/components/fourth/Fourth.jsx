import { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes
// import Youtube from "../Youtube/youtube";
import Youtube from "../Youtube/youtube";

class Fourth extends Component {
  state = {};

  render() {
    return (
      <section>
      <section className="fourth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={this.props.myImages1} alt="Watch Series 5 Logo" />
            </div>
          </div>
          <div className="description-wraper">{this.props.descriptionOne}</div>
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
              <img src={this.props.myImages2} alt="Apple Card" />
            </div>
          </div>
          <div className="description-wraper">{this.props.descriptionTwo}</div>
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
      <div><Youtube/></div>
      </section>

    );

  }
}

// Add prop types validation
Fourth.propTypes = {
  myImages1: PropTypes.string.isRequired, // myImages1 must be a string and is required
  myImages2: PropTypes.string.isRequired, // myImages2 must be a string and is required
  descriptionOne: PropTypes.string.isRequired, // DescriptionOne must be a string and is required
  descriptionTwo: PropTypes.string.isRequired,
};

export default Fourth;
