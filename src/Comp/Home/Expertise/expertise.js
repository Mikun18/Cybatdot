import styled from "styled-components";

export const Card = styled.section`
  /* width: 100%; */
  /* margin: 0 5%; */
  /* padding: 0 20px; */
  /* box-shadow: 0px 30px 6px 0px rgba(0, 0, 0, 0.25); */
  /* box-shadow: 0px 10px 6px rgba(0, 0, 0, 0.25); */
  
  div {
    background-color: ${(props) => props.theme.color.bgColor};
    padding: 15px 0;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    height: 200px;
    position: relative;
    /* width: 100%; */
  }

  img {
    width: 100%;
    height: 220px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  button {
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #0a2493;
    font-size: 18px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
  }
`;

export const ImageText = styled.p`
  position: absolute;
  bottom: 230px;
  color: white;
  padding: 10px;
  font-size: 18px;
`

export const SliderButton= styled.button`
  border-radius: 999px;
  background-color: ${props => props.bg};
  display:grid;
  place-items:center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left:  ${(props) => props.left};
  right: ${props => props.right};
  padding: 5px;
  border: none;
  cursor: pointer;
  margin: ${props => props.margin};

  @media(max-width: ${({theme}) => theme.screen.mobile}){
    top: 30%;
    /* margin: 0; */
    right: 0px;
     ${props => props.next}{
      right: 0px; 
      left: 0px;
    } 
  }

`

export const SliderDot = styled.div`
  /* background-color: white; */
  display: flex;
  justify-content: center;
  width: 100%;

  ul{
    list-style: none;
  }
`

export const Bull = styled.div`
   border: 2px solid #EDF0FF;
  border-radius: 100%;
  position: relative;
  width: 0.8em; height: 0.8em;

  &::before{
    content: "";
  display: block;
  position: absolute;
  width: 0.5em; height: 0.5em;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: #EDF0FF;
  border-radius: 100%;
  }
`
