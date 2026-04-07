export default (sequelize, DataTypes) => {
  const produtos = sequelize.define('produtos', {
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

    caracterisca: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'produto',
    timestamps: false
  });
  return produtos;
};
