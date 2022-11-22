import { DataTypes, Model } from 'sequelize';
import db from '../db';

class Tipo extends Model { 
  declare id: number;
  declare descricao: String;
  declare percentual_ingresso: number;
};

Tipo.init({
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
  percentual_ingresso: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'tipos',
  modelName: 'Tipo'
});

export default Tipo;
