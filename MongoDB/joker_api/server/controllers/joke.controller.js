const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ joke: allJokes}))
        .catch(err => res.json({ message: "Error", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(OneJoke => res.json({ joke: OneJoke }))
        .catch(err => res.json({ message: "Error", error: err}));
};

module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample:{size: 1}}])
        .then(RanJoke => res.json({ joke: RanJoke}))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newCreatedJoke => res.json({ joke: newCreatedJoke }))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke}))
        .catch(err => res.json({ message: "Error", error: err }));
};

module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({_id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Error", error: err }));
};