const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters long"]
    },
    position: {
        type: String,
        minlength: [3, "Position must be at least 3 characters long"]
    }
}, {timestamps: true})

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;