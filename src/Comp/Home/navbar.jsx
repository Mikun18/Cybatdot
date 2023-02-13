import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex } from "../../Base/flex";
import { Button } from "../../Base/button";
import { Nav, SmallerNavbar, Icon, SideModal } from "../../Base/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <div>
          <Link to="/">
            <img src="./Images/logo.svg" alt="logo" />
          </Link>
        </div>

        <Flex>
          <Link to="/"><Button blogNav>Home</Button></Link>
          <Button blogNav>Our Innovation</Button>
          <Button blogNav>Company</Button>
          <Link to="/blog"><Button blogNav>Blog</Button></Link>
        </Flex>
          <Link to="/contact">
          <Button nav>Contact Us</Button>
          </Link>
      </Nav>

      <SmallerNav />
    </div>
  );
};

const SmallerNav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <SmallerNavbar>
        <div>
          <Link to="/">
          `<img src="./Images/logo.svg" alt="logo" />
          </Link>
        </div>

        <Icon onClick={() => setShowModal(true)}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "24px" }}
          />
        </Icon>
      </SmallerNavbar>

      <div>
        <AnimatePresence>
          {showModal && <SideBar setShowModal={setShowModal} />}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SideBar = ({ setShowModal }) => {
  const modalVariant = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    close: {
      x: "100vw",
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={modalVariant}
      animate="visible"
      initial="hidden"
      exit="close"
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: "1",
        top: "0px",
        backgroundColor: "white",
      }}
    >
      <SideModal>
        <Flex sidebar>
          <img src="./Images/logo.svg" alt="logo" />

          <Icon onClick={() => setShowModal(false)}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "white", fontSize: "24px" }}
            />
          </Icon>
        </Flex>

        <div style={{ padding: "30px 0" }}>
          <p style={{ padding: "20px 0", fontSize: "24px" }}>Home</p>
          <p style={{ padding: "20px 0", fontSize: "24px" }}>Our Innovation</p>
          <p style={{ padding: "20px 0", fontSize: "24px" }}>Company</p>
          <p style={{ padding: "20px 0", fontSize: "24px" }}>Blog</p>
         <Link to="/contact"><Button sidebar onClick={() => setShowModal(false)}>Book a demo</Button></Link>
        </div>
      </SideModal>
    </motion.div>
  );
};

export default Navbar;
