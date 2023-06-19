export default function handeler(req, res) {

    const envobject = {
        ODOO_URL: process.env.ODOO_URL,
        ODOO_DB: process.env.ODOO_DB,
        ODOO_USERNAME: process.env.ODOO_USERNAME,
        ODOO_PASSWORD: process.env.ODOO_PASSWORD,
        ODOO_JOB_NAME: process.env.ODOO_JOB_NAME,
        ODOO_JOB_ID: process.env.ODOO_JOB_ID,
        ODOO_TYPE_ID: process.env.ODOO_TYPE_ID,
    }
    res.send(envobject)

}