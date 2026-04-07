// ================================
// IMPORTS
// ================================
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import { connectDatabase } from './config/db.mjs'
import servidorConfig from './config/server_config.mjs'
import routes from './app/routes/index.mjs'

// ================================
// CONFIGURAÇÃO DE AMBIENTE
// ================================
const env = process.env.NODE_ENV || 'development'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({
  path: path.resolve(__dirname, `../.env.${env}`)
})

// ================================
// APP INIT
// ================================
const app = express()

// ================================
// CONEXÃO COM BANCO (SEGURA)
// ================================
try {
  await connectDatabase()
  console.log('✅ Banco conectado com sucesso')
} catch (error) {
  console.error('❌ Erro ao conectar no banco:', error)
  process.exit(1)
}

// ================================
// CORS CONFIG (SEGURA)
// ================================
const allowedOrigins = (process.env.HOST_FRONT_END || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true) // Postman / curl

    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }

    return callback(new Error(`Origin ${origin} não permitida`))
  },
  credentials: true
}))

// ================================
// MIDDLEWARES GERAIS
// ================================
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true }))

// ================================
// LOG DE REQUISIÇÕES (MELHORADO)
// ================================
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url} - ${new Date().toISOString()}`)
  next()
})

// ================================
// HEALTH CHECK (PROFISSIONAL)
// ================================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date()
  })
})

// ================================
// ROTAS
// ================================
app.use('/api', routes)

// ================================
// 404 HANDLER
// ================================
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.originalUrl,
    method: req.method
  })
})

// ================================
// ERROR HANDLER
// ================================
app.use((err, req, res, next) => {
  const mensagem = err.original?.message || err.message || 'Erro interno do servidor.'

  console.error('[ERROR]', req.method, req.url, '-', mensagem)

  if (err.stack) {
    console.error(err.stack)
  }

  res.status(err.status || 500).json({
    erro: mensagem
  })
})

// ================================
// SERVER START
// ================================
const host = servidorConfig.server.host
const port = servidorConfig.server.port

app.listen(port, host, () => {
  console.log(`🚀 Servidor rodando em http://${host}:${port}`)
})

// ================================
export default app