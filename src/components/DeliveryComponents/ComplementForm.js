import { styled } from 'styled-components';

export default function ComplementForm() {
  return(
    <FormContainer>
      <Title>Complete seu cadastro para fazer seu pedido!</Title>  
      <FormComplement>
        <Input placeholder="CPF" type="text" maxLength="14" />
        <Input placeholder="Telefone" type="phone" />
        <Input placeholder="Endereço" type="text" />
        <Input placeholder="Complemento" type="text" />
        <Input placeholder="CEP" type="text" />
        <Button type="submit" >
          <p>Enviar Dados pessoais</p>
        </Button>
      </FormComplement>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
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

const FormComplement = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
    width: 400px;
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
