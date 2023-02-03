import styled, {css} from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${props => props.cyba && css`
      align-items: flex-start;
    `}

    ${props => props.contact && css`
      align-items: flex-start;
    `}

    ${props => props.check && css`
      justify-content: initial;
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
    }
`