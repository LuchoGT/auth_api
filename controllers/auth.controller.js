const {response} = require("express");

const createUser = (req,res =response)=>{

    const {username,password}  = req.body;

    res.status(201).json({
        ok: true,
        msg: "createUser",
        username,
        password
    })
   
}

const loginUser = (req,res =response)=>{

    const {username,password}  = req.body;

    res.json({
        ok:true,
        msg: "loginUser",
        username,
        password
    })
}

module.exports = {
    createUser,
    loginUser
}