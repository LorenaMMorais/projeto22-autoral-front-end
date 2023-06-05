import React, { useState } from 'react';
import styled from 'styled-components';
import vatapa from '../../assets/images/vatapa.jpg';
import tacaca from '../../assets/images/tacaca.jpg';

const CarouselContainer = styled.div`
  width: 100%;
  height: 500px;

  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Carousel = () => {
  const images = [vatapa, tacaca]; // Substitua "vatapa" e "tacaca" pelos nomes das suas imagens importadas
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Slide ${index}`} style={{ display: index === currentSlide ? 'block' : 'none' }} />
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
