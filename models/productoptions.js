module.exports = function(sequelize, Sequelize) {

var ProductOptions = sequelize.define("ProductOptions", {
  optionid: {
    type: Sequelize.STRING, allowNull: false
  },
  productid: {
    type: Sequelize.STRING, allowNull: false
  },
  description: {
    type: Sequelize.STRING, allowNull: true
  },
  price: {
    type: Sequelize.STRING, allowNull: false
  }
});

//********************/
// InSync with the DB /
//********************/
return ProductOptions;
};