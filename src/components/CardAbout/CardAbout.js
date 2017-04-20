import React, { Component, PropTypes } from 'react'

class CardAbout extends Component {
  static propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    subheader: PropTypes.string,
    destination: PropTypes.string,
  }

  render () {
    const { image, header, subheader, description } = this.props
    return (
      <div className="CardAbout-container">
        <img className="CardAbout-image"
          src={image}
          alt={header} />

        <div className="CardAbout-caption">
          <h3 className="CardAbout-header">
            {header}
          </h3>

          <h4 className="CardAbout-subheader">
            {subheader}
          </h4>

          <p className="CardAbout-description">
            {description}
          </p>
        </div>
      </div>
    )
  }
}

export default CardAbout
