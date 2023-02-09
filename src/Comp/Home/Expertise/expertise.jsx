import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "../../../Base/box";
import { H1, P } from "../../../Base/text";
import Slider from "react-slick";
import { Card, ImageText } from "./expertise";
import { Button } from "../../../Base/button";
import { SliderButton, SliderDot} from "./expertise";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const Expertise = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    dotsClass: "slick-dots bull-white",
    prevArrow: (
      <SliderButton left="-60px" bg="#EDF0FF" >
        <img
          src="./Images/prev-blue.png"
          alt="prev-button"
          style={{ width: "100%" }}
        />
      </SliderButton>
    ),
    nextArrow: (
      <SliderButton right="-60px" bg="#EDF0FF" next>
        <img
          src="./Images/next-blue.png"
          alt="next-button"
          style={{ width: "100%" }}
        />
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
          <img
            src="./Images/security.png"
            alt="Cyber Security"
            style={{ position: "relative" }}
          />
          <ImageText>Cyber Security</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              The Cybadot team is committed to network security, and they have
              created difficult and fundamental solutions for monitoring, threat
              detection, and attack prevention.
            </P>

            <Link to="/cyba-security">
              <button style={{ margin: "10% 15px", cursor: "pointer" }}>
                Learn More
              </button>
            </Link>
          </div>
        </Card>

        <Card>
          <img src="./Images/engineering.png" alt="Reverse Engineering" />
          <ImageText>Reverse Engineering</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              We acquired reverse engineering abilities because of our work on
              complex security projects, which is comparatively uncommon in the
              IT industry.
            </P>

            <Link to="/reverse-engineering">
              <button style={{ margin: "10% 15px", cursor: "pointer" }}>
                Learn More
              </button>
            </Link>
          </div>
        </Card>

        <Card>
          <img src="./Images/computing.png" alt="Cloud Computing" />
          <ImageText>Cloud Computing</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              We at Cybadot offer infrastructure development and management
              services that enable us to use networks, virtual machines, cloud
              services, and databases quickly and efficiently.
            </P>

            <Link to="/cloud-computing">
              <button style={{ margin: "6% 15px", cursor: "pointer" }}>
                Learn More
              </button>
            </Link>
          </div>
        </Card>

        <Card>
          <img
            src="./Images/Blockchain Technology.jpg"
            alt="Blockchain Technology"
          />
          <ImageText>Blockchain</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              Cybadot assists companies in utilizing the blockchain's full
              potential to produce effective and secure products.
            </P>

            <Link to="/blockchain"><button style={{ margin: "15% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
        <Card>
          <img src="./Images/AI&ML.jpg" alt="artificial intelligence" />
          <ImageText>AI&ML</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              Experts from Cybadot can assist you in implementing cutting-edge
              AI technologies to increase the intelligence of your company.
            </P>

            <Link to="/ai&ml"><button style={{ margin: "10% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
        <Card>
          <img src="./Images/Embedded software.jpg" alt="Embedded software" />
          <ImageText>Embedded software</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              The advantages of the embedded system include their portability,
              energy efficiency, small size, and real-time response.
            </P>

            <Link to="/embedded-software"><button style={{ margin: "10% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
        <Card>
          <img src="./Images/Mobile Solutions.jpg" alt="Mobile Solutions" />
          <ImageText>Mobile Solutions</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              Mobile apps make daily routines easier and more enjoyable, and
              they have become an essential part of our lives due to mobile
              devices.
            </P>

           <Link to="/mobile-solution"><button style={{ margin: "10% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
        <Card>
          <img src="./Images/Security Testing.jpg" alt="Security Testing" />
          <ImageText>Security Testing</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              Security testing conducted before deployment can identify software
              flaws. It is crucial for software that manages or stores private
              information.
            </P>

            <Link to="/security-testing"><button style={{ margin: "10% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
        <Card>
          <img src="./Images/Quaity assurance.jpg" alt="Quality assurance" />
          <ImageText>Quality Assurance</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              Security and penetration testing are among the full-stack quality
              assurance and software testing services offered by Cybadot.
            </P>

            <Link to="/quality-assurance"><button style={{ margin: "10% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
        <Card>
          <img src="./Images/Websolutions.jpg" alt="web solutions" />
          <ImageText>Web Solutions</ImageText>

          <div>
            <P width="90%" pad="0 15px" slide>
              We have a long history of offering bespoke web application
              development services utilizing the ASP.NET MVC framework at
              Cybadot.
            </P>

            <Link to="/web-solution"><button style={{ margin: "10% 15px", cursor: "pointer" }}>
              Learn More
            </button></Link>
          </div>
        </Card>
      </Slider>

      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <Button style={{ backgroundColor: "#EDF0FF", color: "#141414" }}>
          See all Solutions
        </Button>
      </div>
    </Slide>
  );
};

export default Expertise;
