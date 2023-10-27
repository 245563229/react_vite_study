import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    open:true
  },
  resolve:{
    extensions:['.ts','.js','.json'],
    alias:{
      //__dirname不能使用的情况下 yarn add @types/node
      '@':path.resolve(__dirname,'./src')
    }
  }
})
