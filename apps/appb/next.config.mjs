import path from 'path';
import { fileURLToPath } from 'url';

// Definir __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Agregar regla para manejar archivos .js y .jsx en la carpeta de shared-components
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: path.resolve(__dirname, '../../shared-components/src'), // Incluye la carpeta src
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel', '@babel/preset-react'], // Asegúrate de que estos presets estén incluidos
        },
      },
    });

    return config;
  },
};

export default nextConfig;
