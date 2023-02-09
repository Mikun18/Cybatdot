import styled, {css} from "styled-components";

export const Box = styled.div`
  padding: 50px 140px;
  background-color: ${(props) => props.bg};

  ${props => props.cyba && css`
    position: relative;
  `}

  ${props => props.contact && css`
    position: relative;
  `}

  ${props => props.heroblog && css`
    position: relative;
  `}

  ${props => props.blog && css`
    padding: 44px 40px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  `}

  @media(max-width: ${({theme}) => theme.screen.xlg}) {
    padding: 50px 80px;

    ${props => props.blog && css`
      padding: 44px 40px;
    `}
  }

  @media(max-width: ${({theme}) => theme.screen.lg}){
    ${props => props.contact && css`
      padding: 50px 20px;
    `}

    ${props => props.blog && css`
      padding: 20px 40px;
    `}
  }
  
  @media(max-width: ${({theme}) => theme.screen.md}){
    padding: 50px 30px;

    ${props => props.blog && css`
      padding: 20px 40px;
    `}
    }

    @media(max-width: ${({theme}) => theme.screen.sm}){
      ${props => props.primary && css`
      img {
        width: 100%;
        margin: 50px auto;
      }
      `}

      ${props => props.blog && css`
        padding: 20px;
        /* margin: 0 10px; */
        border-top-left-radius: 0px;
        width: 560px;
      `}

        ${props => props.heroblog && css`
          img{
            margin: 0;
            width: 600px;
            height: 280px;
          }
        `}

    }

    @media (max-width: ${({ theme }) => theme.screen.mobile}){
      padding: 50px 10px;
    }
`;


export const Con = styled.div`
  padding: ${props => props.pad};
  margin: ${props => props.margin};
  background-color: ${props => props.bg};
  width: ${props => props.width};
  border-top: ${props => props.bt};
  border-radius: ${props => props.br};
`

export const Rect = styled.h2`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: #8a9ffa;
    position: absolute;
    border-radius: 12px;
    left: ${props => props.left};
    top: ${props => props.top};
    bottom: ${props => props.bottom};
    right: ${props => props.right};

    @media(max-width: ${({theme}) => theme.screen.xlg}) {
      ${(props) => props.primary && css`
        left: 450px;
        width: 16%;
      `}
    }

    @media(max-width: 1260px){
      display: none;
    }
`

export const Slide = styled.div`
  padding: 50px 140px;
  background-color: ${(props) => props.bg};

  @media(max-width: ${({theme}) => theme.screen.xlg}) {
    padding: 50px 80px;
  }

  @media(max-width: ${({theme}) => theme.screen.md}){
      padding: 50px 70px;
    }

    @media (max-width: ${({ theme }) => theme.screen.mobile}){
      padding: 50px 10px; 
      ${props => props.expert && css`
      `}
    }

`;

export const ContentCon = styled.div`
  padding: ${props => props.pad};
  text-align: justify;
  width: 794px;
  margin: auto;

    ul{
      padding: 0 40px;
      font-size: 20px;
    }

    li{
      padding: 4px 0;
    }

  @media(max-width: ${({theme}) => theme.screen.sm}){
    width: 100%;
    /* padding: 0 10px; */

  }
`

export const Image = styled.img`
  width: 100%;
  position: absolute;
  min-height: 580px;

  ${props => props.cybalife && css`
    z-index: -1;
    top: -100px;
    min-height: 0;
  `}

  ${props => props.blog && css`
    min-height: 0;
    height: 400px;
  `}

  ${props => props.heroblog && css`
    position: static;
    min-height: 0;
    width: auto;
  `}

  @media(max-width: ${({theme}) => theme.screen.sm}){
    min-height: 700px;

    ${props => props.cybalife && css`
      top: -40px;
    `}

    ${props => props.security && css`
      min-height: 500px;
  `}
  }

  @media(max-width: ${({theme}) => theme.screen.lg}){
    ${props => props.heroblog && css`
      width: 350px;
    `}
  }

  @media(max-width: ${({theme}) => theme.screen.sm}){
    ${props => props.heroblog && css`
      min-height: 0;
      width: 100%;
    `}
  }
`
