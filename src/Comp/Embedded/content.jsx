import React from "react";
import { ContentCon } from "../../Base/box";
import { H1, P } from "../../Base/text";

const Content = () => {
  return (
    <div>
      <ContentCon pad="200px 0">
        <P width="" fs="20px" pad="15px 0" cybalife>
          The advantages of the embedded system include their portability,
          energy efficiency, small size, and real-time response. But these
          advantages frequently come at the expense of difficulties like
          incompatibility, connectivity and speed restrictions, increased system
          power consumption, and inadequate data and device protection.
        </P>

        <P width="" fs="20px" pad="15px 0" cybalife>
          Embedded and Internet of Things (IoT) device communication can power
          various systems, from home appliances to smart cities. However, the
          use of embedded and IoT devices depends on how well they communicate
          with us and with each other.
        </P>

        <P width="" fs="20px" pad="15px 0" cybalife>
          We provide the following embedded and IoT solutions: Embedded software
          and integrations; cross-platform software for embedded devices; device
          drivers and board support packages; Machine-to-machine solutions;
          System-on-a-chip software; firmware for storage and boot loader
          devices; security layer implementations
        </P>

        <H1 fs="24px" pad="10px 0" cybalife>
          SECURITY-ORIENTED SOFTWARE AND FIRMWARE
        </H1>
        <P width="" fs="20px" pad="15px 0" cybalife>
          IoT and embedded devices can be compromised by hackers using a variety
          of methods, including packet injection, denial of service,
          man-in-the-middle attacks, replay attacks, and others. We can reduce
          these risks and safeguard your devices on four different levels
          because our business is focused on cybersecurity:
        </P>
        <div>
          <ul>
            <li>
              Obfuscating code, using safe stack and memory operations,
              validating variable initialization, and erasing data traces all
              contribute to code security during compilation.
            </li>
            <li>
              By verifying the binary code and data integrity, spotting
              debuggers, using monitoring software, and engaging in other
              intrusive activities, you can safeguard the solution while it is
              being used.
            </li>
            <li>
              Encryption (and partial decryption on demand at runtime), hardware
              identification, digital signatures for binary code, and routine
              security updates all help to guarantee firmware integrity.
            </li>
            <li>
              Perform penetration testing, critical code fuzzing, and source
              code security audits for software.
            </li>
          </ul>
        </div>
      </ContentCon>
    </div>
  );
};

export default Content;
