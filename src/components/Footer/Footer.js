import React, { Component, PropTypes } from 'react';

import iconTwitter from '../../assets/icons/icon-twitter.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg';

class Footer extends Component {
  static propTypes = {
    twitterUrl: PropTypes.string,
    facebookUrl: PropTypes.string,
  }

  renderSMIcon = ({ href, image }) => {
    return (
      <a href={href}
        className="footer-icon-link"
        target="_blank"
        key={href}>
        <img className="footer-icon"
          src={image}
          alt={href} />
      </a>
    )
  }

  render() {
    const { twitterUrl, facebookUrl } = this.props

    const icons = [
      { image: iconTwitter, href: twitterUrl },
      { image: iconFacebook, href: facebookUrl }
    ]
    .filter(iconObj => iconObj.href !== undefined)

    return(
      <footer className="footer-container">
        <div className="footer-links">
          <div className="footer-left">
            © We Walk Together
            <br />
            <a className="footer-credits"
              href="https://costudio.io"
              target="_blank">
              Website by Co Studio
            </a>
          </div>

          <div className="footer-right">
            <div className="footer-icons">
              {icons.map(this.renderSMIcon)}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
