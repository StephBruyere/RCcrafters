const express = require('express');
const app = express();
const session    = require('express-session');
const passport   = require('passport');
const bodyParser = require('body-parser');
const path = require("path");

require("./routes/api/api-routes")(app);
//*****************************************/
// Configure body parser for AJAX requests /
//*****************************************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//***************/
// For Passport  /
//***************/
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static("client/build"));
//app.use(flash());


app.get(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// Add routes, both API and view
//app.use(routes);

//********/
// Models /
//********/
var models = require("./models");

//********/
// Routes /
//********/
//var authRoute = require('./routes/auth.js')(app,passport);

//**************************/
// load passport strategies /
//**************************/
//require('./config/passport/passport.js')(passport, models.user);
//require('./routes/api-routes.js')(app);

//***************/
// Sync Database /
//***************/
var PORT = process.env.PORT || 8080;
models.sequelize.sync({ force: true }).then(function() {
        app.listen(PORT, function() {
          console.log("App listening on PORT " + PORT);
});
});

//**********************/
// Start the API server /
//**********************/
