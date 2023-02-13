import React from "react";
import { Box, Con } from "../../Base/box";
import { H1, P } from "../../Base/text";
import { Flex } from "../../Base/flex";

const Story = () => {
  return (
    <div>
      <Box cyba mt="150px">
        <Flex>
          <Con>
            <H1 pad="20px 0">Our Story</H1>
            <P width="463px" fs="20px" about>
              Cybadot Technologies is an artificial intelligence company founded
              in Lagos in 2018. which now has its headquarters in Philadelphia,
              Pennsylvania, USA. The company has been nominated as the most
              promising artificial intelligence service provider in 2022 by the
              CIO Review in California. Cybadot has swiftly established itself
              as the worldwide leader in developing problem-solving solutions.{" "}
            </P>
          </Con>

          <Con margin="">
            <img src="./Images/frame 50.AVIF" alt="story" style={{width:"100%"}}/>
          </Con>
        </Flex>
      </Box>
    </div>
  );
};

export default Story;
