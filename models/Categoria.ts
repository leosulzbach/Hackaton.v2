import { DataTypes, Model } from 'sequelize';
import db from '../db';

class Categoria extends Model {
  declare id: number;
  declare descricao: String;
  declare preco: number;
 };

Categoria.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }, 
}, {
    sequelize: db,
    tableName: 'categorias',
    modelName: 'Categoria'
});

export default Categoria;
