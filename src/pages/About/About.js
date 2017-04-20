import React, { Component } from 'react'

// Images
import aboutHero from '../../assets/images/heroes/about-hero.jpg'
import aboutHeadline from '../../assets/images/about-headline.svg'
import rachelFustini from '../../assets/images/about/rachel-fustini.jpg'
import avaMandeville from '../../assets/images/about/ava-mandeville.jpg'
import sponsorSpain from '../../assets/images/about/sponsor-spain.png'
// Containers
import ContainerPage from '../../components/ContainerPage/ContainerPage'
import ContainerSection from '../../components/ContainerSection/ContainerSection'
import ContainerRows from '../../components/ContainerRows/ContainerRows'
// Components
import Hero from '../../components/Hero/Hero'
import Header2 from '../../components/Header2/Header2'
import Divider from '../../components/Divider/Divider'
import Paragraph from '../../components/Paragraph/Paragraph'
import CardAbout from '../../components/CardAbout/CardAbout'
import Thumbnail from '../../components/Thumbnail/Thumbnail'

class About extends Component {
  render () {
    const fbPage = 'https://facebook.com/wwtapp'
    const fbGroup = 'https://facebook.com/groups/walktogetherapp'
    const goFundMe = 'https://www.gofundme.com/we-walk-together'
    return (
      <ContainerPage>
        <Hero image={aboutHero}
          className="About-landing">
          <img className="About-Hero-img"
            src={aboutHeadline}
            role="presentation"/>
        </Hero>

        <ContainerSection>
          <Divider text="About us" />

          <Header2>
            Our Story
          </Header2>

          <Paragraph>
            We Walk Together is an initiative that started on the evening of
            November 9th, the day we all learned the results of the Presidential
            election. As the morning unfolded, more and more cases of attacks
            and harassment started to fill up our newsfeeds.
          </Paragraph>

          <Paragraph>
            Many of these accounts consisted of women of color being attacked:
            Muslim women being beaten and having their hijabs pulled off, and
            black women being accosted, called names, and threatened. The LGBT
            community, Black, Latino, and Asian men were all targets of slurs,
            intimidation and even physical attacks. Children from elementary to
            high school reported bullying, harassment and racially offensive
            graffiti throughout their schools.
          </Paragraph>

          <Paragraph>
            After a full day of hearing about one incident after another,
            We Walk Together founders quickly took action. They started
            a <a href={fbGroup} target="_blank">Facebook group</a> with the idea
            that there should be an app for people
            to be able to find someone to walk with, if they felt threatened or
            scared. They then began inviting friends and family.
          </Paragraph>

          <Paragraph>
            Within 24 hours our <a href={fbPage} target="_blank">Facebook page</a> went
            from zero members to around
            1,500. During that time, active members in the group took on roles
            as administrators and moderators. Those key people began contacting
            app developers, writing press releases, and fielding calls from
            Universities who wanted to know how our app could be used to help
            their students.
          </Paragraph>

          <Paragraph>
            In just a few short days, thousands have joined our cause wanting
            to help. Whether they are “walkers” looking for a safe escort home,
            or a “buddy” eager to protect their neighbors, – they are all
            committed to walking together. As we continue to pool our resources
            to develop a solution that makes us all safer, we ask that you join
            us and show your support. Join our <a href={fbPage} target="_blank">Facebook page</a> and
            connect with
            other like-minded people. Share our <a href={goFundMe} target="_blank">GoFundMe</a> campaign
            to help our
            app come to life, and if you can, donate.
          </Paragraph>

          <Paragraph>
            Most importantly, if you see something, say something.
            Going forward we have to be a little bit more aware of our
            surroundings, so that all of us can make it home safely to our
            families.
          </Paragraph>
        </ContainerSection>

        <ContainerSection>
          <Divider text="Team" />

          <Header2>
            Meet the team
          </Header2>

          <ContainerRows>
            <CardAbout
              header="Rachel Fustini"
              Header2="PR & Marketing Director"
              description="Our media outreach and marketing guru, Rachel has
              connected with Fortune 500 companies, non-profits and Universities
              who want to see WWT realized."
              image={rachelFustini}
            />

            <CardAbout
              header="Ava Mandeville"
              Header2="Volunteer"
              description="Passionate about people and building bridges,
              Ava leads all of our volunteer efforts. She directs individual and
              corporate allies who have reached out to WWT."
              image={avaMandeville}
            />

            <CardAbout
              header="Ava Mandeville"
              Header2="Volunteer"
              description="Passionate about people and building bridges,
              Ava leads all of our volunteer efforts. She directs individual and
              corporate allies who have reached out to WWT."
              image={avaMandeville}
            />
          </ContainerRows>
        </ContainerSection>

        <ContainerSection>
          <Divider text="Sponsors" />

          <Thumbnail
            image={sponsorSpain}
            href="http://www.spainri.com/"
          />
        </ContainerSection>

      </ContainerPage>
    )
  }
}

export default About
