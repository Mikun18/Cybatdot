import styled from "styled-components";

export const Sector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 2%;

  button {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid #0a2493;
  }
`;

export const Icon = styled.img`
  margin: auto;
  width: ${(props) => props.width};
  height: ${props => props.height};
  background-color: ${(props) => props.theme.color.darkBlue};
  padding: 40px;
  border-radius: 50%;
  overflow: visible;
`;
