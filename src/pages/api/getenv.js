export default function handeler(req, res) {

    const envobject = {
        ODOO_URL: "https://erp.the-success.net",
        ODOO_DB: "sam_prod",
        ODOO_USERNAME: "admin",
        ODOO_PASSWORD: "Hello@new27",
        ODOO_JOB_NAME: "CHARGE_D'AFFAIRE",
        ODOO_JOB_ID: 11,
        ODOO_TYPE_ID: 1,
    }
    res.send(envobject)

}