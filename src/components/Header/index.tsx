import React, { useCallback, useState } from 'react';

import { HiOutlineSearch } from 'react-icons/hi';
import Search from './components/Search';

import { Container } from './styles';

import LogoNav from '../../assets/images/logo-nav.png';

const Header: React.FC = () => {
  const [showSearchComponent, setShowSearchComponent] = useState(false);

  const handleSearchIconClick = useCallback(() => {
    setShowSearchComponent((prevState) => !prevState);
  }, []);

  return (
    <Container>
      {showSearchComponent ? (
        <Search />
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
