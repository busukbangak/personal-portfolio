import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CatBaguette from '@/pages/cat-baguette/CatBaguette';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/catbaguette" Component={CatBaguette} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
};