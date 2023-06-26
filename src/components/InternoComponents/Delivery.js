import { styled } from 'styled-components';

export default function Delivery() {
  return (
    <ContainerSection>
      <ContainerDeliverys>
        <BoxDataOrders>
          <h1>Delivery</h1>
          <DayDatas>
            <p>Pedidos no dia: x</p>
            <p>Valor R$ xxx,xx</p>
          </DayDatas>
          <button>+ novo</button>
        </BoxDataOrders>
        <BoxOrder>
        </BoxOrder>
      </ContainerDeliverys>
    </ContainerSection>
  );
}

const ContainerSection = styled.section`
  display: flex;
`;

const ContainerDeliverys = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 902px;

  background: #FDB53C;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const BoxDataOrders = styled.div`
  display: flex;
  width: 429px;
  height: 228px;
  border-bottom: 1px solid #102B07;
  background: #FDB53C;
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 200px;
    height: 45px;
    background: #102B07;
    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-family: Oregano;
  }
`;

const BoxOrder = styled.div`
  display: flex;
  width: 430px;
  height: 82px;
  background: rgba(16, 43, 7, 0.75);
`;

const DayDatas = styled.div`

`;
