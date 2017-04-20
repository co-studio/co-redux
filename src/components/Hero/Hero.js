import React, { Component, PropTypes } from 'react'

class Hero extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children, image, className } = this.props

    return (
      <section className={`Hero ${className}`}
        style={{ backgroundImage: `url(${image})` }}>
        {children}
      </section>
    )
  }
}

export default Hero
