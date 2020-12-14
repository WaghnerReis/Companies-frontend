import React, { useCallback, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { useCompany } from '../../hooks/company';

import { Container, CompaniesList } from './styles';

import { Header, Load } from '../../components';
import { useAuth } from '../../hooks/auth';
import { useHeader } from '../../hooks/header';

const Companies: React.FC = () => {
  const { companiesRequest, filteredCompanies, loading } = useCompany();
  const { searching } = useHeader();
  const { signOut } = useAuth();

  const history = useHistory();

  useEffect(() => {
    companiesRequest().catch(() => {
      alert('Seu acesso expirou, você será redirecionado');
      signOut();
      history.push('/');
    });
  }, [companiesRequest, history, signOut]);

  const showCorrectMessage = useCallback(() => {
    if (searching) {
      return (
        <div>
          <p>Nenhuma empresa foi encontrada para a busca realizada.</p>
        </div>
      );
    }

    return (
      <div>
        <p>Clique na busca para iniciar.</p>
      </div>
    );
  }, [searching]);

  return (
    <Container>
      {loading && <Load />}

      <Header />
      {filteredCompanies.length > 0 ? (
        <CompaniesList>
          {filteredCompanies.map((company) => (
            <Link key={company.id} to={`/company/${company.id}`}>
              <img
                src={`https://empresas.ioasys.com.br${company.photo}`}
                alt={`Logo da ${company.enterprise_name}`}
              />
              <div>
                <strong>{company.enterprise_name}</strong>
                <span>{company.enterprise_type.enterprise_type_name}</span>
                <span>{company.country}</span>
              </div>
            </Link>
          ))}
        </CompaniesList>
      ) : (
        <>{showCorrectMessage()}</>
      )}
    </Container>
  );
};

export default Companies;
