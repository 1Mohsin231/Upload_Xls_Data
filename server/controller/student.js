const std = require("../models/Students.models");
// const mongoose = require('mongoose')
exports.stdinsert =  (req, res) => {
    for(var i=0;i<req.body.length;i++)
    {
        const stu = new std({
            id:req.body[i].id,
            name: req.body[i].name,
            class: req.body[i].class,
            section: req.body[i].section,
            
            age: req.body[i].age,
            attendance: req.body[i].attendance,
        })

        stu.save()
        
        .then(() =>{
            console.log(stu);
            res.json({
                message: "success"
            })
        })
        // .catch((err) =>{
        //     res.json({
        //         message: "an error occured"
        //     })
        // })
        // console.log(stu);
    }
   

    
}

exports.getstudents =  (req, res) => {
    console.log("get students")
    std.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: "an error occured"
        })
    })
    // https://github.com/Rahulesakk  repo link
}