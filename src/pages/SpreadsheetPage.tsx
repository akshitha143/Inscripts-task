import React from 'react';
//components
import AppLayout from '../components/layout/AppLayout';
import SpreadsheetTable from '../components/table/NewTable';
import { MainProvider } from '../context/MainContext';

const SpreadsheetPage: React.FC = () => {
  return (
    <MainProvider>
      <AppLayout>
        <SpreadsheetTable/>
      </AppLayout>
    </MainProvider>
  );
};

export default SpreadsheetPage;
