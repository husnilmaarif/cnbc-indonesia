import React from "react";
import logoCNBC from "../img/logo-cnbc.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function Navigasi() {
  return (
    <>
      <div style={{ backgroundColor: "#295d97", padding: "20px 10px" }}>
        <div className="container">
          <img src={logoCNBC} alt="logo cnbc" />
        </div>
      </div>
      <Navbar className="navbar navbar-dark" expand="lg" style={{ backgroundColor: "#204d7f" }}>
        <Container>
          <Nav>
            <Nav.Link className="link">
              <Link to="/" style={{ listStyle: "none", textDecoration: "none", color: "white", marginRight: "8px" }}>
                HOME
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="link">
                <Link to="/trending" style={{ textDecoration: "none", color: "white" }}>
                  MARKET
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/olahraga" style={{ textDecoration: "none", color: "white" }}>
                  INVESTMENT
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/tekhnologi" style={{ textDecoration: "none", color: "white" }}>
                  NEWS
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/tekhnologi" style={{ textDecoration: "none", color: "white" }}>
                  ENTREPRENEUR
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/tekhnologi" style={{ textDecoration: "none", color: "white" }}>
                  SYARIAH
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/tekhnologi" style={{ textDecoration: "none", color: "white" }}>
                  TECH
                </Link>
              </Nav.Link>
              <Nav.Link className="link">
                <Link to="/tekhnologi" style={{ textDecoration: "none", color: "white" }}>
                  LIFESTYLE
                </Link>
              </Nav.Link>
            </Nav>
            <div className="nav-item ms-lg-auto">
              <Link to="/masuk" className="btn btn-danger mx-1">
                Masuk
              </Link>
              <Link to="/daftar" className="btn btn-danger mx-1">
                Daftar
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
