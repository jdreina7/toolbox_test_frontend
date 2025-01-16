import React, { useState } from 'react';

import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

import Header from './components/Header';
import OptionsTabs from './components/OptionsTabs';
import SearchComponent from './components/SearchFileByName';
import ResultModal from './components/ResultModal';

function App() {
  const [modalData, setModalData] = useState(null);

  const handleSearchResult = (data) => {
    setModalData(data);
  };
  return (
    <>
      <Container className="App">
        <Header />
        <SearchComponent onSearchResult={handleSearchResult} />
        <OptionsTabs />
      </Container>
      <ResultModal data={modalData} />
    </>
  );
}

export default App;
