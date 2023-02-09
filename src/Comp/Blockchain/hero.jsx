import React from 'react'
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
        <Image src="./Images/cybalife.png" alt="blockchain" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>Blockchain Solutions</H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              We acquired reverse engineering abilities because of our work on
              complex security projects, which is comparatively uncommon in the
              IT industry.
            </P>

            <Button cyba>Book a demo</Button>
          </div>
        </Flex>
      </Box>
    </div>
  )
}

export default Hero