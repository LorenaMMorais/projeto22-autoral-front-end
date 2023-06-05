import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <ContainerHeader>
      <Logo>
        <img src={logo} alt="logo Sabores do Pará" />
      </Logo>
      <NavBar>
        <div>
          <Link to="quem-somos" smooth={true} duration={500}>
            <p>Quem Somos</p>
          </Link>
          <Link to="cardapio" smooth={true} duration={500}>
            <p>Cardápio</p>
          </Link>
          <Link>
            <p>Serviços</p>
          </Link>
          <Link to="redes-sociais" smooth={true} duration={500}>
            <p>Redes Sociais</p>
          </Link>
          <Link >
            <p>Login</p>
          </Link>
        </div>
      </NavBar>
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: 75px;
  gap: 16px;
  background-color: #102B07;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  width: 234px;
  height: 74px;
  border-radius: 5px;
  background-color: #102B07;
  img {
    width: 234px;
    height: 74px;
  }
`;

const NavBar = styled.div`
  div {
    list-style-type: none;
    display: flex;
    height: 75px;
    background-color: #102B07;
    p {
      background-color: #102B07;
      font-family: 'Oregano';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 31px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      color: #FFFFFF;
      cursor: pointer;
      &:hover {
        color: #FDB53C;
      }
    }
  }
`;
