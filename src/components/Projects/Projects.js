import React from 'react';
import {
    BlogCard, CardInfo, GridContainer,
    HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, CustomLink
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { personalProjects, academicProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id = "projects">
    <SectionDivider />
    <SectionTitle main> Personal Projects</SectionTitle>
    <GridContainer>
      {personalProjects.map(({projectId, id, image, title, description, tags, visit}) => (
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
            <TitleContent>Technologies:</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              <CustomLink href={visit}>See More</CustomLink>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <SectionDivider />
    <SectionTitle main> Academic Projects</SectionTitle>
    <GridContainer>
      {academicProjects.map(({projectId, id, image, title, description, tags, visit}) => (
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
            <TitleContent>Technologies:</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              <CustomLink href={visit}>See More</CustomLink>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br />
    <br />
  </Section>
);

export default Projects;