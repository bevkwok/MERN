const Player = require('../models/player.model');

module.exports.getAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json(allPlayers))
        .catch(err => res.json(err));

};

module.exports.addPlayers = (req, res) => {
    const { name, position } = req.body;
    Player.create({
        name,
        position
    })
        .then(addedPlayers => res.json(addedPlayers))
        .catch(err => res.status(400).json(err));
};

module.exports.getOnePlayer = (req, res) => {
    Player.findOne({_id:req.params.id})
        .then(thePlayer => {
            console.log(thePlayer)
            console.log("success")
            if(thePlayer == null) {
                res.status(400).json(err)
            }
            res.json(thePlayer)
        })
        .catch(err => {
            console.log("error")
            console.log(err)
            res.status(400).json(err)
        });
};

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id:req.params.id}, req.body, {runValidators: true, new:true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id:req.params.id})
        .then(deletedPlayer => res.json(deletedPlayer))
        .catch(err => res.json(err));
};