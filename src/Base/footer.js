import styled from "styled-components";

export const FooterCon = styled.div`
    padding: 50px 140px;

    @media(max-width: ${({theme}) => theme.screen.xlg}) {
    padding: 50px 80px;
  }

  @media(max-width: ${({theme}) => theme.screen.md}){
      padding: 50px 30px;
    }
`

export const FooterGrid = styled.div`
    border-top: 1px solid rgba(12, 15, 31, 0.25);
    border-bottom: 1px solid rgba(12, 15, 31, 0.25);
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 28px 0;
    padding: 28px 0;

    @media(max-width: ${({theme}) => theme.screen.sm}) {
      grid-template-columns: repeat(3, 1fr);
    }
`