import React from "react";
import { ContentCon } from "../../Base/box";
import { P, H1 } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="100px 26%">
        <H1 FS="24px" pad="10px 0">ABOUT CYBALIFE</H1>
        <P width="794px" fs="20px" pad="15px 0">
          Cybalife tackles severe problems and provides a complete diagnosis for
          chronic conditions with the ability to perform huge computations and
          manipulate omics and electronic health record data. The multi-omics
          analysis allows the identification of associated factors from
          different biological processes. Such as gene expression, protein
          synthesis, and post-translational modifications, cellular metabolic
          processes, glycosylation, etc., By maximizing the available
          information to increase the possibility of identifying the root causes
          of disease.
        </P>{" "}
        <P width="794px" fs="20px" pad="15px 0">
          And the addition of an electronic health record (EHR). Real-time,
          patient-centered records that contain details of the medical history,
          medications, allergies, radiology images, treatment plans, and
          laboratory results of patients. It will allow effective diagnoses of
          patients, reduces medical errors, and provides safer care. The process
          is crowded with technology that enables machines to solve many complex
          decision-making tasks.
        </P>{" "}
        <P width="794px" fs="20px" pad="15px 0">
          Cybalife is a three-variation solution. One of them is that of the
          smartphone as a mobile application. Cybalife leverages mobile sensors
          to provide a point of care (POC). The POC will allow easy generation
          of diagnostic results quickly so that appropriate treatment can be
          implemented, leading to an improved clinical or economic outcome.
        </P>{" "}
        <P width="794px" fs="20px" pad="15px 0">
          In general, Cybalife has one of its roots in the epidemiological
          modeling approach, such as SIR, SEIR, and SEAICRloop. Epidemiological
          modeling uses mathematical, statistical, and computational tools to
          study the spread of infectious pathogens in host populations. It uses
          data and hypotheses describing the demographic processes,
          environmental characteristics, transmission opportunities, and health
          consequences of diseases. It has been used to characterize risks. For
          instance, forecasting COVID-19 and its impact on healthcare supports
          and justifies the adoption of measures, guides the optimal deployment
          of vaccines, and informs many aspects of our lives with the virus.
        </P>
      </ContentCon>
    </div>
  );
};

export default Content;
