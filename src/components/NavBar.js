import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Naxtel Logosu</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">ANA SƏHİFƏ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://naxtel.az/02.html">HAQQIMIZDA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://naxtel.az/03.html">FƏRDİ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://naxtel.az/04.html">KORPORATİV</NavLink>
            </NavItem>


            {/*             <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://wsc.naxtel.az/WscUI/wsc/#/login">ŞƏXSİ KABİNET</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://naxtel.az/dzontadzt-us.html">BİZİMLƏ ƏLAQƏ</NavLink>
            </NavItem>
          </Nav>

          <Nav className="mr-auto">
            <NavItem>
              <NavLink href="/"><img src="http://naxtel.az/media/mod_languages/images/az.gif" alt="Azərbaycan" title="Azərbaycan" /></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><img src="http://naxtel.az/media/mod_languages/images/ru.gif" alt="Pусский" title="Pусский" /></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/"><img src="http://naxtel.az/media/mod_languages/images/en.gif" alt="English" title="English" /></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;