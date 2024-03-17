import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './Components/MainPage/MainPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import DeckPage from './Components/DeckPage/DeckPage';
import SpecsPage from './Components/SpecsPage/SpecsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={ <MainPage />} />
        <Route path="/DeckPage" element={ <DeckPage />} />
        <Route path="/SpecsPage" element={ <SpecsPage />} />
        </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
