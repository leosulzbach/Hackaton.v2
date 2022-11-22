import { DataTypes, Model } from 'sequelize';
import db from '../db';
import Categoria from '../models/Categoria';
import Tipo from '../models/Tipos';

class Ingresso extends Model {
  declare id: number;
  declare data: Date;
  declare valor: number;
  declare TipoId: number;
  declare CategoriaId: number;
 };

Ingresso.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }, 
}, {
    sequelize: db,
    tableName: 'ingressos',
    modelName: 'Ingresso'
});

Categoria.hasMany(Ingresso)
Ingresso.belongsTo(Categoria);

Tipo.hasMany(Ingresso)
Ingresso.belongsTo(Tipo);

export default Ingresso;