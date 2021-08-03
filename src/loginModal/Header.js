import React, { Component } from 'react';
import '../assets/css/Header.css'

import {Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Nav
                    variant="pills"
                    activeKey="1"
                    className="login_navber"
                    >
                    <Nav.Item>
                        <Nav.Link
                            href="/home"
                            eventKey="1"
                        >
                            Active
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default Header;