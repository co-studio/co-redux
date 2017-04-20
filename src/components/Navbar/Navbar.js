import React, { Component } from 'react'
import { Link } from 'react-router'

import iconHamburger from '../../assets/icons/icon-hamburger.svg'
import iconClose from '../../assets/icons/icon-close.svg'

class Navbar extends Component {
  state = {
    menuOpen: false,
    scrollClass: 'navbar-no-background'
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScroll)
  }

  trackScroll = () => {
    if (window.pageYOffset > 300) {
      this.setState({ scrollClass: null })
    }
    else {
      this.setState({ scrollClass: 'navbar-no-background' })
    }
  }

  toggleMobileMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  getItemClassnames = (href, className, type) => {
    let classNames = className

    if (this.props.location.pathname === href) {
      classNames += ` ${className}-active`
    }

    if (type && type === 'button') {
      classNames += ' nav-item-btn'
    }

    return classNames
  }

  renderNavItem = (itemClassName, { href, label, destination, type }) => {
    const classNames = this.getItemClassnames(href, itemClassName, type)

    if (destination && destination === 'external') {
      return (
        <a className={classNames}
          href={href}
          target="_blank"
          key={label}>
          {label}
        </a>
      )
    }
    else {
      return (
        <Link to={href}
          className={classNames}
          key={label}>
          {label}
        </Link>
      )
    }
  }

  renderMobileNavItem = this.renderNavItem.bind(null, 'nav-mobile-item')
  renderDesktopNavItem = this.renderNavItem.bind(null, 'nav-item')

  render() {
    const { logo } = this.props

    const navItems = [
      { label: 'About', href: '/about', destination: 'internal' },
      { label: 'Contact Us', href: '/contact', destination: 'internal' },
      { label: 'Get Started', href: 'https://m.me/1763620363890366', type: 'button', destination: 'external' },
    ]

    return (
      <nav id="navbar" className={`navbar ${this.state.scrollClass}`}>
        <Link className="nav-logo-container"
          to="/">
          <img src={logo}
            className="nav-logo"
            alt="logo"
          />
        </Link>

        {navItems.reverse().map(this.renderDesktopNavItem)}

        <i className="nav-menu" onClick={this.toggleMobileMenu}>
          <img className="nav-menu-icon"
            src={iconHamburger}
            alt="menu"
          />
        </i>

        <nav className={`nav-mobile nav-mobile-open-${this.state.menuOpen}`}>
          <i className="nav-menu" onClick={this.toggleMobileMenu}>
            <img className="nav-menu-icon"
              src={iconClose}
              alt="Close"
            />
          </i>

          <div className="nav-mobile-items" onClick={this.toggleMobileMenu}>
            {navItems.reverse().map(this.renderMobileNavItem)}
          </div>
        </nav>
      </nav>
    )
  }
}

export default Navbar
