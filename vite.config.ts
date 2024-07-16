import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevtools from 'vite-plugin-vue-devtools'

export default defineConfig(()=>{
  return {
    plugins:[
      vue(),
      vueJsx(),
      vueDevtools()
    ]
  }
})
