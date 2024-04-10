const {response} = require("express");

const createUser = (req,res =response)=>{
    res.json({
        ok: true,
        msg: "createUser"
    })
}

const loginUser = (req,res =response)=>{
    res.json({
        ok:true,
        msg: "loginUser"
    })
}

module.exports = {
    createUser,
    loginUser
}