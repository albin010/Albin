import { createRoot } from 'react-dom/client'
import {  HashRouter } from 'react-router-dom';
import MainRouter from './router/MainRouter';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <MainRouter />
  </HashRouter>,
)
