import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import Link from '../components/Link';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  async function submit(event) {
    event.preventDefault();
  }

  return (
    <ContainerLogin>
      <Row>
        <Title>Cadastre-se para entrar nos nossos serviços</Title>
        <ContainerForm onSubmit={submit}>
          <Input placeholder="Nome" type="name" />
          <Input placeholder="E-mail" type="text" />
          <Input placeholder="Tipo de usuário" type="text" />
          <Input placeholder="Senha" type="password" />
          <Input placeholder="Confirme sua senha" type="password" />
          <Button type="submit">
            <p>Inscrever</p>
          </Button>
          <Link to="/signin">
            <p>Já está inscrito? Faça login</p>
          </Link>
        </ContainerForm>
      </Row>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h1`
  width: 498px;
  height: 134px;

  font-family: 'Oswald';
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  text-align: center;

  color: #102B07;
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Button = styled.button`
  width: 429px;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #102B07;
  border-radius: 6px;
  border-color: #102B07;
  p{
    width: 50%;
    height: 40px;

    background: #102B07;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;

    color: #FFFFFF;
  }
`;

const Input = styled.input`
  width: 573px;
  height: 64px;

  background: #FFFFFF;
  border-radius: 6px;
  padding: 20px;
  placeholder {
    width: 206px;
    height: 40px;

    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;

    color: #9F9F9F;
  }
`;
