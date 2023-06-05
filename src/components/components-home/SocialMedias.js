import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 10px;
  color: #fff;
  background-color: #102b07;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0c1f05;
  }
`;

const SocialIcons = () => {
  return (
    <SocialContainer>
      <SocialLink href="https://www.facebook.com/">
        <FaFacebook size={20} color='#102B07' />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/">
        <FaInstagram size={20} color='#102B07' />
      </SocialLink>
      <SocialLink href="https://twitter.com/">
        <FaTwitter size={20} color='#102B07' />
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialIcons;
