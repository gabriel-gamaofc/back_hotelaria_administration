export default (sequelize, DataTypes) => {
    const vendasRusomo = sequelize.define('vendasRusomo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        caracterisca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nome_produtos: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data_nascimento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        tableName: 'vendas_geral',
        timestamps: false
    });
    return vendasRusomo;
};
