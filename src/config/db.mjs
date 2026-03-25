import path from 'path';
import { fileURLToPath } from 'url';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';

const env = process.env.NODE_ENV || 'development';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envFilePath = path.resolve(__dirname, `../../.env.${env}`);
dotenv.config({ path: envFilePath });

console.info('[DB.mjs] Ambiente:', env);
console.info('[DB.mjs] Arquivo de env carregado:', envFilePath);


// =======================================================
// ✅ SEQUELIZE PRINCIPAL
// =======================================================
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    logging: false,
    timezone: 'America/Recife',
    dialectOptions: { useUTC: false },
    pool: {
      max: 5,
      min: 0,
      acquire: 20000,
      idle: 10000
    }
  }
)



// =======================================================
// 📦 EXPORTAÇÃO
// =======================================================

export default sequelize
