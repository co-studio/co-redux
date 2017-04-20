import React, { PropTypes } from 'react'

const Header3 = ({ className, children }) => {
  return (
    <h3 className={`Header3 ${className}`}>
      {children}
    </h3>
  )
}

Header3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Header3
