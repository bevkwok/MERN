const User = require('./../models/User');
const Company = require('./../models/Company');
const user = require('../controllers/user');
const company = require('../controllers/company');


module.exports = (app) => {

    app.get("/api", (req, res) => {
        res.json({message: "Hello World"});
    });
    
    app.get("/api/users/new", (req, res) => {
        res.json(new User());
    })
    
    app.get("/api/companies/new", (req, res) => {
        res.json(new Company());
    })
    

};