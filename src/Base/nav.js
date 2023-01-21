import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 140px;

  p {
    margin: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.screen.xlg}) {
    padding: 40px 80px;
  }

  @media (max-width: ${({ theme }) => theme.screen.md}) {
    padding: 40px 30px;
  }

  @media (max-width: ${({ theme }) => theme.screen.sm}) {
    display: none;
  }
`;

export const SmallerNavbar = styled.nav`

  display: none;

@media (max-width: ${({ theme }) => theme.screen.sm}){
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 30px;
}

@media (max-width: ${({ theme }) => theme.screen.mobile}){
  padding: 40px 10px;
}
`

export const Icon = styled.div`
  padding: 10px 30px;
  background-color: #0a2493;
  border-radius: 5px;
  cursor: pointer;

  p {
    color: white;
    font-size: 18px;
  }
`;

export const SideBarBg = styled.div`
   height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    background-color: white;
`

export const SideModal = styled.div`
  padding: 5%;
`


