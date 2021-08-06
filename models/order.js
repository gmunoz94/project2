const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { afterUpdate } = require('./patient');


class order extends Model {

  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
//patient id
//order type
//order status

order.init(

  {

    patient_id: {
       type:DataTypes.INTEGER,
       references: {
        model: 'Patient',
        key: 'id'
         } 
      },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
  
     
    },
    orderstatus: {
      type: DataTypes.STRING,
      allowNull: false,
    
      
    },
  
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async afterUpdate(){

      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
  }
);


module.exports = order;

