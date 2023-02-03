import styled, {css} from "styled-components";

export const P = styled.p`
  font-style: normal;
  font-weight: 350;
  font-size: ${props => props.fs};
  line-height: 22px;
  color: ${(props) => props.theme.color.black};
  width: ${(props) => props.width};
  padding: ${props => props.pad};

  ${props => props.cyba && css`
    color: white;
  `}

  @media(max-width: ${({theme}) => theme.screen.lg}){
    ${(props) => props.slide && css`
      width: 95%;
    `}
  }

  @media(max-width: ${({theme}) => theme.screen.sm}){
    width: 80%;

    ${props => props.primary && css`
      padding: 28px 0;
    `}

    ${props => props.cybalife && css`
      width: 90%;
      padding: 15px;
    `}
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}){
    width: 100%;

    ${props => props.slide && css`
      width: 95%;
    `}

    ${props => props.cybalife && css`
      width: 90%;
      padding: 15px;
    `}
  }
`;

export const H1 = styled.h1`
  font-style: normal;
  font-size: ${props => props.fs};
  font-weight: 700;
  line-height: 104%;
  color: ${(props) => props.theme.color.black};
  width: ${(props) => props.width};
  text-align: ${props => props.align};
  padding: ${props => props.pad};
  
  ${props => props.cyba && css`
  margin-top: ${props => props.mt};
    color: white;
  `}

  @media(max-width: ${({theme}) => theme.screen.md}){
    font-size: 50px;

    ${props => props.cybalife && css`
      font-size: 24px;
      padding: 10px 15px;
    `}
  }

  @media(max-width: ${({theme}) => theme.screen.sm}){
    width: 100%;
    
    ${props => props.hero && css`
      font-size: 68px;
      padding: 0;
    `}

    ${props => props.cybalife && css`
      padding: 10px 15px;
    `}

  }

  @media(max-width: ${({theme}) => theme.screen.xsm}){
    ${props => props.cyba && css`
      margin-top: 0px;
    `}

    ${props => props.cybalife && css`
      padding: 10px 15px;
      width: 90%;
      font-size: 24px;
    `}
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}){
    font-size: 40px;

    ${props => props.expert && css`
      padding: 28px 0;
    `}

    ${props => props.cybalife && css`
      font-size: 18px;
      width: 80%;
      font-weight: 700;
    `}
  }
`;
