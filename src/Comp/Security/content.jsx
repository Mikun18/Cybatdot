import React from "react";
import { ContentCon } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="200px 0%">
        <H1 FS="24px" pad="10px 0" cybalife>
          PASSIONATE FOR CYBERSECURITY
        </H1>
        <P width="" fs="20px" pad="15px 0" cybalife>
          The Cybadot team is committed to network security, and they have
          created difficult and fundamental solutions for monitoring, threat
          detection, and attack prevention. In addition to changing the system's
          default behavior, our security team is renowned for thorough system
          monitoring (with drivers, hooks, and so on), action blocking,
          redirections, data censorship, and many other variations. We create
          various crucial system management technologies for Windows,
          Linux/UNIX, macOS, mobile OSs, and firmware platforms.
        </P>

        <H1 FS="24px" pad="10px 0" cybalife>
          NEW GENERATIONAL SECURITY
        </H1>

        <P width="" fs="20px" pad="15px 0" cybalife>
          As more complex attacks are launched, the efficacy of legacy
          monitoring and signature-based endpoint security systems is
          decreasing. At the same time, modern threat hunting platforms based on
          pattern detection and behavior analysis rule the market. When
          detecting anomalies and attack patterns, our approach typically
          combines advanced analytics and machine learning tools while
          continuously monitoring system events and changes at the most minute
          levels. For instance, an attack can be recognized by a specific
          pattern of kernel function calls. No matter how "noisy" the actual log
          is, access to this data is necessary for a security solution to find
          the attack sequence. More system data we can gather will enable us to
          build a more efficient platform. Cybadot has assembled a very
          representative set of these “detection points.”
        </P>

        <H1 FS="24px" pad="10px 0" cybalife>
          PROTECTION OF DATA
        </H1>

        <P width="" fs="20px" pad="15px 0" cybalife>
          A data protection system must include access control, rights
          management, and encryption. From a second virtual file system level
          with corresponding representation restrictions to different permission
          sets embedded directly into a document, Cybadot has implemented a
          variety of intelligent access management technologies. A strict set of
          modern security standards, including corresponding exchange protocol,
          architecture, storage, and other specifications, must also be followed
          when developing encryption systems. Cybadot continuously monitors
          current best practices and algorithms to create high-performance and
          dependable solutions.
        </P>
      </ContentCon>
    </div>
  );
};

export default Content;
