import React from "react";
import { H1, P } from "../../Base/text";
import { Button } from "../../Base/button";
import { Box, Rect } from "../../Base/box";
import { Flex } from "../../Base/flex";

const Collaborate = () => {
  return (
    <section style={{position:"relative"}}>
      <Box>
        <Flex>
          <div>
            <H1 width="423px" fs="48px">
              We are ready to <span style={{ color: "#0A2493" }}>collaborate and co-innovate</span>
            </H1>

            <P width="381px" fs="18px" pad="28px 0px">
              AI Cybadot, we are available to network, collaborate and
              co-innovate ideas.
            </P>

            <Button>Get in touch</Button>
          </div>

          <div style={{position:"relative"}}>
            <Rect width="177px" height="193px" right="450px" top="80px" />
            <img src="./Images/collaborate.png" alt="Collaborate" style={{width: "100%"}}/>
          </div>
        </Flex>
      </Box>
    </section>
  );
};

export default Collaborate;
