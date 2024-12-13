import { useModulesManager } from '@/hooks/use-modules-manager';
import { App } from '@module/fe-core';
import { useEffect } from 'react';

export const AppContainer = () => {
  const modulesManager = useModulesManager();
  const { loadModules, loadRefs, loadRoutes } = modulesManager;

  useEffect(() => {
    loadModules();
    loadRefs();
    loadRoutes();
  }, []);

  return <App modulesManager={modulesManager} />;
};
