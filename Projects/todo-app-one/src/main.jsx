import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import   './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'; // Corrected 'CSS' to 'css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
