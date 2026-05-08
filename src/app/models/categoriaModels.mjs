export default (sequelize, DataTypes) => {
    const categorias = sequelize.define('categorias', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
       
        
    }, {
        tableName: 'categorias',
        timestamps: false
    });
    return categorias;
};
