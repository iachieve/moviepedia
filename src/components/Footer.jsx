import React from 'react';
import { Navbar} from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/NavbarBrand";
const Footer = () => {
    return (
        <div className="fixed-bottom">
            <Navbar bg={'dark'}>
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    );
};

export default Footer;