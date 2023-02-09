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
            <P>AI & ML</P>
            <P pad="5px 0">Embedded Software</P>
            <P>Mobile Solutions</P>
            <P pad="5px 0">Security Testing</P>
            <P>Quality Assurance</P>
            <P pad="5px 0">Web Solutions</P>
          </div>

          <div>
            <P pad="15px 0">
              <b>Resources</b>
            </P>
            <P pad="5px 0">Blog</P>
            <P>White Papers</P>
            <P pad="5px 0">E-books</P>
            <P>Webiners</P>
          </div>

          <div>
            <P pad="15px 0">
              <b>Company</b>
            </P>
            <P pad="5px 0">About Us</P>
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
              <img src="./Images/instagram.svg" alt="instagram" width="20" />
              <img src="./Images/facebook.svg" alt="facebook" width="20" style={{margin:"0 10px"}}/>
              <img src="./Images/twitter.svg" alt="twitter" width="20" />
              <img src="./Images/linkedin.svg" alt="linkedin" width="20" style={{margin:"0 10px"}}/>
              <img src="./Images/youtube.svg" alt="youtube" width="20" />
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
