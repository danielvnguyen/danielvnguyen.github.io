import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillBulb, AiFillAndroid } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, StickyHeader } from './HeaderStyles';

const Header = () =>  (
    <StickyHeader>
        <Container>
            <Div1>
                <Link href="/">
                    <a style ={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
                        <Span>Daniel Van Nguyen</Span>
                    </a>
                </Link>
            </Div1>
            <Div2>
                <li>
                    <Link href = "#about">
                        <NavLink>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <AiFillBulb size={20} style={{ marginRight: '8px' }}/> About
                            </div>
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link href = "#projects">
                        <NavLink>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <AiFillAndroid size={20} style={{ marginRight: '8px' }}/> Projects
                            </div>
                        </NavLink>
                    </Link>
                </li>
                <li>
                    <Link href = "#contact">
                        <NavLink>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <AiFillMail size={20} style={{ marginRight: '8px' }}/> Contact
                            </div>
                        </NavLink>
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
    </StickyHeader>
);

export default Header;
