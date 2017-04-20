import React, { PropTypes } from 'react'

const TextStyle = ({ className, children, weight }) => {
  return (
    <span className={className}
      style={{ fontWeight: `${weight}` }}>
      {children}
    </span>
  )
}

TextStyle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  weight: PropTypes.number,
}

export default TextStyle
