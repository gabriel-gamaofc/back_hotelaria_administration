import Sequelize from 'sequelize';

import sequelizeConnection from '../../config/db.mjs';

import UsuarioModel from './usuarioModels.mjs';

const sequelize = sequelizeConnection;


const Usuario = UsuarioModel(sequelize, Sequelize.DataTypes);





   

// Exporta os modelos e o sequelize
export {
    sequelize,
    Sequelize,
    Usuario
   
};

