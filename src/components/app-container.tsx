import { useInitializeApp } from '@/hooks/use-initialize-app';
import { useLocalesManager } from '@/hooks/use-locales-manager';
import { useModulesManager } from '@/hooks/use-modules-manager';
import { App } from '@module/fe-core';

export const AppContainer = () => {
  const modulesManager = useModulesManager();
  const localesManager = useLocalesManager();

  useInitializeApp(modulesManager, localesManager);

  return (
    <App modulesManager={modulesManager} localesManager={localesManager} />
  );
};
