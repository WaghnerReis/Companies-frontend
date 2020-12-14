import React, { useCallback, useState } from 'react';

import { HiOutlineSearch } from 'react-icons/hi';
import Search from './components/Search';

import { Container } from './styles';

import LogoNav from '../../assets/images/logo-nav.png';
import { useHeader } from '../../hooks/header';
import { useCompany } from '../../hooks/company';

const Header: React.FC = () => {
  const [showSearchComponent, setShowSearchComponent] = useState(false);

  const { cleanFilteredCompanies } = useCompany();

  const { setSearchingValue } = useHeader();
  setSearchingValue(showSearchComponent);

  const handleSearchIconClick = useCallback(() => {
    setShowSearchComponent((prevState) => !prevState);
  }, []);

  const handleOnCloseSearch = useCallback(() => {
    handleSearchIconClick();
    cleanFilteredCompanies();
  }, [cleanFilteredCompanies, handleSearchIconClick]);

  return (
    <Container>
      {showSearchComponent ? (
        <Search onClose={handleOnCloseSearch} />
      ) : (
        <>
          <div />
          <img src={LogoNav} alt="Logo da Ioasys" />
          <HiOutlineSearch onClick={handleSearchIconClick} />
        </>
      )}
    </Container>
  );
};

export default Header;
