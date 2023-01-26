import styled, {css} from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({theme}) => theme.screen.sm}){
      flex-direction: column;

      ${(props) => props.second && css`
        flex-direction: column-reverse;
      `}

      ${(props) => props.sidebar && css`
        flex-direction: row;
      `}
    }
`