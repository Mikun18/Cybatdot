import React from "react";
import { ContentCon } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="200px 0%">
        <H1 FS="24px" pad="10px 0" cybalife>
          WE ARE PASSIONATE ABOUT QUALITY
        </H1>
        <P width="" fs="20px" pad="15px 0" cybalife>
          Security and penetration testing are among the full-stack quality
          assurance and software testing services offered by Cybadot. We fight
          for excellence. QA is a crucial component of the development lifecycle
          because of this. With many years of QA experience under our belts, we
          can train your staff and provide advice on setting up an internal QA
          department.
        </P>

        <P width="" fs="20px" pad="15px 0" cybalife>
          Our specialists receive individual certifications along with strong
          internal mentoring and knowledge-sharing practices. Every Cybadot QA
          expert has an ISTQB certification, beginning with the Senior/Test
          Designer. In addition to procedures and individuals, tools and
          equipment are important. The testing labs at Cybadot are equipped with
          efficient, contemporary tools, such as sets of specialized tools for
          testing mobile solutions, DevOps tools and techniques for creating
          sizable virtual environments to test sizable solutions, and
          specialized QA tools and frameworks for automated and other types of
          testing.
        </P>
        
      </ContentCon>
    </div>
  );
};

export default Content;
