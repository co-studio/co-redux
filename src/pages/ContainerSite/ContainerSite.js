import React, { Component, PropTypes } from 'react'

// Images
import logo from '../../assets/logo-wordmark-white.svg'
// Components
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

class ContainerSite extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
  }

  render () {
    const { children, location } = this.props
    return (
      <main className="ContainerSite">
        <Navbar
          location={location}
          logo={logo}
        />

        {children}

        <Footer
          twitterUrl="https://twitter.com/CoStudio_io"
          facebookUrl="https://facebook.com/CoStudio.io"
        />
    </main>
    )
  }
}

export default ContainerSite
