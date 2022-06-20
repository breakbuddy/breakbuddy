const gameService = require("../services/gameService");

function setCountryFlag(country) {
    let name = country.toLowerCase();
    let extension = ".png";
    return name + extension;
}

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

module.exports.country = async function(req, res, next) {
    try {
        let country = req.params.country;
        let image = setCountryFlag(country);

        res.sendFile(image, { root: 'public\\flags' });
    }
    catch (err) {
        next(err);
    }
}