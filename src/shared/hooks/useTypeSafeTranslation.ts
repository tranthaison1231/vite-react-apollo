import { useTranslation } from 'react-i18next';
import { Dictionary } from '@enouvo/react-uikit';
import { TranslationKeys } from '#/src/generated/translationKeys';

const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: Dictionary<string>) => t(s, f),
  };
};

export default useTypeSafeTranslation;
