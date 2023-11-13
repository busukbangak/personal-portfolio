import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import HomePortfolio from '@/pages/portfolio/Home';
import HomeImprint from '@/pages/portfolio/Imprint';
import HomePrivacyPolicy from '@/pages/portfolio/PrivacyPolicy';

import HomeCatBaguette from '@/pages/cat-baguette/Home';
import ImprintCatBaguette from '@/pages/cat-baguette/Imprint';
import PrivacyPolicyCatBaguette from '@/pages/cat-baguette/PrivacyPolicy';


ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Portfolio */}
          <Route path='/' Component={HomePortfolio} />
          <Route path='/imprint' Component={HomeImprint} />
          <Route path='/privacy-policy' Component={HomePrivacyPolicy} />

          {/* Cat Baguette */}
          <Route path="/catbaguette" Component={HomeCatBaguette} />
          <Route path="/catbaguette/imprint" Component={ImprintCatBaguette} />
          <Route path="/catbaguette/privacy-policy" Component={PrivacyPolicyCatBaguette} />
          <Route path='/catbaguette/*' element={<Navigate to='/catbaguette' />} />

          {/* Misc */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
};