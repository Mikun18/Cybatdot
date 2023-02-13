import React from "react";
import { FooterCon, FooterGrid } from "../../Base/footer";
import { P } from "../../Base/text";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <FooterCon>
        <Link to="/"><img src="./Images/logo.svg" alt="Cybadot Logo" width="173px" /></Link>

        <FooterGrid>
          <div>
            <P pad="15px 0">
              <b>Industries</b>
            </P>
            <Link to="/cybalife" style={{ textDecoration: "none" }}>
              <P pad="5px 0" fs="16px">
                Healthcare
              </P>
            </Link>
            <P>Agriculture</P>
            <P pad="5px 0">Energy Productions</P>
            <P>E-commerce</P>
            <P pad="5px 0">Robotics</P>
            <P>Education</P>
            <P pad="5px 0">Waste Management</P>
          </div>

          <div>
            <P pad="15px 0">
              <b>Expertise</b>
            </P>
            <Link to="/cyba-security" style={{ textDecoration: "none" }}>
              <P pad="5px 0">Cyber Security</P>
            </Link>
            <Link to="/reverse-engineering" style={{ textDecoration: "none" }}>
              <P>Reverse Engineering</P>
            </Link>
            <Link to="/cloud-computing" style={{ textDecoration: "none" }}>
              <P pad="5px 0">Cloud Computing</P>
            </Link>
            <Link to="/ai&ml" style={{ textDecoration: "none" }}><P>AI & ML</P></Link>
            <Link to="/embedded-software" style={{ textDecoration: "none" }}><P pad="5px 0">Embedded Software</P></Link>
            <Link to="/mobile-solution" style={{ textDecoration: "none" }}><P>Mobile Solutions</P></Link>
            <Link to="/security-testing" style={{ textDecoration: "none" }}><P pad="5px 0">Security Testing</P></Link>
            <Link to="/quality-assurance" style={{ textDecoration: "none" }}><P>Quality Assurance</P></Link>
            <Link to="/web-solution" style={{ textDecoration: "none" }}><P pad="5px 0">Web Solutions</P></Link>
          </div>

          <div>
            <P pad="15px 0">
              <b>Resources</b>
            </P>
           <Link to="/blog" style={{ textDecoration: "none" }}><P pad="5px 0">Blog</P></Link>
            <P>White Papers</P>
            <P pad="5px 0">E-books</P>
            <P>Webiners</P>
          </div>

          <div>
            <P pad="15px 0">
              <b>Company</b>
            </P>
            <Link to="/about" style={{ textDecoration: "none" }}><P pad="5px 0">About Us</P></Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <P>Contact Us</P>
            </Link>
            <P pad="5px 0">Awards and Recognition</P>
          </div>

          <div>
            <P pad="15px 0">
              <b>Address</b>
            </P>
            <P pad="5px 0">502W 7th ST STE 100 Erie, PA 16502 USA</P>
            <P pad="5px 0">127 Old Gloucester Street, London, England</P>
            <P pad="5px 0">Follow Us</P>

            <div>
            <a href="https://www.instagram.com/cybadot/" target="_blank" rel='noreferrer'><img src="./Images/instagram.svg" alt="instagram" width="20" /></a>
              <a href="https://www.facebook.com/cybadot?mibextid=ZbWKwL" target="_blank" rel='noreferrer'><img src="./Images/facebook.svg" alt="facebook" width="20" style={{margin:"0 10px"}}/></a>
              <a href="https://twitter.com/Cybadotofficial" target="_blank" rel='noreferrer'><img src="./Images/twitter.svg" alt="twitter" width="20" /></a>
              <a href="https://www.linkedin.com/company/cybadot/" target="_blank" rel='noreferrer'><img src="./Images/linkedin.svg" alt="linkedin" width="20" style={{margin:"0 10px"}}/></a>
              <a href="https://www.facebook.com/cybadot?mibextid=ZbWKwL" target="_blank" rel='noreferrer'><img src="./Images/youtube.svg" alt="youtube" width="20" /></a>
            </div>
          </div>
        </FooterGrid>

        <div style={{ textAlign: "center", fontSize: "18px" }}>
          <p>
            &copy; Copyright 2023 Cybadot Technologies, All Rights Reserved.
            Privacy Policy
          </p>
        </div>
      </FooterCon>
    </div>
  );
};

export default Footer;
