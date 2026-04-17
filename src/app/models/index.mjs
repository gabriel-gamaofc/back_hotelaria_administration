import Sequelize from 'sequelize';

import sequelizeConnection from '../../config/db.mjs';

import produtosModels from './produtosModels.mjs';
import vendasRusomo from './vendas ResumoModels.mjs';
import clientesModels from './clientesModels.mjs';
const sequelize = sequelizeConnection;


const produtos = produtosModels(sequelize, Sequelize.DataTypes);
const resumoVendas = vendasRusomo(sequelize, Sequelize.DataTypes);
const clientes = clientesModels(sequelize, Sequelize.DataTypes);



   

// Exporta os modelos e o sequelize
export {
    sequelize,
    Sequelize,
    produtos,
    resumoVendas,
    clientes
};

