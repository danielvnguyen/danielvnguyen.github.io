import React from 'react';
import { DiAndroid, DiCodeBadge, DiFirebase, DiMysql, DiAngularSimple  } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AboutStyles';

const About = () =>  (
  <Section id = "about">
    <SectionDivider/>
    <br />
    <br />
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
    I am currently studying for my Bachelor of Science in Computing Science at Simon Fraser University.
    <br /><br />
    Greater Vancouverite with a passion for expanding my knowledge on technologies and improving my skills with programming tools & languages
    </SectionText>
    <List>
    <ListItem>
        <DiCodeBadge size = "3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Java, JavaScript, C++, <br />
            Python, HTML, CSS, SQL <br />
            TypeScript, Kotlin
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAngularSimple size = "3rem" />
        <ListContainer>
          <ListTitle>Frameworks</ListTitle>
          <ListParagraph>
            Experienced with <br />
            Angular, React, Spring
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiMysql size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br />
            MySQL, Node.js, Express.js, <br />
            RESTful API, AWS Cloud
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default About;
