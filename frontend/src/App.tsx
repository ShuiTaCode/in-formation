import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/MainHeader';
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css'
import TabPanelMenu from './components/TabPanelMenu';
         


function App() {
  return (

    <PrimeReactProvider>
      
          <MainHeader></MainHeader>
          <TabPanelMenu></TabPanelMenu>
        
    </PrimeReactProvider>
  );
}

export default App;
