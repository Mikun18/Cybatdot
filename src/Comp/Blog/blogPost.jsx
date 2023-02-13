import React from "react";
import { Box, Con } from "../../Base/box";
import { Grid } from "../../Base/grid";
import { P } from "../../Base/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogPost = () => {
  return (
    <div>
      <Box>
        <Grid gtc="repeat(3, 1fr)">
          <Con margin="20px 0" >
            <img
              src="./Images/blog1.AVIF"
              alt="blog"
              style={{ width: "100%" }}
            />
            <Con blogTest>
              <P fs="24px" width="100%" pad="15px 0">
                Artificial Intelligence in Healthcare: Improving Patient
                Outcomes and Streamlining Processes
              </P>

              <P>
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </P>
            </Con>

          </Con>

          <Con margin="20px 0" blogpost>
            <img
              src="./Images/blog2.AVIF"
              alt="blog"
              style={{ width: "100%" }}
            />
            <Con blogTest>
            <P fs="24px" width="100%" pad="15px 0">
              The Evolving Threat Landscape of Cyber Attacks: What You Need to
              Know
            </P>

            <P blogNav>Read More</P>
            </Con>
          </Con>

          <Con margin="20px 0" blogPost>
            <img
              src="./Images/blog4.AVIF"
              alt="blog"
              style={{ width: "100%" }}
            />
            <Con blogTest>
            <P fs="24px" width="100%" pad="15px 0">
              Securing Your Business from Cyber Threats: Best Practices and
              Strategies
            </P>

            <P blogNav>Read More</P>
          </Con>
          </Con>

          <Con margin="20px 0" blogPost>
            <img
              src="./Images/blog5.AVIF"
              alt="blog"
              style={{ width: "100%" }}
            />
            <Con blogTest>
            <P fs="24px" width="100%" pad="15px 0">
              Artificial Intelligence: The Future is Here
            </P>

            <P pad="10px 0" blogNav>
              Read More
            </P>
            </Con>
          </Con>

          <Con margin="20px 0" blogPost>
            <img
              src="./Images/blog6.AVIF"
              alt="blog"
              style={{ width: "100%" }}
            />
            <Con blogTest>
            <P fs="24px" width="100%" pad="15px 0">
              The Impact of Artificial Intelligence on Employment and the Future
              of Work
            </P>

            <P blogNav>Read More</P>
            </Con>
          </Con>

          <Con margin="20px 0" blogPost>
            <img
              src="./Images/blog7.AVIF"
              alt="blog"
              style={{ width: "100%" }}
            />
            <Con blogTest>
            <P fs="24px" width="100%" pad="15px 0">
              The Basics of Cybersecurity: Protecting Yourself and Your Data
              Online
            </P>

            <P blogNav>Read More</P>
            </Con>
          </Con>
        </Grid>
      </Box>
    </div>
  );
};

export default BlogPost;
