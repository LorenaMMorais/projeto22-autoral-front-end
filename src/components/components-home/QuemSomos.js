import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;

  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  max-width: 800px;
  height: 100%;
  
  font-family: 'Oregano';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  
  /* or 130% */
  text-align: justify;
  
  color: #102B07;
  
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const QuemSomos = () => {
  return (
    <Container>
      <Title>Quem Somos</Title>
      <Paragraph>
        O Restaurante Sabores do Pará nasceu do sonho da nossa fundadora, Maria Luiza, uma talentosa chef apaixonada
        pela culinária paraense. Há mais de 15 anos, Maria Luiza começou sua jornada no pátio de sua casa, onde
        servia deliciosas refeições caseiras para amigos e familiares.
        <br />
        <br />
        Ao longo dos anos, Maria Luiza aprimorou suas habilidades culinárias e se dedicou a conhecer a fundo os
        segredos da cozinha paraense. Com determinação e paixão, ela transformou seu pequeno negócio em um restaurante
        acolhedor e encantador, onde os clientes podem experimentar o verdadeiro sabor da amazônia.
        <br />
        <br />
        Hoje, com o salão do restaurante ampliado, podemos atender até 50 pessoas simultaneamente. Embora seja um
        número modesto, cada cliente que entra em nosso estabelecimento é tratado com a atenção e carinho que merece.
        Valorizamos a qualidade dos nossos pratos, utilizando ingredientes frescos e selecionados, e estamos comprometidos
        com a limpeza e a higiene para garantir a satisfação de todos.
        <br />
        <br />
        Sabemos que a verdadeira essência da nossa cozinha está em nossa história e nos valores familiares que nos
        guiam. Cada prato que servimos é preparado com amor e dedicação, preservando as tradições culinárias do Pará
        e compartilhando os sabores autênticos que encantam nossos clientes.
        <br />
        <br />
        Convidamos você a nos visitar no Restaurante Sabores do Pará e a se deliciar com nossos pratos únicos,
        preparados com o talento e a paixão da nossa equipe. Seja bem-vindo à nossa casa, onde a comida é mais que
        um simples alimento, é uma experiência marcante que celebra a nossa cultura e tradição.
      </Paragraph>
    </Container>
  );
};

export default QuemSomos;
