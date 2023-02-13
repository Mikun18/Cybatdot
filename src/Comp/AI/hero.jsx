import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/ai-hero.AVIF" alt="ai&ml" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Artificial Intelligence & Machine Learning
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              We offer AI development services to businesses in various sectors,
              including remote sensing, healthcare, and education. Machine
              learning and deep learning solutions can analyze and process large
              amounts of data quickly and continuously.
            </P>

            <Button cyba>Contact Us</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
