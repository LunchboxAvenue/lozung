import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_LV_NAME, LANG_LV_TRANS } from './lang-lv';
import { LANG_RU_NAME, LANG_RU_TRANS } from './lang-ru';

const dictionary = {};

dictionary[LANG_EN_NAME] = LANG_EN_TRANS;
dictionary[LANG_LV_NAME] = LANG_LV_TRANS;
dictionary[LANG_RU_NAME] = LANG_RU_TRANS;

export const TRANSLATION_PROVIDERS_STATIC = dictionary;