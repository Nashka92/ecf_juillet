import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../asset/Logo";
import ScoreIcon from "../../asset/ScoreIcon";

const Header = () => {
  return (
    <Navbar className="bg-orange-500 h-[50px]" expand="lg">
      <Container className="flex justify-between items-center">
        <Navbar.Brand href="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ml-auto flex items-center gap-2">
            <Navbar.Brand href="/score" className="font-bold flex items-center gap-1">
              <ScoreIcon />
              <span className="text-customYellow">|</span>
              <span className="text-customYellow">Score</span>
            </Navbar.Brand>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
