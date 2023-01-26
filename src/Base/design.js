import styled, { css } from "styled-components";

export const Design = styled.img`
  ${(props) =>
    props.pry &&
    css`
      position: absolute;
      width: ${(props) => props.width};
      right: 0px;
      top: 0px;
      z-index: -1;
    `}

  ${(props) =>
    props.sec &&
    css`
      position: absolute;
      width: ${(props) => props.width};
      right: 299px;
      top: 250px;
      z-index: -1;
    `}

    ${(props) =>
    props.ter &&
    css`
      position: absolute;
      width: ${(props) => props.width};
      right: 10px;
      /* top: 70px; */
      z-index: -3;
    `}

  @media(max-width: ${({theme}) => theme.screen.md}){
    ${(props) =>
    props.sec &&
    css`
      position: absolute;
      width: 320px;
      right: 350px;
      top: 300px;
      z-index: -1;
    `}
  }

  @media(max-width: ${({theme}) => theme.screen.sm}){
    display: none;
  }
`;
