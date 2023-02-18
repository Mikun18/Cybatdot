import styled, {css} from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.theme.color.darkBlue};
    color: white;
    padding: 12px 25px;
    border-radius: 6px;
    border: none;
    font-size: 18px;
    margin: ${props => props.margin};
    cursor: pointer;


    ${(props) => props.sec && css`
        border: 1px solid #0A2493;
        color: #0A2493;
        background-color: white;
    `}

    ${props => props.nextPrev && css`
        background-color: transparent;
        border: 1px solid black;
        color: black;
    `}

    ${(props) => props.sidebar && css`
        width: 100%;
        padding: 18px 0;
    `}

    ${props => props.cyba && css`
        background-color: white;
        color: #0A0A0A;
    `}

    ${props => props.blogNav && css`
        color: black;
        background-color: transparent;
        font-size: ${props => props.fs};
        display: ${props => props.display};
        padding: ${props => props.pad};
    `}

    @media(max-width: ${({theme}) => theme.screen.md}){
        ${props => props.nav && css`
            display: none;
        `}
    }

    @media(max-width: ${({theme}) => theme.screen.sm}){
        margin: 0;
    }

    @media(max-width: ${({theme}) => theme.screen.xsm}){
        ${props => props.sec && css`
            display: none;
        `}

        ${props => props.blogNav && css`
            font-size: 10px;
        `}
    }
`