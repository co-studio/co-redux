import React, { Component } from 'react'

// Illustrations
import heroImage from '../../assets/images/background.jpg'
import thumbnail from '../../assets/images/thumbnail.jpg'
import aboutHeadline from '../../assets/images/about-headline.svg'
import footerCTABackground from '../../assets/images/footer-cta-background.jpg'
// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
import ContainerRows from '../../components/ContainerRows/ContainerRows'
import FooterCTA from '../../components/FooterCTA/FooterCTA'
// Components
import Hero from '../../components/Hero/Hero'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import FormEmail from '../../components/FormEmail/FormEmail'
import Header2 from '../../components/Header2/Header2'
import Header3 from '../../components/Header3/Header3'
import Thumbnail from '../../components/Thumbnail/Thumbnail'
import CardUseCase from '../../components/CardUseCase/CardUseCase'
import CardAbout from '../../components/CardAbout/CardAbout'
import Paragraph from '../../components/Paragraph/Paragraph'
import Divider from '../../components/Divider/Divider'
import TextStyle from '../../components/TextStyle/TextStyle'

class Landing extends Component {
  render() {
    return (
      <ContainerPage>
        <Hero image={heroImage}>
          <img className="About-Hero-img"
            src={aboutHeadline}
            role="presentation"
          />

          <div style={{marginTop: '50px'}}>
            <Header>
              Here's a Header (h1)
            </Header>
          </div>

          <Button className="Hero-button">
            Button
          </Button>
        </Hero>

        <ContainerSection>
          <Divider text="Divider" />

          <Header2>
            Header2 (h2)
          </Header2>
        </ContainerSection>

        <ContainerSection>
          <Header3>
            Header3 (h3)
          </Header3>

          <Paragraph>
            A Paragraph too
            <br/>
            We Walk Together is an initiative that started on the evening of
            November 9th, the day we all learned the results of the Presidential
            election. As the morning unfolded, more and more cases of attacks
            and harassment started to fill up our newsfeeds.
            <br/>
            <TextStyle weight={900}>TextStyle</TextStyle>
            <TextStyle weight={100}>TextStyle</TextStyle>
          </Paragraph>

          <FormEmail
            btnText="my btnText"
            formIds={{ email: '1632870892' }}
            formUrl="https://docs.google.com/forms/d/e/1FAIpQLSfd35xRCBfA7WQni0FFhLWRm02_obkcMs9bneB4BNUwrYI4xA"
          />

          <ContainerRows>
            <Thumbnail
              image={thumbnail}
              href="none"
              alt="Thumbnail Title"
            />

            <CardAbout
              header="Ava Mandeville"
              subheader="Volunteer"
              description="Passionate about people and building bridges,
              Ava leads all of our volunteer efforts. She directs individual and
              corporate allies who have reached out to WWT."
              image={thumbnail}
            />

            <CardUseCase
              image={thumbnail}
              header="Card Header"
              listItems={[
                'Item Uno',
                'Item Dos',
              ]}
            />
          </ContainerRows>

        </ContainerSection>

        <FooterCTA image={footerCTABackground}>
          <div>
            <Header>
              Ready to make a difference
              <br />
              in <span className="FooterCTA-highlight">your community?</span>
            </Header>

            <Button
              className="Hero-button"
              destination="external"
              href="https://m.me/1763620363890366">
              Get Involved
            </Button>
          </div>
        </FooterCTA>
      </ContainerPage>
    )
  }
}

export default Landing
