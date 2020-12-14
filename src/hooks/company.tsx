import React, { createContext, useCallback, useContext, useState } from 'react';
import { Company } from '../interfaces';

import api from '../services/api';

interface CompanyContextData {
  loading: boolean;
  filteredCompanies: Company[];
  getCompany(id: string): Company | undefined;
  cleanFilteredCompanies(): void;
  filterCompanies(query: string): void;
  companiesRequest(): Promise<void>;
}

const CompanyContext = createContext<CompanyContextData>(
  {} as CompanyContextData
);

export const CompanyProvider: React.FC = ({ children }) => {
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(false);

  const companiesRequest = useCallback(async () => {
    try {
      setLoading(true);

      const { data } = await api.get('/enterprises');
      setCompanies(data.enterprises);
    } catch (err) {
      throw new Error('Erro ao se comunicacar com o servidor.');
    } finally {
      setLoading(false);
    }
  }, []);

  const filterCompanies = useCallback(
    (query: string) => {
      const lowerCaseQuery = query.toLowerCase();

      const newFilteredCompanies = companies.filter((company) =>
        company.enterprise_name.toLowerCase().includes(lowerCaseQuery)
      );

      setFilteredCompanies(newFilteredCompanies);
    },
    [companies]
  );

  const cleanFilteredCompanies = useCallback(() => {
    setFilteredCompanies([]);
  }, []);

  const getCompany = useCallback(
    (id: string) => {
      const filteredCompany = filteredCompanies.find(
        (company) => company.id === parseInt(id, 10)
      );
      return filteredCompany;
    },
    [filteredCompanies]
  );

  return (
    <CompanyContext.Provider
      value={{
        loading,
        getCompany,
        cleanFilteredCompanies,
        filteredCompanies,
        filterCompanies,
        companiesRequest,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export function useCompany(): CompanyContextData {
  const context = useContext(CompanyContext);
  return context;
}
