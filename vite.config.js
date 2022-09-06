import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import windi from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [react(), windi()]
})
