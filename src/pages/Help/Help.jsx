import React from 'react';
import { Accordion, Button } from 'react-bootstrap';

const Help = (props) => {
  return (
    <div className="d-flex flex-column">
    <div className="border p-4 rounded align-self-center w-75">
    Відповіді на типові питання по роботі Містечка
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Період роботи парковки</Accordion.Header>
        <Accordion.Body>
          Парковка Містечко приймає клієнтів цілодобово на протязі всього року. Ласкаво просимо!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
    <Accordion.Header>Вопрос</Accordion.Header>
    <Accordion.Body>
      Ответ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
    </Accordion>

    </div>
    </div>
	)}

export default Help;