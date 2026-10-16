import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    target: ['es2015', 'safari11', 'chrome61'], // Forces high compatibility for all mobile phones
  }
  
})
