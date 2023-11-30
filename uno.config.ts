import {defineConfig,presetUno,presetIcons} from 'unocss'
import presetAttributify from '@unocss/preset-attributify'
export default defineConfig({
  rules:[],
  presets:[
    presetAttributify({}),
    presetUno({}),
    presetIcons({}),
  ],
  shortcuts:{
  }
 })

