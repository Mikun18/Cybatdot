import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gtc};
    gap: 60px;

    @media(max-width: ${({theme}) => theme.screen.sm}){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${({theme}) => theme.screen.xsm}){
        grid-template-columns: repeat(1, 1fr);
    }

    @media(max-width: ${({theme}) => theme.screen.mobile}){
        
    }

`