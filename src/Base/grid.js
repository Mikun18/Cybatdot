import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gtc};
    gap: 60px;

    @media(max-width: ${({theme}) => theme.screen.sm}){
        grid-template-columns: repeat(2, 1fr);
    }
`