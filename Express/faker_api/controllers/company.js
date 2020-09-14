const Company = require("./../models/Company")

module.exports = {
    create: (req, res) => {
        res.json(new Company());
    },

    show: (req, res) => {
        res.json(new Company(), new Company(), new Company());
    }
}

