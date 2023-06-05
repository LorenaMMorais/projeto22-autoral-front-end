import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  const menuItems = [
    {
      title: 'Tacacá',
      description: 'Sopa típica paraense feita com tucupi, jambu, camarão e goma de tapioca.',
      price: 'R$ 20,00',
    },
    {
      title: 'Pato no Tucupi',
      description: 'Prato tradicional paraense com pato cozido no tucupi e acompanhado de jambu e arroz.',
      price: 'R$ 30,00',
    },
    {
      title: 'Maniçoba',
      description: 'Feijoada paraense feita com folhas de mandioca cozidas e carnes de porco.',
      price: 'R$ 25,00',
    },
    {
      title: 'Vatapá',
      description: 'Vatapá de camarão, acompanhado de arroz branco.',
      price: 'R$ 20,00',
    },
  ];

  return (
    <MenuContainer>
      <h2>Cardápio Paraense</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>
          <MenuItemTitle>{item.title}</MenuItemTitle>
          <MenuItemDescription>{item.description}</MenuItemDescription>
          <MenuItemPrice>{item.price}</MenuItemPrice>
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const MenuItem = styled.div`
  margin-bottom: 20px;
`;

const MenuItemTitle = styled.h3`
  margin-bottom: 5px;
  font-style: bold;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  
  color: #102B07;
  
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuItemDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const MenuItemPrice = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export default Menu;
