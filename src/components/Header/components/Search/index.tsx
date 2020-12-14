import React, { useCallback, FormEvent } from 'react';

import { HiOutlineSearch, HiOutlineX } from 'react-icons/hi';
import { useCompany } from '../../../../hooks/company';

import { Container } from './styles';

interface SearchProps {
  onClose(): void;
}

const Search: React.FC<SearchProps> = ({ onClose }) => {
  const { filterCompanies } = useCompany();

  const handleSearchTextChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      if (event.currentTarget.value.length > 2) {
        filterCompanies(event.currentTarget.value);
      }
    },
    [filterCompanies]
  );
  return (
    <Container>
      <div>
        <HiOutlineSearch />
        <input placeholder="Pesquisar" onChange={handleSearchTextChange} />
        <HiOutlineX onClick={onClose} />
      </div>
    </Container>
  );
};

export default Search;
