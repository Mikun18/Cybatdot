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
    padding-top: 42px;
    font-size: 18px;
  }
`;

export const ImageText = styled.p`
  position: absolute;
  bottom: 230px;
  color: white;
  padding: 10px;
  font-size: 18px;
`

// export const SmallerCard = styled.section`
//   @media (max-width: ${({ theme }) => theme.screen.sm}) {
//     display: flex;
//     flex-direction: row;
//     width: 100%;

//    button{
//     padding-top: 60px;
//    }

//    div{
//     /* padding: 50px 15px; */
//    }

//     p{
//       width: 100%;
//     }
//   }
// `;
