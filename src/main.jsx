import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// Corrected to relative paths
import App from './App.jsx';
import store from './redux/store.js';
import './index.css';

// Render the main application component into the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider makes the Redux store available to the entire app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

