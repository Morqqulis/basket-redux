import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
			'@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
			'@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
			'@ui': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
			'@sections': fileURLToPath(new URL('./src/components/sections', import.meta.url)),
			'@providers': fileURLToPath(new URL('./src/components/providers', import.meta.url)),
		},
	},
})
