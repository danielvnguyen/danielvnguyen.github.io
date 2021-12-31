import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href = "tel: 778-953-5331">778-953-5331</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href = "mailto:danielnguyen604@gmail.com">danielnguyen604@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
              <Slogan>Copyright © Daniel Nguyen 2021</Slogan>
            </CompanyContainer>
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
