import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardEmployees from './Pages/DashboardEmployees/DashboardEmployees';
import DashboardFinance from './Pages/DashboardFinance/DashboardFinance'
import SlideBar from './Components/Sidebar/SlideBar';
import DasshContextProvider from './context/DashContext';

const App = () => {
  return (
    <DasshContextProvider>
      <SlideBar/>
      <Routes>
        <Route path='/' element={<DashboardFinance/>}/>
        <Route path='dashboard-employees' element={<DashboardEmployees/>}/>
      </Routes>
    </DasshContextProvider>
  );
};

export default App;