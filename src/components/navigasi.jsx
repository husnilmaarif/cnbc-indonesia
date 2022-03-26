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
          <Navbar.Brand>
            <Link to="/" style={{ listStyle: "none", textDecoration: "none", color: "white" }}>
              CNBC Indonesia
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <ul style={{ display: "flex", fontSize: "17px" }}> */}
              {/* <li style={{ listStyle: "none" }} className="mt-3"> */}
              <Nav.Link>
                <Link to="/trending" style={{ textDecoration: "none", color: "white" }}>
                  Trending
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/olahraga" style={{ textDecoration: "none", color: "white" }}>
                  Olagraga
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/tekhnologi" style={{ textDecoration: "none", color: "white" }}>
                  Tekhnologi
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
