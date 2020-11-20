import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from './Logo';
import NavBarLinks from '../constants/nav-links';

export default function NavBar() {
  return (
    <div className="nav-head">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Link to="/">
            <Navbar.Brand className="nav-logo">
              <Logo />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav-links">
              {NavBarLinks.map((item, index) => {
                return (
                  <AnchorLink key={index} to={item.path}>
                    <Nav.Link>{item.text}</Nav.Link>
                  </AnchorLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
