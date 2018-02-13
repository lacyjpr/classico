import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { Header } from './containers';
import { Footer } from './containers';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <Header />
      <Routes />
      <Footer />
    </main>
  </BrowserRouter>
);

export default App;
