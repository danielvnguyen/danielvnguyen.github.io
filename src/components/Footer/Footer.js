import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href = "mailto:danielnguyen604@gmail.com">danielnguyen604@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <SocialContainer>
              <SocialIcons href = "https://github.com/danielvnguyen">
                <AiFillGithub size = "3rem"/>
              </SocialIcons>
              <SocialIcons href = "https://www.linkedin.com/in/daniel-v-nguyen/">
                <AiFillLinkedin size = "3rem"/>
              </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
  );
};

export default Footer;
