import { styled } from 'styled-components';
import SideBarInterno from './InternoComponents/SideBarInterno';
import Delivery from './InternoComponents/Delivery';

export default function Interno() {
  return (
    <InternoContainer>
      <SideBarInterno />
      <Delivery></Delivery>
    </InternoContainer>
  );
}

const InternoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
