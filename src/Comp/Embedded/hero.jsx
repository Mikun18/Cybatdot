import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image
        src="./Images/embedded-hero.AVIF"
        alt="embedded software"
        security
      />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Embedded System
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              We provide the following embedded and IoT solutions: Embedded
              software and integrations; cross-platform software for embedded
              devices; device drivers and board support packages and much more.
            </P>

            <Button cyba>Contact Us</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
