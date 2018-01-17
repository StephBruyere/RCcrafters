module.exports = function(sequelize, Sequelize) {

var product = sequelize.define("product", {

  ProductID: {
    type: Sequelize.STRING, allowNull: false
  },
  Description: {
    type: Sequelize.STRING, allowNull: false
  },
  Price: {
    type: Sequelize.DECIMAL, allowNull: false
  },
  PicPath: {
    type: Sequelize.STRING, allowNull: true
  },
  ButtonText: {
    type: Sequelize.STRING, allowNull: false
  },
  Type: {
    type: Sequelize.STRING, allowNull: false
  }
});
//********************/
// InSync with the DB /
//********************/
return product;
}
