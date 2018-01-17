//*******************************************************************************************/
// api-routes.js - this file offers a set of routes for displaying and saving data to the db /
//*******************************************************************************************/
var db = require("../../models");

//********/
// Routes /
//********/
module.exports = function(app) {
  //**********/
  // Get Jets /
  //**********/
  /*app.get("/api/nonjets", function(req, res) {
    db.product.findAll({}).then(function(results) {
      console.log(res.json(results));
    });
  });*/

  app.get("/api/nonjets", function(req, res) {
      db.product.findAll({
        where: {
          Type: "NonJet"
        },
        order: [['ProductID', 'ASC']]
      }).then(function(results) {
        console.log(res.json(results));
      });
  });
  //*************/
  // Get NonJets /
  //*************/
  app.get("/api/jets", function(req, res) {
      db.product.findAll({
        where: {
          Type: "Jet"
        },
        order: [['ProductID', 'ASC']]
      }).then(function(results) {
          console.log(res.json(results));
      });
  });

  /*app.get("/api/jets", function(req, res) {
      console.log("api-routes jets");
      db.ProductRecord.findAll({
        where: {
          type: "jets"
        },
        order: [['productid', 'ASC']]
      }).then(function(results) {
        res.json(results);
        console.log(results);
      });
  });*/
  //****************************************************************/
  // Get a single record by productid (use this for Jets or NonJets)/
  //****************************************************************/
  app.get("/api/singleproduct/:productid", function(req, res) {
    if (req.params.productid) {
     db.product.findAll({
        where: {
          ProductID: req.params.productid
        }
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  //************************/
  // Add an contact record  /
  //************************/
  app.post("/api/saveContact", function(req, res) {
    console.log(req.body);
    db.contactRecord.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      address1: req.body.address1,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      day: req.body.day,
      evening: req.body.evening,
      email: req.body.email,
      comments: req.body.comments
    });
  });

  //***************************/
  // Add an OrderHeader record /
  //***************************/
  app.post("/api/orderheaderrecord", function(req, res) {
    console.log(req.body);
    db.orderheaderRecord.create({
      username: req.body.username,
      date: req.body.date,
      total: req.body.total
    });
  });
  //***************************/
  // Add an OrderDetail record /
  //***************************/
  app.post("/api/orderdetailrecord", function(req, res) {
    console.log(req.body);
    db.orderdetailRecord.create({
      lineid: req.body.lineid,
      orderid: req.body.orderid,
      productid: req.body.productid,
      description: req.body.description,
      qty: req.body.qty,
      amount: req.body.amount
    });
  });
};