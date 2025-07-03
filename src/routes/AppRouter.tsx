import { Routes, BrowserRouter,Route } from 'react-router-dom';
import { SpreadsheetPage } from '../pages';


const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SpreadsheetPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
