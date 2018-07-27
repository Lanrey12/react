import React, { Component } from 'react';
import { Button,  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  Nav,
  Collapse} from 'reactstrap';
  import {Link} from 'react-router-dom'
   

  class Header extends Component{

    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render () {
      return (
 
        <header>
  
          <Navbar color="dark" light expand="md">
            <NavbarBrand href=" "><h1 class="text-white">Welcome to My Hobbies Online...</h1></NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

           <NavItem>
             <Link to="/">
           <Button outline color="info"size="lg">Home</Button>{' '}
           </Link>
          </NavItem>


              <NavItem>
             <Link to="/createpage">
           <Button outline color="primary"size="lg">Register</Button>{' '}
           </Link>
          </NavItem>

            <NavItem>
          <Link to="/loginpage">
          <Button outline color="success"size="lg">Login</Button>{' '}
          </Link>
          </NavItem>

              </Nav>
            </Collapse>
          </Navbar>
          </header>
       
      );   
        }
    }
    export default Header;