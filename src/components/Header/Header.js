import React, { PropTypes } from 'react'

const Header = ({ className, children }) => {
  return (
    <h1 className={`Header ${className}`}>
      {children}
    </h1>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Header
