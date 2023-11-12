import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CatBaguette from '@/pages/cat-baguette/CatBaguette';
import Portfolio from './pages/portfolio/Portfolio';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* Portfolio */}
          <Route path='/' Component={Portfolio} />

          {/* Cat Baguette */}
          <Route path="/catbaguette" Component={CatBaguette} />
          <Route path="/catbaguette/privacy-policy" element={<h1>privacypolicy</h1>} />
          <Route path='/catbaguette/*' element={<Navigate to='/catbaguette' />} />

          {/* Misc */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
};