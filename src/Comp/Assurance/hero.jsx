import React from "react";
import { Box, Image } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image
        src="./Images/quality-hero.AVIF"
        alt="quality assurance"
        security
      />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="568px" fs="68px" mt="80px" cyba>
              Quality Assurance
            </H1>

            <P width="443px" fs="18px" pad="28px 0" cyba>
              Cybadot offers penetration testing and vulnerability assessment on
              mobile platforms (iOS, Android), client-server systems, SaaS
              platforms, and blockchain smart contracts.
            </P>

            <Button cyba>Contact Us</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
