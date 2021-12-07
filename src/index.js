import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PhonesOrderContextProvider } from './context/phonesOrderContext';

ReactDOM.render(
  <PhonesOrderContextProvider>
    <App />
  </PhonesOrderContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
