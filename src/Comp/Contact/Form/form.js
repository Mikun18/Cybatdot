import styled, {css} from "styled-components";

export const FormCon = styled.form`
    background-color: #FFFFFF;
    padding: 28px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
    border-radius: 12px;
    margin: 0 10%;

    @media(max-width: ${({theme}) => theme.screen.xlg}){
        margin: 0;
    }

`
export const Input = styled.input`
    width: ${props => props.width};
    padding: ${props => props.pad};
    margin: 10px 0;
    border-radius: 10px;
    border: 1px #0A0A0A solid;
    font-size: 18px;

    ${props => props.search && css`
        border: none;
        background-color: #D9D9D9;
        padding: 5px;
        color: rgba(0, 0, 0, 0.5);;
    `}

    &:focus{
        outline: none;
    }

    ${props => props.flex && css`
        margin-left: 20px;
    `}
`