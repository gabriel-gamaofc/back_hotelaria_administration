import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
const env = process.env.NODE_ENV || 'development';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFilePath = path.resolve(__dirname, `../../.env.${env}`);
dotenv.config({ path: envFilePath });

const servidorConfig = {
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.PORT || '4780'
};

console.info(`[SERVER_CONFIG] host=${servidorConfig.host} port=${servidorConfig.port} authMode=${servidorConfig.authMode} jwt=${servidorConfig.jwtSecret ? 'OK' : 'NÃO DEFINIDO'}`);

export default servidorConfig;
