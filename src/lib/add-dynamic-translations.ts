import i18n from '@/config/i18n';
import { Translation } from '@module/fe-core';

/**
 * @name addDynamicTranslations
 *
 * @description
 * Adds the dynamic translations to the i18n instance.
 *
 * @param {Translation} moduleTranslations The translations to add.
 */
export const addDynamicTranslations = (moduleTranslations: Translation) => {
  Object.entries(moduleTranslations).forEach(([lang, translations]) => {
    Object.entries(translations).forEach(([namespace, values]) => {
      if (!i18n.hasResourceBundle(lang, namespace)) {
        i18n.addResourceBundle(lang, namespace, values);
      }
    });
  });
};
