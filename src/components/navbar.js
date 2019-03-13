import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, NavItem, Button } from 'reactstrap';

/** Controlles */
import logout from '../controlers/logout'

library.add(faSignOutAlt) // Add icon to use

const Navegationbar = () => {
  return (
    <Navbar color="light" light expand="md" className="px-0 py-3">
      <h4 className="ml-auto text-uppercase font-weight-light p-0 m-0">Pet's Agenda</h4>
      <Nav className="ml-auto">
        <NavItem>
          <Button color="primary" size="sm" onClick={logout} className="rounded-circle">
            <FontAwesomeIcon icon="sign-out-alt" />
          </Button>
        </NavItem>
      </Nav>
    </Navbar >
  )
}

export default Navegationbar