import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const LogIn = (props) => {
  const [formData, setFormData] = useState({login: '', password: '', remember: false});
  const handleSubmit = (event) => {
    if (formData.login === '' || formData.password === '') {
      alert("Введите все данные");
      event.preventDefault();
      return ;
    }
    axios.post('http://localhost:3000/login', {...formData}).then(({data}) => {
    if (data === "Succes") {alert("Вы успешно зарегистрировались");}
    else  {alert("Произошла ошибка, попробуйте позже или обратитесь в техподдержку")}
    });
    event.preventDefault();      
  }
  return (   
    <div className="d-flex flex-column text-white">
      <Form className="p-4 border rounded align-self-center w-50">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Логин</Form.Label>
          <Form.Control type="email" placeholder="Введите логин" value={formData.login} onChange={(e)=>setFormData({...formData, login: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" value={formData.login} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCheckbox">
          <Form.Check type="checkbox" label="Запомнить меня" value={formData.login} onChange={(e)=>setFormData({...formData, remember: e.target.value})} />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Войти
        </Button>
      </Form>
    </div>
  )
}

export default LogIn;