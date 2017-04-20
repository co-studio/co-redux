import React, { PropTypes, Component } from 'react'

class CardWide extends Component {
  static propTypes = {}

  render () {
    const { image, header, subheader, children } = this.props
    return (
      <div className="CardWide-container">
        <div>
          <img className="CardWide-image"
            src={image}
            alt={header} />

          <div className="CardWide-caption">
            <h3 className="CardWide-header">
              {header}
            </h3>

            <h4 className="CardWide-subheader">
              {subheader}
            </h4>
          </div>
        </div>

        <div className="CardWide-description">
          {children}
        </div>
      </div>
    )
  }
}

export default CardWide
