import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: flex;
  width: 300px;
  height: 24px;
  margin-top: 5px;
  align-items: center;
  text-decoration: none;

  p{
    width: 300px;
    height: 24px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    text-decoration-line: underline;

    color: #102B07;
  }

  &:hover {
    text-decoration: underline;
  }
`;
