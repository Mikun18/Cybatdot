import React from "react";
import { Image, Box } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";

const Hero = () => {
  return (
    <div>
      <Image src="./Images/web-hero.AVIF" alt="web solutions" security />
      <Box cyba>
        <Flex>
          <div>
            <H1 width="708px" fs="68px" mt="80px" cyba>
              Web Solutions
            </H1>

            <P width="443px" fs="20px" pad="28px 0" cyba>
              We have a long history of offering bespoke web application
              development services utilizing the ASP.NET MVC framework at
              Cybadot. Our developers use this framework to create business- and
              consumer-oriented web solutions.
            </P>

            <Button cyba>Contact Us</Button>
          </div>
        </Flex>
      </Box>
    </div>
  );
};

export default Hero;
