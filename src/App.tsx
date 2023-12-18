import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePortfolio from '@/pages/Home/Home';
import HomeImprint from '@/pages/Imprint/Imprint';
import HomePrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

function App() {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            {/* Portfolio */}
            <Route path='/' Component={HomePortfolio} />
            <Route path='/imprint' Component={HomeImprint} />
            <Route path='/privacy-policy' Component={HomePrivacyPolicy} />

            {/* Misc */}
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  )
};