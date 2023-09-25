import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const About = () =>  (
  <Section id = "about">
    <SectionDivider/>
    <br />
    <br />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
        Hi! I'm Daniel, a software developer from Metro Vancouver. I am currently studying for my Bachelor of Science in Computing Science at Simon Fraser University.
    <br /><br />
        Here, you can explore a selection of my personal projects.
        I am passionate about continuously expanding my knowledge of various technologies and honing my skills with programming tools and languages.
        As a result, I dedicate extra time and effort to refine and perfect these projects as much as possible.
        <br /><br />
        If you have any questions please feel free to contact me!
    </SectionText>
  </Section>
);

export default About;
