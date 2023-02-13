import React from "react";
import { Image } from "../../Base/box";
import { H1, P } from "../../Base/text";
import { Box } from "../../Base/box";
import { Flex } from "../../Base/flex";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/Header.AVIF" alt="blog" blog height="400px"/>

      <Box heroblog>
        <H1 width="493px" fs="32px" cyba>Cybadot Blog</H1>
            <Flex blog>
            <Box blog bg="white">
                <P fs="16px" width="493px">Blog</P>
                <H1 width="493px" pad="15px 0" blog>
                Artificial Intelligence in Healthcare: Improving Patient Outcomes
                and Streamlining Processes
                </H1>

                <P width="493px" pad="15px 0px" blog>
                Artificial Intelligence (AI) has the potential to revolutionize
                healthcare, improving patient outcomes and transforming the way
                that healthcare services are delivered. From disease diagnosis to
                personalized medicine, AI has the power to transform the lives of
                patients, healthcare providers, and healthcare systems around the
                world.
                </P>
            </Box>

            <div>
                <Image src="./Images/Frame 18.png" alt="blog" heroblog/>
            </div>
            </Flex>
      </Box>
    </div>
  );
};

export default Hero;
