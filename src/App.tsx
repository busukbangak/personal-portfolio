import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import Imprint from '@/pages/Imprint/Imprint';
import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

export default function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            {/* Portfolio */}
            <Route path='/' Component={Home} />
            <Route path='/tags/:mode/:tags' Component={Home} />
            <Route path='/imprint' Component={Imprint} />
            <Route path='/privacy-policy' Component={PrivacyPolicy} />

            {/* Misc */}
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
}