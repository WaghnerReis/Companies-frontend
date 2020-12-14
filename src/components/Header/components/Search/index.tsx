import React from 'react';

import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';

import { Container } from './styles';

const search: React.FC = () => (
  <Container>
    <div>
      <HiOutlineSearch />
      <input placeholder="Pesquisar" />
      <HiOutlineX />
    </div>
  </Container>
);

export default search;
