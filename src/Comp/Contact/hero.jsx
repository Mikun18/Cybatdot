import React from "react";
import { Box, Image } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { P, H1 } from "../../Base/text";
import Form from "./Form/form.jsx";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/cybalife.png" alt="cybalife" />
      <Box contact>
        <Flex contact>
          <div>
            <H1 width="568px" fs="68px" hero cyba mt="80px">
              Talk to a Professional
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              Learn more about our Innovations and talk to us about the
              challenges you want to solve. We want to solve them with you.
            </P>
          </div>

          <div>
            <Form />
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
