import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  ru: "RU",
}

const Language = () => {
  return (
    <div className="flex justify-between sm:ml-2 sm:ml-6">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <div className="lang" key={language}>
              <button
                className={
                  "cursor-pointer inline-block " +
                  (currentLocale === language
                    ? `lang_active relative text-primary dark:text-secondary`
                    : `lang_inactive text-gray-700 dark:text-gray-500 hover:text-gray-800 dark:hover:text-white`)
                }
                onClick={() => changeLocale(language)}
              >
                {languageName[language]}
              </button>
              <span className="mx-2 text-gray-600 align-baseline separator">
                /
              </span>
            </div>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
