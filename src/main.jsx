import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { NetflixIndex } from './component/netflix-app/netflix-index';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NetflixIndex />
  </StrictMode>
);