import * as RNLocalize from "react-native-localize";
import I18n from "i18n-js";
import memoize from "lodash.memoize";

import sin from "./sin";
import tam from "./tam";
import eng from "./eng";

const locales = RNLocalize.getLocales();
if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.translations = {
  default: eng,
};

I18n.fallbacks = true;
export default I18n;
