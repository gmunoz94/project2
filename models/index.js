
// fname lname dob phone number email

const patient = require('./patient');
const order = require('./order');



patient.hasMany(order, {
    foreignKey: 'patient_id',
});

order.belongsTo(patient, {
    foreignKey: 'user_id',
});



module.exports = { patient, order };

