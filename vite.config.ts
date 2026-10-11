import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Relative assets work for both username.github.io and /repository/ GitHub Pages URLs.
export default defineConfig({ plugins: [react()], base: './' });
