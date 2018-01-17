module.exports = function(sequelize, Sequelize) {

var OrderHeaderRecord = sequelize.define("OrderHeaderRecord", {
  username: {
    type: Sequelize.STRING, allowNull: false
  },
  date: {
    type: Sequelize.STRING, allowNull: false
  },
  total: {
    type: Sequelize.DECIMAL(10, 2), allowNull: false
  }
});

//********************/
// InSync with the DB /
//********************/
return OrderHeaderRecord;

}
