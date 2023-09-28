import React, {useEffect} from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillBulb, AiFillAndroid } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, StickyHeader } from './HeaderStyles';

const Header = () => {
    useEffect(() => {
        // Smooth scroll function
        const smoothScroll = (targetId) => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };

        // Add smooth scroll behavior to anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                smoothScroll(targetId);
            });
        });
    }, []);

    return (
        <StickyHeader>
            <Container>
                <Div1>
                    <a href="/#" style={{
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        marginBottom: '20px',
                    }}>
                        <Span>Daniel Van Nguyen</Span>
                    </a>
                </Div1>
                <Div2>
                    <li>
                        <NavLink href="/#about">
                            <AiFillBulb size={20} style={{ marginRight: '8px' }} /> About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/#projects">
                            <AiFillAndroid size={20} style={{ marginRight: '8px' }} /> Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/#contact">
                            <AiFillMail size={20} style={{ marginRight: '8px' }} /> Contact
                        </NavLink>
                    </li>
                </Div2>
                <Div3>
                    <SocialIcons href="https://github.com/danielvnguyen">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/daniel-v-nguyen/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                </Div3>
            </Container>
        </StickyHeader>
    );
};
export default Header;
