import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useCompany } from '../../hooks/company';

import { Container } from './styles';

interface ParamsData {
  id: string;
}

const Company: React.FC = () => {
  const { getCompany } = useCompany();
  const { id } = useParams<ParamsData>();

  const company = useMemo(() => getCompany(id), [getCompany, id]);

  return (
    <Container>
      <img
        src={`https://empresas.ioasys.com.br${company?.photo}`}
        alt={`Logo da ${company?.enterprise_name}`}
      />
      <span>{company?.description}</span>
    </Container>
  );
};

export default Company;
