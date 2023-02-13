import styled, {css} from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width};

    ${props => props.cyba && css`
      align-items: flex-start;
    `}

    ${props => props.contact && css`
      align-items: flex-start;
    `}

    ${props => props.check && css`
      justify-content: initial;
    `}

    ${props => props.blog && css`
      justify-content: center;
      margin: 6% ;
    `}

    @media(max-width: ${({theme}) => theme.screen.md}){
      ${props => props.contact && css`
        flex-direction: column;
      `}
    }

    @media(max-width: ${({theme}) => theme.screen.sm}){
      flex-direction: column;

      ${(props) => props.second && css`
        flex-direction: column-reverse;
      `}

      ${(props) => props.sidebar && css`
        flex-direction: row;
      `}

      ${props => props.bio && css`
        flex-direction: row;
      `}

      ${props => props.blog && css`
        flex-direction: column-reverse;
      `}
    }

    @media(max-width: ${({theme}) => theme.screen.xsm}){
      ${props => props.search && css`
        flex-direction: column;
      `}
    }
`