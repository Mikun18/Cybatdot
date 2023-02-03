import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/reverse.png" alt="reverse engineering" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>Reverse Engineering Solutions</H1>

            <P width="443px" fs="18px" pad="28px 0" cyba>
              We acquired reverse engineering abilities because of our work on
              complex security projects, which is comparatively uncommon in the
              IT industry.
            </P>

            <Button cyba>Book a demo</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
