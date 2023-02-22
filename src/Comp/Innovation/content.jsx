import React from "react";
import { Box, Con } from "../../Base/box";
import { Grid } from "../../Base/grid";
import { P, H1 } from "../../Base/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  return (
    <div>
      <Box>
        <Grid gtc="repeat(3, 1fr)">
          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12px" pad="20px">
            <img src="./Images/healthcare-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Healthcare
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              Cybalife tackles severe problems and provides a complete diagnosis
              for chronic conditions with the ability to perform huge
              computations and manipulate omics and electronic health record
              data.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>

          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12px" pad="20px">
            <img src="./Images/energy-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Energy Production
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              At Cybadot, we believe that African countries can fill the energy
              production gap left by Russia's invasion of Ukraine.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>
          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12p" pad="20px">
            <img src="./Images/ecommerce-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Ecommerce
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              Cybadot also plans to explore the provision of APIs for business
              operations by creating new business opportunities and improving
              existing products, systems, and operations in a business
              ecosystem.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>
          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12p" pad="20px">
            <img src="./Images/agric-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Agriculture
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              Cybadot will focus on innovative agriculture and investigate the
              links between Innovation, productivity, and environmental
              sustainability.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>
          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12p" pad="20px">
            <img src="./Images/tele-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Telecommunications
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              We want to connect as many countries with broadband by investing
              in developing capacities in next-generational networks, IoT, and
              clean energy technologies. We are working to unleash the next wave
              of Innovation in data. We want to fill the gap as the world's
              fastest-growing start-up and the leader of the global
              semiconductor market in 2030.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>

          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12p" pad="20px">
            <img src="./Images/edu-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Education
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              Cybadot plans to explore the academic sector by starting with a
              virtual laboratory because we see that using learning technology
              applications has become a fundamental component in light of the
              digital transformation in the teaching and learning process.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>

          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12p" pad="20px">
            <img src="./Images/robot-inno.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Robotics
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              Cybadot has established itself as the worldwide leader in
              developing problem-solving solutions by using the latest
              technologies, such as artificial intelligence, the Internet of
              Things (IoT), 5th generation mobile network(5G), blockchain, cyber
              security (privacy-enhancing technologies), virtual reality (V.R.),
              and augmented reality (A.R.).
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>

          <Con bs="3px 10px 29px rgba(38, 59, 94, 0.1)" br="12p" pad="20px">
            <img src="./Images/waste.AVIF" alt="health" />
            <H1 color="#0A2493" fs="24px" sec pad="10px 0">
              Waste Management
            </H1>
            <P width="100%" fs="16px" pad="10px 0" innovate>
              There have been advancements in technological waste management
              that are put into practice using IoT and other practices, which
              have helped greatly in all corners of the world.
            </P>
            <FontAwesomeIcon icon={faArrowRight} />
          </Con>
        </Grid>
      </Box>
    </div>
  );
};

export default Content;
