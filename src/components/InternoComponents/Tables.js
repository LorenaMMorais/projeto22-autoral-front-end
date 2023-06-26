import { styled } from 'styled-components';

export default function Tables() {
  return(
    <ContainerSection>
      <ContainerTables>
        <BoxTables>
          <p>Mesa 1</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 2</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 3</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 4</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 5</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 6</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 7</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 8</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 9</p>
        </BoxTables>
        <BoxTables>
          <p>Mesa 10</p>
        </BoxTables>
      </ContainerTables>
    </ContainerSection>
  );
}

const ContainerSection = styled.section`
  display: flex;
`;

const ContainerTables = styled.div`
  width: max-content;
  height: 100%;
  box-sizing: border-box;
  padding: 20px 0 20px 20px;
  gap: 20px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
`;

const BoxTables = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  gap: 25px;
  border-radius: 10px;
  background: #102B07;
  justify-content: center;
  align-items: center;
  p {
    display: flex;
    gap: 25px;
    background: #102B07;
    width: 100px;
    height: 100px;
    justify-content: center;

    color: #FFF;
    text-align: center;
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-size: 24px;
    font-family: Oregano;
  }
`;
