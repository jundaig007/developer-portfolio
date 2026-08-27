import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const portraitUrlFix = () => ({
  name: 'portfolio-portrait-url-fix',
  transform(code, id) {
    if (!id.endsWith('/src/App.jsx')) return null

    return code.replace(
      '`${import.meta.env.BASE_URL}portfolio-portrait.jpg`',
      "'https://raw.githubusercontent.com/jundaig007/developer-portfolio/main/public/portfolio-portrait.jpg'",
    )
  },
})

export default defineConfig({
  plugins: [react(), portraitUrlFix()],
  base: '/',
})
