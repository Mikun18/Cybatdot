import React from "react";
import { Slide } from "../../../Base/box";
import { H1, P } from "../../../Base/text";
import Slider from "react-slick";
import { Card, ImageText} from "./expertise";
import { Button } from "../../../Base/button";

const Expertise = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slide bg="#0A2493" expert>
      <H1 align="center" fs="48px" style={{ color: "white" }} pad="28px" expert>
        Our Expertise
      </H1>

      <Slider {...settings}>
        <Card>
          
              <img src="./Images/security.png" alt="Cyber Security" style={{position: "relative"}}/>
              <ImageText>Cyber Security</ImageText>

            <div >
              <P width="309px" pad="0 15px" slide>
                Management Technology solutions for detection and prevention of
                threats
              </P>

              <button style={{margin: "0 15px", paddingTop:"60px"}}>Learn More</button>
            </div>
         
        </Card>

        <Card>
          
          <img src="./Images/engineering.png" alt="Reverse Engineering" />
          <ImageText>Reverse Engineering</ImageText>

          <div>
            <P width="309px" pad="0 15px" slide>
              Management Technology solutions for detection and prevention of
              threats
            </P>

            <button style={{margin: "0 15px", paddingTop:"60px"}}>Learn More</button>
          </div>
       </Card>

        <Card>
          
          <img src="./Images/computing.png" alt="Cloud Computing" />
          <ImageText>Cloud Computing</ImageText>

          <div>
            <P width="309px" pad="0 15px" slide>
              Management Technology solutions for detection and prevention of
              threats
            </P>

            <button style={{margin: "0 15px", paddingTop:"60px"}}>Learn More</button>
          </div>
        </Card>
      </Slider>

      <div style={{textAlign: "center", padding:"40px 0"}}>
        <Button style={{ backgroundColor: "#EDF0FF", color: "#141414" }}>
          See all Solutions
        </Button>
      </div>
    </Slide>
  );
};

export default Expertise;
