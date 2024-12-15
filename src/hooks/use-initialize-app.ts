import { addDynamicTranslations } from '@/lib/add-dynamic-translations';
import { LocalesManagerType, ModulesManagerType } from '@module/fe-core';
import { useEffect } from 'react';

export const useInitializeApp = (
  modulesManager: ModulesManagerType,
  localesManager: LocalesManagerType
) => {
  const { loadModules, loadRefs, loadRoutes, modules } = modulesManager;
  const { loadTranslations, translations } = localesManager;

  useEffect(() => {
    loadModules();
    loadRefs();
    loadRoutes();
    loadTranslations(modules);
  }, [loadModules, loadRefs, loadRoutes, loadTranslations]);

  useEffect(() => {
    addDynamicTranslations(translations);
  }, [translations]);
};
