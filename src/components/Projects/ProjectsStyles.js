import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
`

export const GridContainer = styled.section`
display: flex;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
align-items: flex-start;
column-gap: 4rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.md} {
display: flex;
flex-direction: column;
padding: 2rem;
}
`
export const BlogCard = styled.div`
  border-radius: 20px;
  box-shadow: 10px 10px 20px black;
  text-align: center;
  width: 100%;
  background: #494848;
  z-index: 20;
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  font-weight: bold;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: white;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 20px;
  color: #ffffff;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.2rem
  
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const CustomLink = styled.a`
color: black;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: lightblue;
border-radius: 15px;
transition: 0.5s;
font-weight: bold;
&:hover{
  background: #528AAE;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: lightblue;
font-size: 1.5rem;
`