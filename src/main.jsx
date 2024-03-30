import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from './routes/NotFound.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
      </Route>
      <Route index={false} path="/coinDetails/:symbol" element={<DetailView />} />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  </BrowserRouter>,
)
