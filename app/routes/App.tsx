import { useState } from "react";
import { FormattedMessage, IntlProvider } from "react-intl"
import Select from 'react-select'

const localeIds = ['ru', 'en'] as const;

const ruLocaleMessages = {
  'localizedString1': 'Локализованная строка 1'
}

const enLocaleMessages = {
  'localizedString1': 'Localized string 1'
}

const localeMessages = {ru: ruLocaleMessages, en: enLocaleMessages};

const localeSelectOptions = [
  {value: 'ru', label: 'Русский'},
  {value: 'en', label: 'Английский'}
] as const;


type SelectedOption = { readonly value: "ru"; readonly label: "Русский"; } | { readonly value: "en"; readonly label: "Английский"; }


export const App = () => {
  const [currentLocaleId, setCurrentLocaleId] = useState<'ru' | 'en'>(localeIds[0]);
  const currentLocaleMessages = localeMessages[currentLocaleId];
  return (
    <div>
      <button onClick={() => {setCurrentLocaleId('ru')}}>ru</button>
      <button onClick={() => {setCurrentLocaleId('en')}}>en</button>
      <IntlProvider key={currentLocaleId} locale={currentLocaleId} messages={currentLocaleMessages}>
        <FormattedMessage id='localizedString1' />
      </IntlProvider>
    </div>
  )
}