import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useStaticQuery, graphql, Link } from "gatsby";

const StyledNavbar = () => {
  // Needs to be a static query since navbar links data is a GraphQL query and I need to render this in a component
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  // Fetch only menu links
  const menuLinks = data.site.siteMetadata.menuLinks;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>~/{menuLinks[0].name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Background" id="background-dropdown">
              {menuLinks.slice(1, 4).map((link) => (
                <NavDropdown.Item key={link.name}>
                  <Link to={link.link}>/{link.name}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Projects" id="projects-dropdown">
              {menuLinks.slice(4).map((link) => (
                <NavDropdown.Item key={link.name}>
                  <Link to={link.link}>/{link.name}</Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link>Resume</Nav.Link>
          </Nav>
          {/* Theme Toggle */}
          <Nav.Link>TT</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StyledNavbar;
