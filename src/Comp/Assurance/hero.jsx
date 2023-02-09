import React from "react";
import { Box, Image } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/cybasecurity.png" alt="cyba security" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="568px" fs="68px" mt="80px" cyba>
              Quality Assurance
            </H1>

            <P width="443px" fs="18px" pad="28px 0" cyba>
              Security and penetration testing are among the full-stack quality
              assurance and software testing services offered by Cybadot.
            </P>

            <Button cyba>Book a demo</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
