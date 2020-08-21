import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Menus(history) {

  return (
    <div id="menus">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => {
            history.history.push('/home');
          }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link target="_blank" href="https://www.etsy.com/shop/GianneIllustrates">Shop</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link onClick={() => {
            history.history.push('/about');
          }}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}
