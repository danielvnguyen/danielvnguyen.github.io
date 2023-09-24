import styled from 'styled-components';

export const Img = styled.img`
  width:50%;
  height:50%;
  object-fit: cover;
  overflow: hidden;
`

export const LeftSection = styled.div`
  width: 100%;
  z-index: 20;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`

export const RightSection = styled.div`
  width: 100%;
  z-index: 20;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;