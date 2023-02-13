import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image
        src="./Images/security-hero.AVIF"
        alt="security testing"
        security
      />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Security Testing
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
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
