import React from "react";
import { Flex } from "../../Base/flex";
import { Box, Rect } from "../../Base/box";
import { P, H1 } from "../../Base/text";
import { Button } from "../../Base/button";
import { Design } from "../../Base/design";

const Hero = () => {
  return (
    <section>
      <Box>
        <Flex>
          <div>
            <H1 width="568px" fs="68px" hero>
              Artificial Intelligence-
              <span style={{ color: "#0A2493" }}>driven Solutions</span>
            </H1>

            <P width="443px" fs="18px" pad="28px 0">
              Our mission is to build innovative solutions with excellence and
              cutting-edge technology that provide the highest-quality and most
              reliable services across all sectors.
            </P>

            <Button>Get in Touch</Button>
          </div>

          <div>
            <img
              src="./Images/hero-image.png"
              alt="hero"
              style={{ width: "100%", position:"relative"}}
            />
            <Design pry src="./Images/Polygon 2.png" alt="Polygon design" width="750px"/>
            <Design sec src="./Images/Polygon 3.png" alt="Polygon design" width="400px"/>
            <Design ter src="./Images/Polygon 4.png" alt="Polygon design" width="250px"/>
            {/* <img
              src="./Images/Polygon 2.png"
              alt="Polygon design"
              style={{
                width: "750px",
                position: "absolute",
                zIndex: "-1",
                top: "0",
                right: "0",
              }}
            /> */}
          </div>
        </Flex>
      </Box>

      <Box>
        <Flex second>
          <div>
            <Rect
              width="221.82px"
              height="242.18px"
              left="508.18px"
              top="1054.61px"
              primary
            />
            <img src="./Images/Mask group.png" alt="mask group" style={{ width: "100%" }}/>
          </div>

          <div>
            <H1 width="470px" fs="54px" pad="0 28px" hero>
              Innovative{" "}
              <span style={{ color: "#0A2493" }}>problem-solving</span>
            </H1>

            <P width="455px" fs="18px" pad="28px" primary>
              Cybadot Technologies is an artificial intelligence company founded
              in Lagos in 2018. which now has its headquarters in Philadelphia,
              Pennsylvania, USA. Based on our track record, Cybadot has swiftly
              established itself as the worldwide leader in developing
              problem-solving solutions. Our mission is to build innovative
              solutions with excellence and cutting-edge technology that provide
              the highest-quality and most reliable services across all sectors.
            </P>

            <Button margin="0 28px">Learn More</Button>
          </div>
        </Flex>
      </Box>
    </section>
  );
};

export default Hero;
