const gameService = require("../services/gameService");

let countries = [];

function initializeEuropeanCountries() {
    countries.push(
        {name: "Turkey", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Belgium", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Italy", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Spain", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Portugal", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "France", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "The Netherlands", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "United Kingdom", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Ireland", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Museum"},
        {name: "Germany", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Russia", climate: "Cold", continent: "Europe", geo: "City", mood: "Experience", tours: "Food"},
        {name: "Ukraine", climate: "Cold", continent: "Europe", geo: "City", mood: "Experience", tours: "Food"},
        {name: "Sweden", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Museum"},
        {name: "Norway", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Museum"},
        {name: "Finland", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Museum"},
        {name: "Poland", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Romania", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Food"},
        {name: "Belarus", climate: "Cold", continent: "Europe", geo: "City", mood: "Experience", tours: "Food"},
        {name: "Greece", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Bulgaria", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Iceland", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Museum"},
        {name: "Hungary", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Austria", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Czech Republic", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Serbia", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Lithuania", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Latvia", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Croatia", climate: "Warm", continent: "Europe", geo: "Nature", mood: "Relax", tours: "Food"},
        {name: "Bosnia And Herzegovina", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Slovakia", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Denmark", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Relax", tours: "Museum"},
        {name: "Switzerland", climate: "Cold", continent: "Europe", geo: "Nature", mood: "Relax", tours: "Food"},
        {name: "Moldova", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Albania", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "North Macedonia", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Slovenia", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Montenegro", climate: "Warm", continent: "Europe", geo: "Nature", mood: "Relax", tours: "Food"},
        {name: "Kosovo", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Luxembourg", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Andorra", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Malta", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Liechtenstein", climate: "Cold", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "San Marino", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Monaco", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Food"},
        {name: "Vatican City", climate: "Warm", continent: "Europe", geo: "City", mood: "Relax", tours: "Museum"},
        {name: "Cyprus", climate: "Warm", continent: "Europe", geo: "Nature", mood: "Experience", tours: "Food"},
    );
}

initializeEuropeanCountries();

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}



module.exports.answer = async function(req, res, next) {
    try{
        const status = 200;
        const answerOne = req.body.answerOne;
        const answerTwo = req.body.answerTwo;
        const answerThree = req.body.answerThree;
        const answerFour = req.body.answerFour;
        const answerFive = req.body.answerFive;

        let possibleCountries = countries
            .filter(country => String(country.climate) === answerOne)
            .filter(country => String(country.continent) === answerTwo)
            .filter(country => String(country.geo) === answerThree)
            .filter(country => String(country.mood) === answerFour)
            .filter(country => String(country.tours) === answerFive);

        let randomCountry = random_item(possibleCountries);

        //let result = gameService.adviceLocation(answerOne);
        res.status(status).json(randomCountry.name);
    }
    catch(err){
        next(err);
    }
};