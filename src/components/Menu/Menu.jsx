import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
		<Navbar bg="dark" variant="dark" className="mb-4">
      <Container fixed="top">
      <Navbar.Brand as={Link} to="/">Местечко</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link as={Link} to="/blog">Блог</Nav.Link>
        <Nav.Link as={Link} to="/about">О нас</Nav.Link>
        <Nav.Link as={Link} to="/help">Помощь</Nav.Link>
        <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
        <Nav.Link as={Link} to="/login">Войти</Nav.Link>
        <Nav.Link as={Link} to="/signup">Зарегистрироваться</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    </div>
	)}

export default Menu;