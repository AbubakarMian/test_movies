const validator = require('../../helpers/validate');

const getSymptoms = (req, res, next) => {
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

const getExaminationNames = (req, res, next) => {
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

const getExaminationMethods = (req, res, next) => {
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

const postSymptom = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        description:'string',
        code:'required|string',
        physical_exam:'required|boolean',
        examination_method_id:'numeric',
        examination_name_id:'numeric',
        // "related_symptoms":[{"id":21},{"id":23}],
        //  "age_groups":[{"id":1}],
        //   "signs":[{"id":1}],
        //    "diseases":[{"id":1}]
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(402)
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

const updateSymptom = (req, res, next) => {
    const validationRule = {
        id: 'required|numeric',
        name: 'string',
        description:'string',
        code:'string',
        physical_exam:'boolean',
        examination_method_id:'numeric',
        examination_name_id:'numeric',
    }
    validator(req.body, validationRule, {}, (err, status) => {
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



const deleteSymptoms = (req, res, next) => {
    const validationRule = {
        id: 'required|numeric',
    }
    validator(req.body, validationRule, {}, (err, status) => {
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
    getSymptoms,
    postSymptom,
    updateSymptom,
    deleteSymptoms,
    getExaminationNames,
    getExaminationMethods,
    // getSymptoms,
    // getReferralProvider
}