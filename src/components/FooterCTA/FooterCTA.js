import React, { PropTypes } from 'react'

const FooterCTA = ({className, children, image}) => {
  return (
    <section className={`FooterCTA ${className}`}
      style={{ backgroundImage: `url(${image})` }}>
      {children}
    </section>
  )
}

FooterCTA.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
}

export default FooterCTA
