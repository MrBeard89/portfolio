import format from 'string-format'
import hu from '../languages/hu.json'
import en from '../languages/en.json'
import map from '../languages/map.json'

const languages = [hu, en]
const MAP = map

export const text = (language, source, ...props) => {
  let active = languages.find((lang) => lang.code === language)
  if (active === undefined) {
    return language + '_' + source
  }
  return format(active[source], ...props)
}

export const i18n = {
  text,
  MAP,
}

export default { i18n, MAP, text }
