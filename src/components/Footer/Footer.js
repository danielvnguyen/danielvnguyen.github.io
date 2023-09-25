import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {Section, SectionDivider, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import Link from "next/link";

const Footer = () => {
  return (
      <FooterWrapper id="contact">
          <Section>
              <SectionDivider/>
              <br />
              <br />
              <SectionTitle>Contact Me</SectionTitle>
              <SectionText>
                  Feel free to send me a message here: <Link href="mailto:danielnguyen604@gmail.com">
                  <a style={{ color: 'inherit', textDecoration: 'underline' }}>danielnguyen604@gmail.com</a>
              </Link>, I'll try to respond as quick as I can!
                  <br/><br/>
                  You can also visit my GitHub and LinkedIn:
              </SectionText>
              <SocialIconsContainer>
                  <SocialContainer>
                      <SocialIcons href = "https://github.com/danielvnguyen">
                          <AiFillGithub size = "8rem"/>
                      </SocialIcons>
                      <SocialIcons href = "https://www.linkedin.com/in/daniel-v-nguyen/">
                          <AiFillLinkedin size = "8rem"/>
                      </SocialIcons>
                  </SocialContainer>
              </SocialIconsContainer>
          </Section>
      </FooterWrapper>
  );
};

export default Footer;
