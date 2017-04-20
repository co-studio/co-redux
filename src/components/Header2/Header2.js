import React, { PropTypes } from 'react'

const Header2 = ({ className, children }) => {
  return (
    <h2 className={`Header2 ${className}`}>
      {children}
    </h2>
  )
}

Header2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Header2
