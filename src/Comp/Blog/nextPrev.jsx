import React from "react";
import { Con } from "../../Base/box";
import { P } from "../../Base/text";
import { Flex } from "../../Base/flex";
import { Button } from "../../Base/button";

const NextPrev = () => {
  return (
    <div>
      <Con margin="50px 140px" bt="1px solid rgba(0, 0, 0, 0.5)" pad="15px">
        <Flex>
            <Flex>
                <Con  bg="#0A2493" br="50%" pad="8px 15px"><P cyba>1</P></Con>
                <P pad="8px 20px">2</P>
                <P>3</P>
            </Flex>

            <Con>   
                <Button sec>Next Page</Button>
            </Con>
        </Flex>
      </Con>
    </div>
  );
};

export default NextPrev;
