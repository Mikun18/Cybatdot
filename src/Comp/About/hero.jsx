import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/about-hero.AVIF" alt="about-hero" about/>
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              AI-driven Soluions
            </H1>

            <P width="669px" fs="20px" pad="28px 0" about color="white">
              Cybadot Technologies is an artificial intelligence company founded
              in Lagos in 2018. which now has its headquarters in Philadelphia,
              Pennsylvania, USA. Based on our track record, Cybadot has swiftly
              established itself as the worldwide leader in developing
              problem-solving solutions. Our mission is to build innovative
              solutions with excellence and cutting-edge technology that provide
              the highest-quality and most reliable services across all sectors.
            </P>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
