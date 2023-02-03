import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/cloud.png" alt="cloud computing" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Cloud Computing Solutions
            </H1>

            <P width="443px" fs="18px" pad="28px 0" cyba>
              We at Cybadot offer infrastructure development and management
              services that enable us to use networks, virtual machines, cloud
              services, and databases quickly and efficiently.
            </P>

            <Button cyba>Book a demo</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
