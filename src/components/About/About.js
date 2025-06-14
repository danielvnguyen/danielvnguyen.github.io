import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Link from "next/link";

const About = () =>  (
  <Section id = "about">
    <SectionDivider/>
    <br />
    <br />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
        Hey! I'm Daniel, an aspiring software developer from Metro Vancouver. I am studying for my Computing Science degree at Simon Fraser University. I have 8 months of experience at Safe Fleet as a Test Automation Engineer and 8 months of experience at WelTel Inc. as a Full Stack Developer.
    <br /><br />
        Here, you can explore a selection of my projects.
        I am passionate about continuously expanding my knowledge of various technologies and honing my skills with programming tools and languages.
        As a result, I dedicate extra time and effort to refine and perfect these projects as much as possible.
        <br /><br />
        If you have any questions please don't hesitate to <Link href="#contact">
            <a style={{ color: 'inherit', textDecoration: 'underline' }}>reach out</a>
        </Link>!
    </SectionText>
  </Section>
);

export default About;
