import React from 'react';

import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Header from './components/Header';
import OptionsTabs from './components/OptionsTabs';

function App() {
  return (
    <Container className="App">
      <Header />
      <OptionsTabs />
    </Container>
  );
}

export default App;
