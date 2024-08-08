const Model = require('../models/model');

exports.getUsers = async (req, res, next) =>{
    try{
        const users = await Model.findAll();
        res.send(users);
    }
    catch(err){console.log(err)}
}

exports.deleteUsers = async (req, res, next) =>{

    try{
        await Model.destroy({
            where: {
              id: req.params.id,
            },
        });
        res.redirect('/');
    }
    catch(err){console.log(err)}
    
}


exports.postUsers = async (req, res, next) =>{

    try{
        const userName= req.body.userName;
        const phoneNo = req.body.phoneNo;
        const email = req.body.email;

        res.send(await Model.create({
            userName:userName,
            phoneNo:phoneNo,
            email:email
        }))
    }
    catch(err){console.log(err)}
    
}