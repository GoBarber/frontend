import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AppProvider from './hooks';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      {/* <SignUp /> */}
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
