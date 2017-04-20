import React, { PropTypes } from 'react'

const ContainerSection = ({ className, children }) => {
  return (
    <section className={`ContainerSection ${className}`}>
      {children}
    </section>
  )
}

ContainerSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ContainerSection
