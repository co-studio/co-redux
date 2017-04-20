import React, { PropTypes } from 'react'

const ContainerRows = ({ className, children }) => {
  return (
    <div className={`ContainerRows ${className}`}>
      {children}
    </div>
  )
}

ContainerRows.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ContainerRows
