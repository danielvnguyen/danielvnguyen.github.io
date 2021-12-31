import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer,
   HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { personalProjects, academicProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider />
    <SectionTitle main> Personal Projects</SectionTitle>
    <GridContainer>
      {personalProjects.map(({id, image, title, description, tags, visit}) => (
        <BlogCard key = {id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree title> {title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            {/* Languages/frameworks used for projects */}
            <br />
            <TitleContent>What I Used:</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Go To Repository</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
    <SectionTitle main> Academic Projects</SectionTitle>
    <GridContainer>
      {academicProjects.map(({id, image, title, description, tags, visit}) => (
        <BlogCard key = {id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree title> {title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            {/* Languages/frameworks used for projects */}
            <br />
            <TitleContent>What I Used:</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Go To Repository</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br />
    <br />
  </Section>
);

export default Projects;