import React from 'react';
import {Section, SectionSubText, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import {Container} from "../../layout/LayoutStyles";
import Header from "../../components/Header/Header";
import {Img} from "../../components/Hero/HeroStyles";
import {SocialContainer, SocialIconsContainer} from "../../components/Footer/FooterStyles";
import {SocialIcons} from "../../components/Header/HeaderStyles";
import {AiFillAndroid, AiFillGithub} from "react-icons/ai";
import Particles from "../../components/Particles";

const Moveit = () => (
    <Container>
        <Particles/>
        <Header/>
        <Section>
            <SectionTitle> MoveIt! - Fitness Tracker </SectionTitle>
            <Img src="/images/moveit_images/moveit_img.jpg"/>
            <br/>
            <SectionSubText>Software Used: Android Studio, Google Firebase</SectionSubText>
            <SectionSubText>Languages Used: Java</SectionSubText>
            <br/>
            <SectionText>MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle. Once a day, MoveIt! sends you a reminder to create an entry, enabling you to reflect on your day. Within each entry, you can capture your mood, record meals, log daily activities or exercises, and enhance your memories with notes or images. By fostering a daily habit of tracking meals, activities, and goals, MoveIt! assists you in building patterns that lead to a healthier lifestyle.</SectionText>
        </Section>
        <Section>
            <SectionText>
                See the GitHub Repository and Google Play Store page here:
            </SectionText>
            <SocialIconsContainer>
                <SocialContainer>
                    <SocialIcons href = "https://github.com/danielvnguyen/MoveIt">
                        <AiFillGithub size = "8rem"/>
                    </SocialIcons>
                    <SocialIcons href = "https://play.google.com/store/apps/details?id=com.danielvnguyen.moveit">
                        <AiFillAndroid size = "8rem"/>
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </Section>
    </Container>
);

export default Moveit;