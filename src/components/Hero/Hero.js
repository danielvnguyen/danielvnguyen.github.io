import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, RightSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Img src = '/images/ImageOfYou.jpg'/>
        <br />
        <br />
        Hi, I'm Daniel!
      </SectionTitle>
      <SectionText>
        I am a current Simon Fraser University student.
        Checkout my personal projects below and feel
        free to contact me!
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Contact Info</Button> 
    </LeftSection>
    <RightSection>
      <SectionTitle>
        Most Recent Demo:
          <iframe src='https://www.youtube.com/embed/tBbvTkH7fKQ'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            width= '600px'
            height= '300px'
          />
      </SectionTitle>
    </RightSection>
    <br/>
    <br/>
  </Section>
);

export default Hero;