import { useModulesManager } from '@/hooks/use-modules-manager';
import { App } from '@module/fe-core';
import { useEffect } from 'react';

export const AppContainer = () => {
  const modulesManager = useModulesManager();

  useEffect(() => {
    modulesManager.loadModules();
  }, [modulesManager.loadModules]);

  return <App modulesManager={modulesManager} />;
};
