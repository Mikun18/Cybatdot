import React from "react";
import { ContentCon } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="200px 0">
        <P width="" fs="20px" pad="15px 0" cybalife>
          Security testing conducted before deployment can identify software
          flaws. It is crucial for software that manages or stores private
          information. On the other hand, maintaining an internal security
          testing team can be prohibitively expensive and require extensive
          knowledge and skill. Cybadot offers penetration testing and
          vulnerability assessment on mobile platforms (iOS, Android),
          client-server systems, SaaS platforms, and blockchain smart contracts.
        </P>

        <P width="" fs="20px" pad="15px 0" cybalife>
          After all, we give you a thorough report on all testing activities
          carried out, a neutral and unbiased evaluation of the security of your
          system, suggestions for preventing data loss, advice on how to
          strengthen your cybersecurity, and assurances of compliance with rules
          standards, the discovery of known and zero-day vulnerabilities, expert
          advice from ethical hackers, detailed recommendations on how to fix
          detected issues and improve the tested system, and stress testing
          before important events (conferences, hackathons, ICOs, etc.)
        </P>
      </ContentCon>
    </div>
  );
};

export default Content;
