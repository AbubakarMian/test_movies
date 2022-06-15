const validator = require('../../helpers/validate');

const getAgeGroups = (req, res, next) => {
    const validationRule = {
        id:'numeric',
        pageSize: 'numeric',
        pageNo: 'numeric',
        name: 'string',
    }
    console.log(req.query, "req.query")
    validator(req.query, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(404)
                .send({
                    ResponseCode: "Fail",
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    });
}

module.exports = {
    getAgeGroups,
}