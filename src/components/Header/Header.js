import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import AuthButton from "../authButton/authButton";

const Header = () => {
  let auth = useSelector((state) => state.auth);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home/" className="mx-3">
          Hero App 🪓
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {auth.user ? (
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/home/">Home</NavLink>
              </NavItem>
            </Nav>
          ) : (
            <></>
          )}
        </Collapse>
        <div className="p-2">
          <AuthButton />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
