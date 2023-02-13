import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/mobile-hero.AVIF" alt="mobile solutions" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Mobile Solutions
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              At Cybadot, our passion for cybersecurity is unmatched. Our iOS
              and Android specialists create MAM/MDM platforms that are
              enterprise-level and provide mobile security, data protection,
              mobile synchronization, and other solutions.
            </P>

            <Button cyba>Contact Us</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
