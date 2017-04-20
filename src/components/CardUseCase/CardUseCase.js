import React, { Component, PropTypes } from 'react'

import checkmarkInactive from '../../assets/icons/icon-checkmark-inactive.svg'

class CardUseCase extends Component {
  static propTypes = {
    image: PropTypes.string,
    listItems: PropTypes.array,
    header: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.renderListItem = this.renderListItem.bind(this)
  }

  renderListItem(text, index) {
    return (
      <li className="CardUseCase-list-item"
        key={index}>
        <img src={checkmarkInactive}
          className="CardUseCase-list-item-icon"
          role="presentation" />
        <p className="CardUseCase-list-item-text">
          {text}
        </p>
      </li>
    )
  }

  render () {
    const { image, listItems, header } = this.props
    return (
      <div className="CardUseCase">
        <img src={image}
          className="CardUseCase-illustration"
          alt={header} />

        <h3 className="CardUseCase-header">
          {header}
        </h3>

        <ul className="CardUseCase-list">
          {listItems.length > 0 && listItems.map(this.renderListItem)}
        </ul>
      </div>
    )
  }
}

export default CardUseCase
