import { Navigate, Outlet } from "react-router-dom";
import { Stack } from '@mui/material';
import SideBar from "./SideBar";
import { SettingsContext } from '../../contexts/SettingsContext';
import React, { useContext, useEffect } from 'react';

const isAuthenticated = true;

const DashboardLayout = () => {
const { isChatOpen } = useContext(SettingsContext);
if(!isAuthenticated){
  return <Navigate to='/auth/login'/>;
}

  return (
    <Stack direction='row'>
      {/* SideBar */}
      {isChatOpen && <SideBar/>}
      <Outlet />
    </Stack>
    
  );
};

export default DashboardLayout;
