import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const SignUp = (props) => {
  const [formData, setFormData] = useState({login: '', password: ''});//,fullname: '', email: '',phone: '', city: '',address: ''});
  const handleSubmit = (event) => {
    if (formData.login === '' || formData.password === '' || formData.fullname === '' || formData.email === ''
      || formData.phone === '' || formData.city === '' || formData.address === '') {
      alert("Введите все данные");
      event.preventDefault();
      return ;
    }
    axios.post('http://localhost:3000/signup', {...formData}).then(({data}) => {
    if (data === "Succes") {alert("Вы успешно зарегистрировались");}
    else  {alert("Произошла ошибка, попробуйте позже или обратитесь в техподдержку")}
    });
    event.preventDefault();      
  }

  return ( 
    <div className="d-flex flex-column text-white">
      <Form className="p-4 border rounded align-self-center w-50" onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Введите Email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Имя</Form.Label>
          <Form.Control type="text" placeholder="Введите пароль" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>phone</Form.Label>
          <Form.Control type="email" placeholder="Введите номер телефона" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBirth">
          <Form.Label>Дата рождения</Form.Label>
          <Form.Control type="birth" placeholder="Введите дату рождения" value={formData.birth} onChange={(e)=>setFormData({...formData, birth: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </div>
  )
}

export default SignUp;