import React from 'react';
import { DiAndroid, DiCode, DiFirebase } from 'react-icons/di';
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
    Expanding my knowledge on technology and improving my skills with computers is my goal.
    </SectionText>
    <List>
    <ListItem>
        <DiCode size = "3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java, JS, C/C++/C#, <br />
            Python, LUA, Kotlin, HTML
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size = "3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Android Studio, <br />
            React.js, and Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            writing test files, <br />
            debugging & databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default About;
