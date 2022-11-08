type ISettings = {
  title: string
  showSettings: boolean
  tagsView: boolean
  fixedHeader: boolean
  sidebarLogo: boolean
  errorLog: string
}

const settings: ISettings = {
  title: 'Fast Admin',
  showSettings: true,
  tagsView: true,
  fixedHeader: false,
  sidebarLogo: false,
  errorLog: 'production'
}

export default settings
