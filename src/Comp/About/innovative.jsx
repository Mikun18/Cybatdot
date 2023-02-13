import React from "react";
import { Box, Con } from "../../Base/box";
import { Flex } from "../../Base/flex";
import { H1, P } from "../../Base/text";

const Innovative = () => {
  return (
    <div>
      <Box bg="#EDF0FF" primary>
        <Flex second>
          <Con>
            <img src="./Images/innovative.AVIF" alt="innovative solutions" style={{width:"100%"}}/>
          </Con>

          <Con>
            <H1 width="480px" fs="48px" pad="20px 0">We build Innovative solutions</H1>

            <P width="556px" fs="20px" about>
              Cybadot is working on a grand-scale project called Cybalife. A
              hybrid robotic health solution for individuals and healthcare
              providers powered by artificial intelligence that provides
              accurate diagnosis, prescriptions, surgical assistance, and
              general well-being for both young and old.
            </P>
          </Con>
        </Flex>
      </Box>
    </div>
  );
};

export default Innovative;
