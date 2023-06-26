import { styled } from 'styled-components';

export default function SideBarInterno() {
  return(
    <ContainerSideBar>
      <Options>
        <p>Mesas</p>
      </Options>
      <Options>
        <p>Vendas</p>
      </Options>
      <Options >
        <p>Delivery</p>
      </Options>
    </ContainerSideBar>
  );
}

const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  
  width: 100px;
  height: 100%;
  gap: 10px;
  background-color: #102B07;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  background-color: #102B07;
  p {
    flex-direction: column;
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
`;
const ContainerTables = styled.div`

`;

const BoxTables = styled.div`

`;
