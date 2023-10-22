import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { StyledMenu, CollapsibleNavbar } from "./Menu.styled";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Menu = () => {
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
    <StyledMenu collapseOnSelect>
      <Container className="justify-content-between">
        <Navbar.Brand>~/{menuLinks[0].name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <CollapsibleNavbar id="basic-navbar-nav">
          <Nav>
            <NavDropdown title="Profile" id="profile-dropdown">
              {menuLinks.slice(1, 4).map((link) => (
                <NavDropdown.Item key={link.name} href={link.link}>
                  /{link.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Projects" id="projects-dropdown">
              {menuLinks.slice(4).map((link) => (
                <NavDropdown.Item key={link.name} href={link.link}>
                  /{link.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link>Resume</Nav.Link>
            {/* Show only on md and below screen sizes */}
            <ThemeToggle label={""} collapseFriendly />
          </Nav>
        </CollapsibleNavbar>
        {/* Show only on lg and above screen sizes */}
        <ThemeToggle label={""} />
      </Container>
    </StyledMenu>
  );
};

export default Menu;