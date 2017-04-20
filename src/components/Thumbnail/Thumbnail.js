import React, { PropTypes } from 'react'

const Thumbnail = ({ href, image, alt, className }) => {
  return (
    <div className={`Thumbnail ${className}`}>
      <a className="Thumbnail-image-container"
        href={href}
        target="_blank">
        <img className="Thumbnail-image"
          src={image}
          alt={alt} />
      </a>
    </div>
  )
}

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
}

export default Thumbnail
