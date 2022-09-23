import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineLaptop } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style ={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
          <AiOutlineLaptop size = "3rem" /> <Span>Daniel Nguyen</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/danielvnguyen">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href = "https://www.linkedin.com/in/daniel-v-nguyen/">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
