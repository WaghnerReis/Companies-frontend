import React from 'react';

import { Container } from './styles';

import { Header } from '../../components';

const Companies: React.FC = () => (
  <Container>
    <Header />
    <div>
      <p>Clique na busca para iniciar.</p>
    </div>
  </Container>
);

export default Companies;
