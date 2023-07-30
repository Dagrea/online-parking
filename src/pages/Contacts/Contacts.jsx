import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contacts = (props) => {
  return (
    <div className="d-flex flex-column text-white">
		<div className="border p-4 rounded align-self-center w-75">
    <h1>Контакты Местечка</h1>
    <p>Общие вопросы&nbsp;— +38 (050) 916-74-31, <a href="mailto:dagonsha@gmail.com">
        contact.mictechko@gmail.com</a></p>
        <p>Техподдержка&nbsp;— <a href="mailto:dagonsha@gmail.com">help.mictechko@gmail.com</a>
        </p>
        <p>Маркетинг&nbsp;— <a href="mailto:dagonsha@gmail.com">mictechko@gmail.com</a>
        </p>
    <hr color="#cb1812"/>
    <p>Підтримка клієнтів відбувається цілодобово. Будемо раді допомогти при будь-яких проблемах або питаннях.</p>
    <hr color="#cb1812"/>
    <h4>Розсилка</h4>
    <Form className="d-flex p-4 border rounded align-self-center w-50 row">
        <Form.Group className="mb-3 col-md-5" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Введите Email" />
        </Form.Group>
        <Form.Group className="mb-3 col-md-5" controlId="formName">
          <Form.Label>ФИО</Form.Label>
          <Form.Control type="name" placeholder="Введите ФИО" />
        </Form.Group>
        <div className="d-flex col-md-2 align-self-center"><Button className="w-100" variant="secondary" type="submit">Ок</Button></div>
      </Form>
    </div>
    </div>
	)}

export default Contacts;