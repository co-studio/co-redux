import React, { Component } from 'react'

// Images

// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
// Components
import Hero from '../../components/Hero/Hero'
import FormContact from '../../components/FormContact/FormContact'

class Contact extends Component {
  render() {
    const formIds = {
      name: '728759201',
      email: '544180993',
      message: '1326784560'
    }

    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeE-_UKZblQhImKp-fSXSh1YH2KxMM_7b_QONOdiIijz3xyxw'

    return (
      <ContainerPage className="Contact-ContainerPage">
        <Hero className="Contact-Hero">
        </Hero>

        <ContainerSection className="Contact-ContainerSection">
          <FormContact
            formIds={formIds}
            formUrl={formUrl}
          />
        </ContainerSection>

      </ContainerPage>
    )
  }
}

export default Contact
