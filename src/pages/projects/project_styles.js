import styled from 'styled-components';

export const HeaderImg = styled.img`
  width:60%;
  height:60%;
  border-radius: 20px;
  box-shadow: 10px 10px 20px black;
`;

export const Img = styled.img`
  width: 80%;
  height: 80%;
  align-self: center;
`;

export const LeftSection = styled.div`
  width: 100%;
  z-index: 20;
  text-align: center;
  font-size: 18px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
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
  text-align: center;
  font-size: 18px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
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