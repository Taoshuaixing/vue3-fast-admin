import defaultSettings from '../setting'

const title = defaultSettings.title || 'Fast Admin'
export default function getPageTitle(pageTitle: string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  } else {
  }
  return `${title}`
}
