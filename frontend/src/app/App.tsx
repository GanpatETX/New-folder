import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProviders } from './providers';
import Login from './pages/Login';
import AuthCallback from './pages/AuthCallback';
import { DashboardLayout } from '../shared/components/layout/DashboardLayout';
import MainATSContainer from '../modules/ats/components/MainATSContainer';
import { ERPModuleCatalog } from '../modules/ats/components/ERPModuleCatalog';
import PurchaseModule from '../modules/purchase/components/PurchaseModule';
import { useAppStore } from './store';
import type { AppView } from './store';

function ProtectedRoutes() {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  const appView = useAppStore((s) => s.appView);
  const setAppView = useAppStore((s) => s.setAppView);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleModuleSelect = (moduleId: string) => {
    if (moduleId === 'ats') {
      setAppView('ats' as AppView);
    } else if (moduleId === 'procurement') {
      setAppView('purchase' as AppView);
    }
  };

  if (appView === 'erp-access' || appView === 'erp-modules') {
    return <ERPModuleCatalog onModuleSelect={handleModuleSelect} currentModule={appView} />;
  }

  if (appView === 'purchase') {
    return <PurchaseModule />;
  }

  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<MainATSContainer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </DashboardLayout>
  );
}

export default function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/*" element={<ProtectedRoutes />} />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}
