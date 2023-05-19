import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainProvider from './common/provider/MainProvider.jsx'
import { ProSidebarProvider } from 'react-pro-sidebar';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <MainProvider />
    </ProSidebarProvider>
  </React.StrictMode>
);
