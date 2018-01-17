module.exports = function(sequelize, Sequelize) {

var ContactRecord = sequelize.define("ContactRecord", {
  firstname: {
    type: Sequelize.STRING, allowNull: false
  },
  lastname: {
    type: Sequelize.STRING, allowNull: false
  },
  address1: {
    type: Sequelize.STRING, allowNull: false
  },
  address2: {
    type: Sequelize.STRING, allowNull: true
  },
  city: {
    type: Sequelize.STRING, allowNull: false
  },
  state: {
    type: Sequelize.STRING, allowNull: false
  },
  day: {
    type: Sequelize.STRING, allowNull: false
  },
  evening: {
    type: Sequelize.STRING, allowNull: true
  },
  email: {
    type: Sequelize.STRING, allowNull: false
  },
  comments: {
    type: Sequelize.STRING, allowNull: true
  }
});


//********************/
// InSync with the DB /
//********************/
return ContactRecord;
};