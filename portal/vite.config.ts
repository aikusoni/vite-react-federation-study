import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(mode);
  // microfrontend
  let remotePaths = {
    managementApp: '',
    boardApp: ''
  };
  switch (mode) {
    case 'development':
      remotePaths = {
        managementApp: 'http://localhost:3001/assets/remoteEntry.js',
        boardApp: 'http://localhost:3002/assets/remoteEntry.js'
      }
      break;

    case 'production':
      remotePaths = {
        managementApp: '/management/assets/remoteEntry.js',
        boardApp: '/board/assets/remoteEntry.js'
      }
      break;
  }
  
  return {
    plugins: [
      react(),
      federation({
        name: "portal-app",
        remotes: remotePaths,
        shared: ["react", "react-dom", "react-router-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    }
  };
})
