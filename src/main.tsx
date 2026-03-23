import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import Disclosure from './Disclosure.tsx';
import './index.css';

const params = new URLSearchParams(window.location.search);
const isDisclosure = params.get('page') === 'disclosure';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isDisclosure ? <Disclosure /> : <App />}
  </StrictMode>,
);
