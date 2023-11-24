import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from "./App"
import { AdminFlagProvider } from './components/providers/AdminFlagProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </React.StrictMode>
);

