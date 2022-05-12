const countriesService = require("./countriesService");

let countries = [];
countriesService.initializeEuropeanCountries(countries);

function random_item(items)
{
    return items[Math.floor(Math.random()*items.length)];
}

module.exports.adviceCountry = function(answerOne, answerTwo, answerThree, answerFour, answerFive) {
    let possibleCountries = countries
        .filter(country => String(country.climate) === answerOne)
        .filter(country => String(country.continent) === answerTwo)
        .filter(country => String(country.geo) === answerThree)
        .filter(country => String(country.mood) === answerFour)
        .filter(country => String(country.tours) === answerFive);

    return random_item(possibleCountries);
}