import React from "react";
import { FooterCon, FooterGrid } from "../../Base/footer";
import { P } from "../../Base/text";
import { Button } from "../../Base/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <FooterCon>
        <Link to="/">
          <img src="./Images/logo.svg" alt="Cybadot Logo" width="173px" />
        </Link>

        <FooterGrid>
          <div>
            <Button pad="15px 0" blogNav>
              <b>Industries</b>
            </Button>
            <Link to="/cybalife" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" pad="5px 0" display="block">
                Healthcare
              </Button>
            </Link>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Agriculture
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Energy Productions
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              E-commerce
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Robotics
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Education
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Waste Management
            </Button>
          </div>

          <div>
            <Button pad="15px 0" blogNav>
              <b>Expertise</b>
            </Button>
            <Link to="/cyba-security" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Cyber Security
              </Button>
            </Link>
            <Link to="/reverse-engineering" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Reverse Engineering
              </Button>
            </Link>
            <Link to="/cloud-computing" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Cloud Computing
              </Button>
            </Link>
            <Link to="/ai&ml" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                AI & ML
              </Button>
            </Link>
            <Link to="/embedded-software" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Embedded Software
              </Button>
            </Link>
            <Link to="/mobile-solution" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Mobile Solutions
              </Button>
            </Link>
            <Link to="/security-testing" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Security Testing
              </Button>
            </Link>
            <Link to="/quality-assurance" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Quality Assurance
              </Button>
            </Link>
            <Link to="/web-solution" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Web Solutions
              </Button>
            </Link>
          </div>

          <div>
            <Button pad="15px 0" blogNav>
              <b>Resources</b>
            </Button>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Blog
              </Button>
            </Link>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              White Papers
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              E-books
            </Button>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Webiners
            </Button>
          </div>

          <div>
            <Button pad="15px 0" blogNav>
              <b>Company</b>
            </Button>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                About Us
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button blogNav fs="16px" display="block" pad="5px 0">
                Contact Us
              </Button>
            </Link>
            <Button blogNav fs="16px" display="block" pad="5px 0">
              Awards and Recognition
            </Button>
          </div>

          <div>
            <Button pad="15px 0" blogNav>
              <b>Address</b>
            </Button>
            <P pad="5px 0" footer fs="16px">
              502W 7th ST STE 100 Erie, PA 16502 USA
            </P>
            <P pad="5px 0" footer fs="16px">
              127 Old Gloucester Street, London, England
            </P>
            <P pad="5px 0" footer>
              Follow Us
            </P>

            <div>
              <a
                href="https://www.instagram.com/cybadot/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./Images/instagram.svg" alt="instagram" width="20" />
              </a>
              <a
                href="https://www.facebook.com/cybadot?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./Images/facebook.svg"
                  alt="facebook"
                  width="20"
                  style={{ margin: "0 10px" }}
                />
              </a>
              <a
                href="https://twitter.com/Cybadotofficial"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./Images/twitter.svg" alt="twitter" width="20" />
              </a>
              <a
                href="https://www.linkedin.com/company/cybadot/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./Images/linkedin.svg"
                  alt="linkedin"
                  width="20"
                  style={{ margin: "0 10px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/cybadot?mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer"
              >
                <img src="./Images/youtube.svg" alt="youtube" width="20" />
              </a>
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
