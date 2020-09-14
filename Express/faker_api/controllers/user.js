const User = require("./../models/User")

module.exports = {
    create: (req, res) => {
        res.json(new User());
    },

    show: (req, res) => {
        res.json(new User(), new User(), new User());
    }
}