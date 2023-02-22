import React from "react";
import { Box } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Hero = () => {
  return (
    <div>
      <Box bg="#0A2493" align="center">
        <H1 cyba fs="48px" pad="10px 0">
          Our Innovations
        </H1>
        <P cyba fs="24px">
        Connecting every industry with innovation solution
        </P>
      </Box>
    </div>
  );
};

export default Hero;
