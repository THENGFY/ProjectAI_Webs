import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    {
      name: 'multi-page-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/project-management' || req.url === '/project') {
            req.url = '/project.html';
          } else if (req.url === '/ai-services') {
            req.url = '/ai-services.html';
          } else if (req.url === '/contact') {
            req.url = '/contact.html';
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aiServices: resolve(__dirname, 'ai-services.html'),
        project: resolve(__dirname, 'project.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
