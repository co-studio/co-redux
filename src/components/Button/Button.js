import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Button = ({ href, className, children, destination }) => {
  if (destination === 'external') {
    return (
      <a className={`Button ${className}`}
        href={href}
        target="_blank">
        {children}
      </a>
    )
  }
  else {
    return (
      <Link className={`Button ${className}`}
        to={href}>
        {children}
      </Link>
    )
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
}

Button.defaultProps = {
  destination: 'internal',
  href: '/about'
}

export default Button
