import React from "react";
import { Box, Image } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { P, H1 } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/cybalife.png" alt="cybalife" />
      <Box cyba>
        <Flex cyba>
          <div>
            <H1 width="568px" fs="68px" hero cyba mt="80px">
              Cybalife:
            </H1>
            <H1 width="568px" fs="68px" hero cyba>
              AI for Healthcare
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              Cybalife tackles severe problems and provides a complete diagnosis
              for chronic conditions with the ability to perform huge
              computations and manipulate omics and electronic health record
              data.{" "}
            </P>

            <Button cyba>Get the app</Button>
          </div>

          <div>
            <img
              src="./Images/cyba-hero.png"
              alt="hero"
              style={{
                width: "100%",
                paddingTop: "80px",
                borderBottomLeftRadius: "100px",
              }}
            />
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
