export default (sequelize, DataTypes) => {
    const Vendas = sequelize.define('vendas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_produto: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'vendas',
        timestamps: false
    });
    return Vendas;
};
