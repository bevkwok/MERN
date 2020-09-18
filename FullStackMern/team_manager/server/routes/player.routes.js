const PlayerController = require("../controllers/player.controller");
const Player = require("../models/player.model");

module.exports = app => {
    app.get("/api/players", PlayerController.getAllPlayers);
    app.post("/api/players/new", PlayerController.addPlayers);
    app.get("/api/players/:id", PlayerController.getOnePlayer);
    app.put("/api/players/update/:id", PlayerController.updatePlayer);
    app.delete("/api/players/delete/:id", PlayerController.deletePlayer);
};