module.exports.result = function (req, res) {
    res.send('Turkey!');
}

module.exports.test = async function(req, res, next) {
    res.status(200).json("Hello World 123");
}

module.exports.answer = async function(req, res, next) {
    try{
        const status = 200;
        const answers = req.body.answers;
        let result = JSON.parse(answers[0]);

        res.status(status).json(result);
    }
    catch(err){
        next(err);
    }
};