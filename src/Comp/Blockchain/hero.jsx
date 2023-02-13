import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/Blockchain-hero.AVIF" alt="blockchain" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Blockchain Solutions
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              Cybadot assists companies in utilizing the blockchain's full
              potential to produce effective and secure products. The future
              lies with blockchains.
            </P>

            <Button cyba>Contact us</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
