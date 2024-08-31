import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ScreenSizeProvider } from './contexts/ScreenSizeProvider.tsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ScreenSizeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ScreenSizeProvider>

)
