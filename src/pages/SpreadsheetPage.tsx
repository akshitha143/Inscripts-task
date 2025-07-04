import React from 'react';
//components
import AppLayout from '../components/layout/AppLayout';
// import SpreadsheetTable from '../components/table/SpreadsheetTable';
import SpreadsheetTable from '../components/table/NewTable';


const SpreadsheetPage: React.FC = () => {
  return (
    <AppLayout>
      <SpreadsheetTable/>
    </AppLayout>
  );
};

export default SpreadsheetPage;
