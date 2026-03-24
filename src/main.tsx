import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Disclosure from './Disclosure.tsx';
import TinyHoopers from './TinyHoopers.tsx';
import './index.css';

const params = new URLSearchParams(window.location.search);
const page = params.get('page');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page === 'disclosure' ? <Disclosure /> : page === 'tinyhoopers' ? <TinyHoopers /> : <App />}
  </StrictMode>,
);
