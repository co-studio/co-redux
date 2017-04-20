import React, { PropTypes } from 'react'

const ContainerPage = ({ className, children }) => {
  return (
    <section className={`ContainerPage ${className}`}>
      {children}
    </section>
  )
}

ContainerPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ContainerPage
