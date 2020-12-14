import React from 'react';

import { AuthProvider } from './auth';
import { CompanyProvider } from './company';
import { HeaderProvider } from './header';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <HeaderProvider>
      <CompanyProvider>{children}</CompanyProvider>
    </HeaderProvider>
  </AuthProvider>
);

export default AppProvider;
