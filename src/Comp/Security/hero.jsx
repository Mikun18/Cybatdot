import React from "react";
import { Box, Image } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/cybasecurity.png" alt="cyba security" security/>
      <Box cyba>
        <Flex>
          <div>
            <H1 width="568px" fs="68px" mt="80px" cyba>Cyber Security Solutions</H1>

            <P width="443px" fs="18px" pad="28px 0" cyba>
              The Cybadot team is committed to network security, and they have
              created difficult and fundamental solutions for monitoring, threat
              detection, and attack prevention.
            </P>

            <Button cyba>Book a demo</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
