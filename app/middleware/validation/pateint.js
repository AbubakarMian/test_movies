const validator = require('../../helpers/validate');

const getPatients = (req, res, next) => {
    const validationRule = {
        pageSize: 'numeric|required',
        pageNo: 'numeric|required'
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


const postPatient = (req, res, next) => {
    const validationRule = {
        referral_id:'numeric',
        patient_name: 'string',
        address:'string',
        phone:'string',
        dob:'date',
        legal_gardian:'string',
        email:'email',
        marital_status:'string',
        race:'string',
        reason_for_contact:'string',
        insurance_name:'string',
        insurance_member_id:'string',
        insurance_group:'string',
        relationship_to_insured:'string',
        insured_ssn:'string',
        ssn:'string',
        emergency_name:'string',
        emergency_phone:'string',
        emergency_relationship:'string',
        insured_person:'string',
        gender:'string',
        insured_dob:'date',
        insurance_phone:'string',
        status_id:'numeric',
        consentForm:'',
        first_name:'string',
        middle_name:'string',
        last_name:"string",
        country:'string',
        state:"string",
        ethnicity:"string",
        other_ethnicity:'string',
        email_of_contact_person:'string',
        disability:'string',
        employment_status:'string',
        religion:'string',
        birth_order:'birth_order',
        family_size:"numeric",
        alt_address:'string',
        maiden:'string',
        preferred_language:'string',
        other_email:'email',
        sexual_orientation:'string',
        veteren:'boolean',
        multiple_birth:'boolean',
        native_american:'boolean',
        patient_notes:'string',
        mis_notes:'string',
        number_of_siblings:'numeric',
        any_medication:'boolean',
        any_allergies:'boolean',
        using_tabboco:'boolean',
        using_illegal_drugs:"boolean",
        diagnosed_covid:"boolean",
        using_alcohol:'boolean',
        family_doctor:'string',
        family_doctor_number:'string',
        alt_city:"string",
        alt_state:"string",
        city:"string",
        alt_street:"string",
        insured_provider_city:"string",
        insured_provider_state:"string"
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

const updatePatient = (req, res, next) => {
    const validationRule = {
        id: 'required|numeric',
        referral_id:'numeric',
        patient_name: 'string',
        address:'string',
        phone:'string',
        dob:'date',
        legal_gardian:'string',
        email:'email',
        marital_status:'string',
        race:'string',
        reason_for_contact:'string',
        insurance_name:'string',
        insurance_member_id:'string',
        insurance_group:'string',
        relationship_to_insured:'string',
        insured_ssn:'string',
        ssn:'string',
        emergency_name:'string',
        emergency_phone:'string',
        emergency_relationship:'string',
        insured_person:'string',
        gender:'string',
        insured_dob:'date',
        insurance_phone:'string',
        status_id:'numeric',
        consentForm:'',
        first_name:'string',
        middle_name:'string',
        last_name:"string",
        country:'string',
        state:"string",
        ethnicity:"string",
        other_ethnicity:'string',
        email_of_contact_person:'string',
        disability:'string',
        employment_status:'string',
        religion:'string',
        birth_order:'birth_order',
        family_size:"numeric",
        alt_address:'string',
        maiden:'string',
        preferred_language:'string',
        other_email:'email',
        sexual_orientation:'string',
        veteren:'boolean',
        multiple_birth:'boolean',
        native_american:'boolean',
        patient_notes:'string',
        mis_notes:'string',
        number_of_siblings:'required|numeric',
        any_medication:'boolean',
        any_allergies:'boolean',
        using_tabboco:'boolean',
        using_illegal_drugs:"boolean",
        diagnosed_covid:"boolean",
        using_alcohol:'boolean',
        family_doctor:'string',
        family_doctor_number:'string',
        alt_city:"string",
        alt_state:"string",
        city:"string",
        alt_street:"string",
        insured_provider_city:"string",
        insured_provider_state:"string"
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



const deletePatient = (req, res, next) => {
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
    getPatients,
    postPatient,
    updatePatient,
    deletePatient
}