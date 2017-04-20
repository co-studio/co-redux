import React, { PropTypes } from 'react'

const Paragraph = ({ className, children }) => {
  return (
    <p className={`Paragraph ${className}`}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Paragraph
