import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ScreenSizeProvider } from './contexts/ScreenSizeProvider.tsx'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToTop.tsx'
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ScreenSizeProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>

  </ScreenSizeProvider>


)
