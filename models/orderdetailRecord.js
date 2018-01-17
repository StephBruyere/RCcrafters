module.exports = function(sequelize, Sequelize) {

var OrderDetailRecord = sequelize.define("OrderDetailRecord", {
  lineid: {
    type: Sequelize.INTEGER, allowNull: false, primarykey: true
  },
  orderid: {
    type: Sequelize.INTEGER, allowNull: false
  },
  productid: {
    type: Sequelize.STRING, allowNull: false
  },
  description: {
    type: Sequelize.STRING, allowNull: false
  },
  qty: {
    type: Sequelize.STRING, allowNull: false
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2), allowNull: false
  }
});

//********************/
// InSync with the DB /
//********************/
return OrderDetailRecord;

}

