import React  from "react"
//import { FaShoppingCart } from "react-icons/fa";
//import { AiFillDelete } from "react-icons/ai";
import {
    Badge,
    // Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";

import {FaShoppingCart} from 'react-icons/fa'
import{Link} from "react-router-dom";
//import {Container,Navbar,FormControl, Placeholder, Dropdown} from 'react-bootstrap';
const Header=()=> {
  return (
   
    <Navbar expand="lg" bg='dark' variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">shopping cart</Link>
            </Navbar.Brand>

            <Navbar.Text className="search">
                <FormControl
                style={{width:500}}
                Placeholder="search a product"
                className="m-auto"
            />
            </Navbar.Text>
            
             <Nav>
            <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
           <FaShoppingCart color="white" fontSize="25px" />
           
              <Badge>{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{padding: 10 }}>cart is empty</span>
            </Dropdown.Menu>
            </Dropdown>
            </Nav>

        </Container>
    </Navbar>

    // <h1>hii header</h1>

  );  
};

export default Header;