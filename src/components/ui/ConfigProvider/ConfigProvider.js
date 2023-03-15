import { createContext, useContext } from 'react'
import { SIZES } from '../utils/constant'

export const defaultConfig = {
 
  "themeColor": "green",
  "direction": "ltr",
  
  "primaryColorLevel": 900,
  "cardBordered": true,
  "panelExpand": false,
  "controlSize": "md",
  "navMode": "default",
  "layout": {
    "type": "modern",
    "sideNavCollapse": true
  
},
}

export const ConfigContext = createContext(defaultConfig)

const ConfigProvider = ConfigContext.Provider

export const ConfigConsumer = ConfigContext.Consumer

export function useConfig() {
    return useContext(ConfigContext)
}

export default ConfigProvider
