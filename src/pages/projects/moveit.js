import React from 'react';
import {Section, SectionDivider, SectionSubText, SectionText, SectionTitle} from "../../styles/GlobalComponents";
import {Container} from "../../layout/LayoutStyles";
import Header from "../../components/Header/Header";
import {SocialContainer, SocialIconsContainer} from "../../components/Footer/FooterStyles";
import {SocialIcons} from "../../components/Header/HeaderStyles";
import {AiFillAndroid, AiFillGithub} from "react-icons/ai";
import {Img, LeftSection, RightSection, HeaderImg} from "./project_styles";
import {BlogCard} from "../../components/Projects/ProjectsStyles";

const Moveit = () => (
    <Container>
        <Header/>
        <Section>
            <SectionTitle> MoveIt! - Fitness Tracker </SectionTitle>
            <HeaderImg src="/images/moveit_images/moveit_img.jpg"/>
            <br/>
            <SectionSubText>Software Used: Android Studio, Google Firebase</SectionSubText>
            <SectionSubText>Languages Used: Java</SectionSubText>
            <br/>
            <SectionText>
                <BlogCard>
                    MoveIt! is your daily fitness tracker app, designed to inspire and empower users to maintain a healthy lifestyle.
                    Once a day, MoveIt! sends you a reminder to create an entry, enabling you to reflect on your day.
                    Within each entry, you can capture your mood, record meals, log daily activities or exercises,
                    and enhance your memories with notes or images. By fostering a daily habit of tracking meals, activities, and goals,
                    MoveIt! assists you in building patterns that lead to a healthier lifestyle
                </BlogCard>
            </SectionText>
        </Section>
        <Section>
            <SectionTitle>Background</SectionTitle>
            <SectionText>
                <BlogCard>
                    MoveIt! is my first significant Android project and my debut app on the Google Play Store.
                    I created it because I wanted an easier way to track my gym progress and stay motivated when
                    I started working out. Initially, I was using a Notes app to jot down everything related to my workouts,
                    then I thought, "Why not make an app to simplify this process?"
                </BlogCard>
            </SectionText>
        </Section>
        <Section>
            <SectionTitle>Features</SectionTitle>
            <br/>
            <Section row nopadding>
                <LeftSection>
                    <Img src="/images/moveit_images/graphic_1.png"/>
                </LeftSection>
                <RightSection>
                    The standout feature of MoveIt! is its customizable daily reminder system.
                    At the chosen time each day, MoveIt! will notify you to create an entry to reflect on your daily activities and experiences.
                    This feature is designed to motivate you to establish and maintain a daily journaling habit
                </RightSection>
            </Section>
            <br/>
            <Section row nopadding>
                <LeftSection>
                    MoveIt! allows users to log meals and activities in entries, aiding dietary and fitness monitoring.
                    Users can manage meal and activity details in Settings, including calorie counts for meals, which update automatically during entry creation
                </LeftSection>
                <RightSection>
                    <Img src="/images/moveit_images/graphic_2.png"/>
                </RightSection>
            </Section>
            <br/>
            <Section row nopadding>
                <LeftSection>
                    <Img src="/images/moveit_images/graphic_3.png"/>
                </LeftSection>
                <RightSection>
                    In the calendar view, you can view your monthly progress & observe your goal tracking and consistency.
                    Click on any date to review day-specific entries. Explore additional information like the streak counter for
                    extra motivation and a monthly mood pie chart
                </RightSection>
            </Section>
            <br/>
            <Section row nopadding>
                <LeftSection>
                    A feature I'm proud of is the photo gallery, allowing you to add, view, and download photos at their original resolution.
                    It provides a dedicated space for storing gym-specific or workout-related photos, like progress pictures, separate from your phone's photo gallery
                </LeftSection>
                <RightSection>
                    <Img src="/images/moveit_images/graphic_4.png"/>
                </RightSection>
            </Section>
            <br/>
            <Section row nopadding>
                <LeftSection>
                    <Img src="/images/moveit_images/graphic_5.png"/>
                </LeftSection>
                <RightSection>
                    MoveIt! offers two sign-in options: email & password or Google account, enabling seamless data syncing across devices.
                    Your data is securely hosted on Google's cloud server, which you can update or delete at any time
                </RightSection>
            </Section>
            <br/>
            <Section row nopadding>
                <LeftSection>
                    You can enjoy the app in your preferred visual style: light, dark, or just follow your system's theme!
                </LeftSection>
                <RightSection>
                    <Img src="/images/moveit_images/graphic_6.png"/>
                </RightSection>
            </Section>
        </Section>
        <Section>
            <SectionDivider/>
            <br/>
            <SectionText style={{ fontWeight: 'bold' }}>
                Check out the GitHub Repository and Google Play Store page!
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