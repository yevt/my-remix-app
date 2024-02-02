import { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl"
import ruLocaleMessages from '../lang/compiled/ru.json'
import enLocaleMessages from '../lang/compiled/en.json'

const localeIds = ['ru', 'en'] as const;

const localeMessages = {ru: ruLocaleMessages, en: enLocaleMessages};

export const App = () => {
  const [currentLocaleId, setCurrentLocaleId] = useState<'ru' | 'en'>(localeIds[0]);
  const currentLocaleMessages = localeMessages[currentLocaleId];
  return (
    <div>
      <button onClick={() => {setCurrentLocaleId('ru')}}>ru</button>
      <button onClick={() => {setCurrentLocaleId('en')}}>en</button>
      <IntlProvider key={currentLocaleId} locale={currentLocaleId} messages={currentLocaleMessages}>
        <FormattedMessage id='localizedString1' defaultMessage='default localized string' />
        <FormattedMessage id='localizedString2' defaultMessage='default localized string 2' />
        <FormattedMessage id='localizedString3' defaultMessage='default localized string 3' />
      </IntlProvider>
    </div>
  )
}