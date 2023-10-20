import React from 'react';
import './App.css';
import Welcome from './pages/Welcome.jsx'
import PlanLayout from './pages/Layouts/PlantLayout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Phoneconf from './pages/phoneconf.jsx';



function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/invite' component={Phoneconf} /> 
         </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
