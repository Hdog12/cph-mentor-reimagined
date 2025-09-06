import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/cph-mentor-reimagined/', // <-- Add this line
  plugins: [react()],
});
