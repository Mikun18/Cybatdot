import React from "react";
import { ContentCon } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="200px 0">
        <P width="" fs="20px" pad="15px 0" cybalife>
          Experts from Cybadot can assist you in implementing cutting-edge AI
          technologies to increase the intelligence of your company. We offer AI
          development services to businesses in various sectors, including
          remote sensing, healthcare, and education. Machine learning and deep
          learning solutions can analyze and process large amounts of data
          quickly and continuously. With AI, companies can reduce operational
          costs, automate routine activities, and let their employees focus on
          tasks that require out-of-the-box thinking.
        </P>

        <H1 fs="24px" pad="10px 0" cybalife>
          AREAS WHERE WE EXCEL IN AI
        </H1>
        <P width="" fs="20px" pad="15px 0" cybalife>
          We are the best artificial intelligence software development company
          with practical experience in AI that interests you. Such as:
        </P>
        <div>
          <ul>
            <li>
              <b>Computer Vision</b>: to recognize objects in images and
              videos, detect faces and actions, and enable vehicle autopilot
            </li>
            <li>
              <b>Natural Language Processing</b>: to translate texts,
              create voice assistants, and communicate with customers
            </li>
            <li>
              <b>Time Series Analysis</b>: to extract valuable statistics,
              insights, and forecasts from big data
            </li>
            <li>
              <b>Content Generation</b>: to create new texts, images,
              audio files, and videos
            </li>
            <li>
              <b>Data Analytics</b>: to structure data, analyze
              statistics, and detect patterns
            </li>
          </ul>
        </div>
      </ContentCon>
    </div>
  );
};

export default Content;
