import React from 'react'
import { FooterCon, FooterGrid } from '../../Base/footer'
import { P } from '../../Base/text'

const Footer = () => {
  return (
    <div>
        <FooterCon>
            <img src="./Images/logo.svg" alt="Cybadot Logo" width="173px"/>

            <FooterGrid>
                <div>
                    <P pad="15px 0"><b>Industries</b></P>
                    <P pad="5px 0" fs="16px">Healthcare</P>
                    <P>Agriculture</P>
                    <P pad="5px 0">Energy Productions</P>
                    <P>E-commerce</P>
                    <P pad="5px 0">Robotics</P>
                    <P>Education</P>
                    <P pad="5px 0">Waste Management</P>
                </div>

                <div>
                    <P pad="15px 0"><b>Expertise</b></P>
                    <P pad="5px 0">Cyber Security</P>
                    <P>Reverse Engineering</P>
                    <P pad="5px 0">Cloud Computing</P>
                    <P>AI & ML</P>
                    <P pad="5px 0">Embedded Software</P>
                    <P>Mobile Solutions</P>
                    <P pad="5px 0">Security Testing</P>
                    <P>Quality Assurance</P>
                    <P pad="5px 0">Web Solutions</P>
                </div>

                <div>
                    <P pad="15px 0"><b>Resources</b></P>
                    <P pad="5px 0">Blog</P>
                    <P>White Papers</P>
                    <P pad="5px 0">E-books</P>
                    <P>Webiners</P>
                </div>

                <div>
                    <P pad="15px 0"><b>Company</b></P>
                    <P pad="5px 0">About Us</P>
                    <P>Contact Us</P>
                    <P pad="5px 0">Awards and Recognition</P>
                </div>

                <div>
                    <P pad="15px 0"><b>Address</b></P>
                    <P pad="5px 0">502W 7th ST STE 100 Erie, PA 16502 USA</P>
                    <P>Follow Us</P>
                </div>
            </FooterGrid>

            <div style={{textAlign:"center", fontSize:"18px"}}>
                <p>&copy; Copyright 2023 Cybadot Technologies, All Rights Reserved. Privacy Policy</p>
            </div>
        </FooterCon>
    </div>
  )
}

export default Footer