import React from "react";
import { ContentCon } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="200px 0">
        <P width="" fs="20px" pad="15px 0" cybalife>
          We at Cybadot offer infrastructure development and management services
          that enable us to use networks, virtual machines, cloud services, and
          databases quickly and efficiently. We can help you with all aspects of
          cloud computing, including infrastructure design and development,
          security audits, and performance reporting. Amazon Web Services,
          Google Cloud Platform, Microsoft Azure, and bare metal cloud servers
          are just a few popular cloud platforms that our skilled cloud
          engineers work with.
        </P>

        <H1 FS="24px" pad="10px 0" cybalife>
          NO COMPLEXITY
        </H1>
        <P width="" fs="20px" pad="15px 0" cybalife>
          No bottleneck exists for our cloud management. Complex tasks like
          creating a hybrid infrastructure, restricting access to cloud
          resources, and ensuring continuous integration are all part of
          managing cloud infrastructure service. Such work necessitates a wide
          range of abilities, relevant experience, and in-depth technical
          expertise. With projects of any complexity, you can trust the Cybadot
          team to maximize all processes and spare your resources. Among the
          services we offer for managing cloud infrastructure are: Cloud
          infrastructure design and development, Deployment automation, support
          and maintenance, Infrastructure monitoring, security audits
          (DevSecOps), devOps consulting and transformation, continuous
          integration and continuous delivery implementation, performance
          reporting and optimization, container orchestration, data protection
          solutions: backup, replication, encryption, secrets management,
          identity and access management
        </P>
      </ContentCon>
    </div>
  );
};

export default Content;
