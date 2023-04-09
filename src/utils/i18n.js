const format = require('string-format')
const map = require('../languages/map.json')
const hu = require('../languages/hu.json')
const en = require('../languages/en.json')

export const languages = [hu, en]
export const MAP = map
export const text = (language, source, ...props) => {
  let active = languages.find((lang) => lang.code === language)
  if (active === undefined) {
    return language + '_' + source
  }
  return format(active[source], ...props)
}
