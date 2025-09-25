import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <AppRouter/>
    </Provider>
  </StrictMode>,
)
