import React from "react";
import { P, H1 } from "../../../Base/text";
import { Slide } from "../../../Base/box";
import { Flex } from "../../../Base/flex";
import { Button } from "../../../Base/button";
import { NewsCard } from "./newsletter";
import Slider from "react-slick";

const Newsletter = () => {
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
      <Slide news>
        <P>What's new?</P>

        <Flex>
          <H1 fs="48px" width="623px">
            Keep up to date with our{" "}
            <span style={{ color: "#0A2493" }}>latest news and events</span>
          </H1>

          <Button sec>Load more</Button>
        </Flex>

        <div style={{ margin: "40px 0" }}>
          <Slider {...settings}>
            <NewsCard>
              <img src="./Images/award.png" alt="Award" />

              <P fs="24px" width="327px" pad="25px 0px" slide>
                Cybadot Technologies Secures $50M Send Funding to Further
                Cybalife
              </P>
              <P fs="18px" width="305px" slide>
                Cybalife tackles severe problems and provides a complete
                diagnosis for chronic conditions with the ability to perform
                huge computations and manipulate omics...
              </P>

              <button>Read More</button>
            </NewsCard>

            <NewsCard>
              <img src="./Images/patterns.png" alt="Patient" />

              <P fs="24px" width="327px" pad="25px 0px" slide>
                AI analyzes patterns in patient data
              </P>
              <P fs="18px" width="305px" slide>
                AI algorithms analyzes large amounts of patient data, such as
                medical records, lab results, and imaging studies, to
                increase...
              </P>

              <button>
                Read More
              </button>
            </NewsCard>

            <NewsCard>
              <img src="./Images/healthcare.png" alt="HealthCare" />

              <P fs="24px" width="327px" pad="25px 0px" slide>
                4 Ways Cybalife is transforming the healthcare industry
              </P>
              <P fs="18px" width="305px" slide>
                AI has the potential to greatly improve the efficiency and
                effectiveness of the healthcare industry, leading...
              </P>

              <button>Read More</button>
            </NewsCard>

            <NewsCard>
              <img src="./Images/award.png" alt="Award Image" />

              <P fs="24px" width="327px" pad="25px 0px" slide>
                Cybadot Technologies Secures $50M Send Funding to Further
                Cybalife
              </P>
              <P fs="18px" width="305px" slide>
                Cybalife tackles severe problems and provides a complete
                diagnosis for chronic conditions with the ability to perform
                huge computations and manipulate omics...
              </P>

              <button>Read More</button>
            </NewsCard>
          </Slider>
        </div>
      </Slide>
    </div>
  );
};

export default Newsletter;
