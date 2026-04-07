import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const env = process.env.NODE_ENV || 'development'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envFilePath = path.resolve(__dirname, `../../.env.${env}`)

// ⚠️ Só carrega se ainda não foi carregado
if (!process.env.SERVER_HOST) {
  dotenv.config({ path: envFilePath })
}

const servidorConfig = {
  server: {
    host: process.env.SERVER_HOST || '0.0.0.0',
    port: Number(process.env.PORT) || 4780
  },

  auth: {
    jwtSecret: process.env.JWT_SECRET || null,
    mode: process.env.AUTH_MODE || 'local'
  }
}

// LOG LIMPO E CORRETO
console.info(`
[SERVER_CONFIG]
host=${servidorConfig.server.host}
port=${servidorConfig.server.port}
authMode=${servidorConfig.auth.mode}
jwt=${servidorConfig.auth.jwtSecret ? 'OK' : 'NÃO DEFINIDO'}
`)

export default servidorConfig