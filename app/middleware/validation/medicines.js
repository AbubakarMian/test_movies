const validator = require('../../helpers/validate');

const getMedicines = (req, res, next) => {
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
                    message: 'Please Fill The Required  Fields',
                    data: err
                });
        } else {
            next();
        }
    });
}

const postMedicines = (req, res, next) => {
    const validationRule = {
        medical_name: 'required|string',
        classl_name:'required|string',
        formula_l:'required|string',
        sideeffects:'required|string',
        preecautions:'required|string',
        dagnosis:'required',
        ageGroups:'required',
        counter_medicines:'required',
        


    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(402)
                .send({
                    ResponseCode: "Fail",
                    message: 'Please Fill The Required  Fields',
                    data: err
                });
        } else {
            next();
        }
    });
}
const editMedicines = (req, res, next) => {
    const validationRule = {
        medicine_id: 'required|numeric',
       
    }
    console.log(req.query, "req.query")
    validator(req.query, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(404)
                .send({
                    ResponseCode: "Fail",
                    message: 'Please Fill The Required  Fields',
                    data: err
                });
        } else {
            next();
        }
    });
}

const updateMedicines = (req, res, next) => {
    const validationRule = {
     
        medical_name: 'required|string',
        classl_name:'required|string',
        formula_l:'required|string',
        sideeffects:'required|string',
        preecautions:'required|string',
        dagnosis:'required',
        ageGroups:'required',
        counter_medicines:'required',

      
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(404)
                .send({
                    ResponseCode: "Fail",
                    message: 'Please Fill The Required  Fields',
                    data: err
                });
        } else {
            next();
        }
    });
}



const deleteMedicines= (req, res, next) => {
    const validationRule = {
        id: 'required|numeric',
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(404)
                .send({
                    ResponseCode: "Fail",
                    message: 'Please Fill The Required  Fields',
                    data: err
                });
        } else {
            next();
        }
    });
}
module.exports = {
    getMedicines,
    postMedicines,
    updateMedicines,
    editMedicines,
    deleteMedicines,
    // getExaminationNames,
    // getExaminationMethods,
    // getSymptoms,
    // getReferralProvider
}