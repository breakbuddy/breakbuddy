const gameService = require("../services/gameService");

module.exports.answer = async function(req, res, next) {
    try{
        const status = 200;
        const answerOne = req.body.answerOne;
        const answerTwo = req.body.answerTwo;
        const answerThree = req.body.answerThree;
        const answerFour = req.body.answerFour;
        const answerFive = req.body.answerFive;

        let result = gameService.adviceCountry(answerOne, answerTwo, answerThree, answerFour, answerFive);
        res.status(status).json(result.name);
    }
    catch(err){
        next(err);
    }
};

module.exports.image = async function(req, res, next) {
    res.sendfile("../../source/flags/australia.png");
}