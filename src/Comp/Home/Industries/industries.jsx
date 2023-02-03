import React from "react";
import "./slick.css";
// import "./slick-theme.css";
import Slider from "react-slick";
import { Slide } from "../../../Base/box";
import { H1, P } from "../../../Base/text";
import { Sector, Icon } from "./industries";
import { SliderButton, SliderDot } from "../Expertise/expertise";
import { Link } from "react-router-dom";

const Industries = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: "slick-dots bull-blue",
    prevArrow: (
      <SliderButton left="40px" bg="#0A2493">
        <img
          src="./Images/prev-white.png"
          alt="prev-button"
          style={{ width: "100%" }}
        />
      </SliderButton>
    ),
    nextArrow: (
      <SliderButton right="-45px" bg="#0A2493">
        <img
          src="./Images/next-white.png"
          alt="next-button"
          style={{ width: "100%" }}
        />{" "}
      </SliderButton>
    ),
    customPaging: (index) => {
      return (
        <div style={{ position: "absolute", top: "0px", opacity:"0" }}>
          {index}
        </div>
      );
    },
    appendDots: (dots) => {
      return (
        <SliderDot style={{position:"relative"}}>
          <p style={{display:'flex'}}>{dots}</p>
        </SliderDot>
      )
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
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
    <div>
      <Slide bg="#EDF0FF">
        <H1 align="center" fs="48px" pad="28px 0">
          Industries We Innovate
        </H1>

        <div>
          <Slider {...settings}>
            <Sector>
              <div>
                <Icon
                  src="./Images/Agriculture Icon.svg"
                  alt="Agriculture Icon"
                  width="100.16px"
                  height="100.19px"
                />
              </div>
              <P fs="24px" pad="12px 0" style={{ margin: "auto" }}>
                Agriculture
              </P>

              <button>Learn more</button>
            </Sector>
            <Sector>
              <div>
                <Icon
                  src="./Images/radar.svg"
                  alt="radar"
                  width="120.66px"
                  height="110.43px"
                />
              </div>

              <P fs="24px" pad="12px 0" style={{ margin: "auto" }}>
                Telecommunications
              </P>

              <button>Learn more</button>
            </Sector>
            <Sector>
              <div>
                <Icon
                  src="./Images/Vector.svg"
                  alt="Heart Icon"
                  width="120px"
                  height="110.33px"
                />
              </div>

              <P fs="24px" pad="12px 0" style={{ margin: "auto" }}>
                Healthcare
              </P>

              <Link to="/cybalife"><button>Learn more</button></Link>
            </Sector>
            <Sector>
              <div>
                <Icon
                  src="./Images/Energy.svg"
                  alt="Energy"
                  width="113.58"
                  height="113.64px"
                />
              </div>

              <P fs="24px" pad="12px 0" style={{ margin: "auto" }}>
                Energy Productions
              </P>

              <button>Learn more</button>
            </Sector>
            <Sector>
              <div>
                <Icon
                  src="./Images/waste.png"
                  alt="waste management"
                  width="113.58"
                  height="113.64px"
                />
              </div>

              <P fs="24px" pad="12px 0" style={{ margin: "auto" }}>
                Waste Management
              </P>

              <button>Learn more</button>
            </Sector>
            <Sector>
              <div>
                <Icon
                  src="./Images/robot.png"
                  alt="robotics"
                  width="113.58"
                  height="113.64px"
                />
              </div>

              <P fs="24px" pad="12px 0" style={{ margin: "auto" }}>
                Robotics
              </P>

              <button>Learn more</button>
            </Sector>
            
          </Slider>
        </div>
      </Slide>
    </div>
  );
};

export default Industries;
