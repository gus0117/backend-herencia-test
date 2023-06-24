const Admin = require('../models/Admin');

const adminCtrl = {}

//Lista todos los admin
adminCtrl.getAdmins = async(req, res) => {
    const admins = await Admin.find();
    res.json(admins);
}

//Agregar admin
adminCtrl.createAdmin = async(req, res) => {
    const admin = new Admin(req.body);
    await admin.save();
    res.json({
        'status':'Admin Saved'
    })
}

//Borrar Admin
adminCtrl.deleteAdmin = async(req, res) =>{
    await Admin.findByIdAndRemove(req.params.id);
}

module.exports = adminCtrl;