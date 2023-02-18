import React from 'react';
import {Box, Con} from "../../Base/box.js"
import {Grid} from "../../Base/grid"
import { Card } from '../Home/Expertise/expertise.js';
import { ImageText } from '../Home/Expertise/expertise.js';
import { H1, P } from '../../Base/text.js';
import { Link } from 'react-router-dom';


const Content = () => {
  return (
    <div>
      <Box>
        <Grid gtc="repeat(3, 1fr)">
        <Card>
          <Con position="relative">
            <img
              src="./Images/security.png"
              alt="Cyber Security"
              style={{ position: "relative" }}
            />
            <ImageText>Cyber Security</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              The Cybadot team is committed to network security, and they have
              created difficult and fundamental solutions for monitoring, threat
              detection, and attack prevention.
            </P>

            <Link to="/cyba-security">
              <button>
                Learn More
              </button>
            </Link>
          </Con>
        </Card>

        <Card>
          <Con position="relative">
            <img src="./Images/engineering.png" alt="Reverse Engineering" style={{position:"relative"}}/>
            <ImageText>Reverse Engineering</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              We acquired reverse engineering abilities because of our work on
              complex security projects, which is comparatively uncommon in the
              IT industry.
            </P>

            <Link to="/reverse-engineering">
              <button>
                Learn More
              </button>
            </Link>
          </Con>
        </Card>

        <Card>
          <Con position="relative">
            <img src="./Images/computing.png" alt="Cloud Computing" style={{position:"relative"}}/>
            <ImageText>Cloud Computing</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              We at Cybadot offer infrastructure development and management
              services that enable us to use networks, virtual machines, cloud
              services, and databases quickly and efficiently.
            </P>

            <Link to="/cloud-computing">
              <button>
                Learn More
              </button>
            </Link>
          </Con>
        </Card>

        <Card>
          <Con position="relative">
          <img
            src="./Images/Blockchain Technology.jpg"
            alt="Blockchain Technology"
            style={{position:"relative"}}
          />
          <ImageText>Blockchain</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              Cybadot assists companies in utilizing the blockchain's full
              potential to produce effective and secure products.
            </P>

            <Link to="/blockchain"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        <Card>
          <Con position="relative">
            <img src="./Images/AI&ML.jpg" alt="artificial intelligence" />
            <ImageText>AI&ML</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              Experts from Cybadot can assist you in implementing cutting-edge
              AI technologies to increase the intelligence of your company.
            </P>

            <Link to="/ai&ml"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        <Card>
          <Con position="relative">
            <img src="./Images/Embedded software.jpg" alt="Embedded software" />
            <ImageText>Embedded software</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              The advantages of the embedded system include their portability,
              energy efficiency, small size, and real-time response.
            </P>

            <Link to="/embedded-software"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        <Card>
          <Con position="relative">
            <img src="./Images/Mobile Solutions.jpg" alt="Mobile Solutions" />
            <ImageText>Mobile Solutions</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              Mobile apps make daily routines easier and more enjoyable, and
              they have become an essential part of our lives due to mobile
              devices.
            </P>

           <Link to="/mobile-solution"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        <Card>
          <Con position="relative">
            <img src="./Images/Security Testing.jpg" alt="Security Testing" />
            <ImageText>Security Testing</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              Security testing conducted before deployment can identify software
              flaws. It is crucial for software that manages or stores private
              information.
            </P>

            <Link to="/security-testing"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        <Card>
          <Con position="relative">
            <img src="./Images/Quaity assurance.jpg" alt="Quality assurance" />
            <ImageText>Quality Assurance</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              Security and penetration testing are among the full-stack quality
              assurance and software testing services offered by Cybadot.
            </P>

            <Link to="/quality-assurance"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        <Card>
          <Con position="relative">
            <img src="./Images/Websolutions.jpg" alt="web solutions" />
            <ImageText>Web Solutions</ImageText>
          </Con>

          <Con bg="#EDF0FF" pad="15px 0" position="relative" height="200px">
            <P width="90%" pad="0 15px" slide>
              We have a long history of offering bespoke web application
              development services utilizing the ASP.NET MVC framework at
              Cybadot.
            </P>

            <Link to="/web-solution"><button>
              Learn More
            </button></Link>
          </Con>
        </Card>
        </Grid>
      </Box>
    </div>
  )
}

export default Content