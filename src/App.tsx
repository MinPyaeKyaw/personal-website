import React from 'react';
import './App.css';

// React Router
import { BrowserRouter } from "react-router-dom";

// Routes
import MyRoutes from './routes/MyRoutes';

function App() {
  return (
    <div className='app_container'>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
