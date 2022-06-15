const validator = require('../../helpers/validate');

const getReferrals = (req, res, next) => {
    const validationRule = {
        id:'numeric',
        pageSize: 'numeric|required',
        pageNo: 'numeric|required',
        status_id: 'numeric',
        patient_name:'string',
        referring_person: 'string',
        referring_person_name:'string',
        referral_type_id:'requied|numeric',
        patient_phone:'string',
        phone_no_practice:'string',
        email_of_contact_person:'email',
        patient_email:'email',
        relationship_to_patient:'string',
        address_of_practice:'string',
        phone_of_contact_person:'string',
        reason_for_referral_id:'numeric',
        program_id:"numeric",
        referral_source:'string',
        primary:'string',
        patient_address:'string',
        cheif_complain:'string',

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


const getReferralProvider = (req, res, next) => {
    const validationRule = {
        referral_code:'required|numeric'
      

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


const postReferral = (req, res, next) => {
    const validationRule = {
        referral_source_type:'numeric',
        referring_person: 'string',
        referring_person_name:'string',
        referral_type_id:'required|string',
        patient_name:'required|string',
        patient_phone:'required|string',
        best_time_for_contact:'date',
        phone_no_practice:'string',
        email_of_contact_person:'email',
        patient_email:'email',
        patient_dob:'date',
        relationship_to_patient:'string',
        status_id:'numeric',
        address_of_practice:'string',
        phone_of_contact_person:'string',
        reason_for_referral_id:'numeric',
        program_id:"numeric",
        referral_source:'string',
        primary:'string',
        patient_address:'string',
        cheif_complain:'string',
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

const updateReferral = (req, res, next) => {
    const validationRule = {
        id: 'required|numeric',
        referral_source_type:'numeric',
        referring_person: 'required|string',
        referring_person_name:'required|string',
        referral_type_id:'required|string',
        patient_name:'required|string',
        patient_phone:'required|string',
        best_time_for_contact:'date',
        phone_no_practice:'string',
        email_of_contact_person:'email',
        patient_email:'email',
        patient_dob:'date',
        relationship_to_patient:'string',
        status_id:'numeric',
        address_of_practice:'string',
        phone_of_contact_person:'string',
        reason_for_referral_id:'numeric',
        program_id:"numeric",
        referral_source:'string',
        primary:'string',
        patient_address:'string',
        cheif_complain:'string',
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



const deleteReferral = (req, res, next) => {
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
    getReferrals,
    postReferral,
    updateReferral,
    deleteReferral,
    getReferralProvider
}