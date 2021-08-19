import React from 'react';
import '../assets/css/Header.css';

import { Navbar, Container, Button } from 'react-bootstrap';
import { Consumer } from './context/context';

const Header = ()=> {
    return (
        <Consumer>
            {({ setState }) => (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <Button
                                    variant="secondary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setState({ modal: 'login' });
                                    }}
                                >
                                    Login
                                </Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
        </Consumer>
    );
}

export default Header;