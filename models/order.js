const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const sendSMS = require('../controllers/api/sendsms');
const patient = require('./patient');


class order extends Model {

  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

order.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    patient_id: {
       type:DataTypes.INTEGER,
       references: {
        model: 'Patient',
        key: 'id'
         } 
      },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    hooks: {
      afterUpdate: async (thisOrder) => {
        if (thisOrder.status == 2) {
          const thisPatient = await patient.findByPk(thisOrder.patient_id)
  
          sendSMS("+1" + thisPatient.phone_number, 'Your Order is Ready');
        }
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