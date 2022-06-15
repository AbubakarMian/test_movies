const validator = require('../../helpers/validate');

const getReferralLogs = (req, res, next) => {
    const validationRule = {
        id:'numeric',
        logtype:'numeric',
        referral_id: 'numeric',
        call_status: 'string',
        receptionist_name: 'string',
        duration_in_sec:'string',
        call_date_and_time: 'string',
        referring_person_name:'string',
        notes:'string',
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


const postReferralLog = (req, res, next) => {
    const validationRule = {
        logtype: 'required|numeric',
        referral_id: 'required|numeric',
        call_status: 'required|string',
        receptionist_name: 'string',
        duration_in_sec:'string',
        call_date_and_time: 'string',
        referring_person_name:'string',
        notes:'string',
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

const updateReferralLog = (req, res, next) => {
    const validationRule = {
        id: 'required|numeric',
        referral_id: 'required|numeric',
        call_status: 'required|string',
        receptionist_name: 'string',
        duration_in_sec:'string',
        call_date_and_time: 'string',
        referring_person_name:'string',
        notes:'string',
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



const deleteReferralLog = (req, res, next) => {
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
    getReferralLogs,
    postReferralLog,
    updateReferralLog,
    deleteReferralLog
}