import React from 'react';
import { Form, Card, Button, Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Datetime from 'react-datetime';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placeActions from '../../store/actions/places.js';
import moment from 'moment';
import "react-datetime/css/react-datetime.css";
import park from '../../assets/find_parking.png';
import car from '../../assets/park_car.png';
import reserve from '../../assets/reserve.png';

let yesterday = moment().subtract( 1, 'day' );
let nextYear = moment().subtract( 1, 'day' ).add(1, 'years');
let valid = function( current ){
    return current.isBetween( yesterday, nextYear );
};
let renderers = {
  renderDay: function( props, currentDate, selectedDate ){
    return <td className="text-dark" {...props}>{ currentDate.date() }</td>;
  },
  renderMonth: function( props, month, year, selectedDate){
    return <td className="text-dark" {...props}>{ month +1 }</td>;
  },
  renderYear: function( props, year, selectedDate ){
    return <td className="text-dark" {...props}>{ year }</td>;
  }
}

class MyDTPicker extends React.Component {
    render(){
        return <Datetime className="text-dark" isValidDate={ valid } 
            renderDay={ renderers.renderDay } 
            renderMonth={ renderers.renderMonth } 
            renderYear={ renderers.renderYear }/>;
    }
}
class MyDTPicker2 extends React.Component {
    render(){
        return <Datetime className="text-dark" isValidDate={ valid } timeFormat={false}
            renderDay={ renderers.renderDay } 
            renderMonth={ renderers.renderMonth } 
            renderYear={ renderers.renderYear }/>;
    }
}
const Home = ({ images, fetchImages }) => {
    return (
    <div className="d-flex container-fluid flex-wrap">
      <div className="d-block w-100"><Row className="container-fluid ">
      <Col sm={3}></Col>
      <Col sm={6}><div className="justify-content-around p-4 m-4 border rounded align-self-center">
        <Tabs defaultActiveKey="hour" id="tab">
          <Tab eventKey="hour" title="На час">
            <Form className="border p-3">
            <Row className="container-fluid text-light">
              <Col sm={6}><Form.Group className="mb-3" controlId="formStart">
                <Form.Label>Начало</Form.Label>
                <Form.Control as={MyDTPicker}/>
              </Form.Group></Col>
              <Col sm={6}><Form.Group className="mb-3" controlId="formEnd">
                <Form.Label>Конец</Form.Label>
                <Form.Control as={MyDTPicker}/>
              </Form.Group></Col>
              </Row>
              <Form.Group className="mb-3 text-light">
                <Form.Label htmlFor="Select">Тип транспорта</Form.Label>
                <Form.Select id="transportdSelect">
                  <option>Легковой</option>
                  <option>Автобус</option>
                  <option>Грузовой</option>
                </Form.Select>
              </Form.Group>
              <Button className="w-100" variant="secondary" type="submit">
                Оформить
              </Button>
            </Form>
          </Tab>
          <Tab eventKey="month" title="На месяц">
            <Form>
            <Row className="container-fluid">
              <Col sm={12}><Form.Group className="mb-3" controlId="formStart">
                <Form.Label>Начало</Form.Label>
                <Form.Control as={MyDTPicker2}/>
              </Form.Group></Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="Select">Тип транспорта</Form.Label>
                <Form.Select id="transportdSelect">
                  <option>Легковой</option>
                  <option>Автобус</option>
                  <option>Грузовой</option>
                </Form.Select>
              </Form.Group>
              <Button className="w-100" variant="secondary" type="submit">
                Оформить
              </Button>
            </Form>
          </Tab>
        </Tabs>
      </div></Col>
      <Col sm={3}><div className="justify-content-around p-4 m-4 border rounded align-self-center text-light">При необхідності відмінити замовлення, необхідно повідомити про це за 24 години, до часу бронювання місця парковки</div></Col>
      </Row>
    <div className="d-flex flex-column">
      <div className="border p-4 rounded align-self-center w-50">
      <h2>Паркуйтесь легко</h2>
      <Row>
      <Col sm={4}><Card>
        <Card.Img variant="top" src={park}/>
        <Card.Body>
          <Card.Title>Там де зручно</Card.Title>
          <Card.Text>
            Використовуйте зручну для вас парковку зі всією необхідною інфраструктурою, та будьте спокійні за свій транспорт
          </Card.Text>
        </Card.Body>
      </Card></Col>
      <Col sm={4}><Card>
        <Card.Img variant="top" src={car} />
        <Card.Body>
          <Card.Title>Просто та швидко</Card.Title>
          <Card.Text>
            Замовляйте місце у пару кліків та слідуйте простим інструкціям, щоб ваш досвід був максимально приємним
          </Card.Text>
        </Card.Body>
      </Card></Col>
      <Col sm={4}><Card>
        <Card.Img variant="top" src={reserve} />
        <Card.Body>
          <Card.Title>Комфортна оплата</Card.Title>
          <Card.Text>
            Оплачуйте парковку зручною для вас платіжною системою
          </Card.Text>
        </Card.Body>
      </Card></Col>
      </Row>
    </div></div></div></div>
  )
}

const mapStateToProps = ({places }) => ({
  places: places.items,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(placeActions,dispatch),
});

export default  connect(mapStateToProps,mapDispatchToProps)(Home);