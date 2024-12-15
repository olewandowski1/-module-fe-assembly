import {
  LocalesManagerType,
  ModulesManagerType,
  Translation,
} from '@module/fe-core';
import { useTranslation } from 'react-i18next';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a store to manage modules and its refs
export const useLocalesManager = create<LocalesManagerType>()(
  persist(
    (set) => ({
      translations: {},

      loadTranslations: (modules: ModulesManagerType['modules']) => {
        const translations: Translation[] = modules
          .map((module) => module.entry['translations'])
          .filter(Boolean);

        const combinedTranslations = translations.reduce(
          (acc, moduleTranslations) => {
            for (const [lang, messages] of Object.entries(moduleTranslations)) {
              if (!acc[lang]) {
                acc[lang] = {};
              }
              acc[lang] = { ...acc[lang], ...messages };
            }
            return acc;
          },
          {} as Translation
        );

        set({ translations: combinedTranslations });
      },

      formatMessage: (namespace: string, key: string) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { t } = useTranslation(namespace);

        return t(key);
      },
    }),
    {
      name: 'locales-manager',
    }
  )
);
