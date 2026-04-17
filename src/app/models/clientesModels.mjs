export default (sequelize, DataTypes) => {
    const clientes = sequelize.define('clientes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        tableName: 'cliente',
        timestamps: false
    });
    return clientes;
};
