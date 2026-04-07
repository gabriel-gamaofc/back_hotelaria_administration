import Sequelize from 'sequelize';

import sequelizeConnection from '../../config/db.mjs';

import produtosModels from './produtosModels.mjs';

const sequelize = sequelizeConnection;


const produtos = produtosModels(sequelize, Sequelize.DataTypes);





   

// Exporta os modelos e o sequelize
export {
    sequelize,
    Sequelize,
    produtos
   
};

