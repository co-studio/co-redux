import React, { PropTypes } from 'react'

const Divider = ({ text }) => {
  return (
    <div className="Divider">
      <span className="Divider-text">
        {text}
      </span>
      <hr className="Divider-line" />
    </div>
  )
}

Divider.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Divider
