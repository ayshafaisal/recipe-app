const express=require('express')
const Model=require('../model/model')
const router=express.Router();
router.post('/add', async (req,res)=>{
   
    const data=new Model({
        name:req.body.name,
        cusine:req.body.cusine,
        description:req.body.description,
        img:req.body.img
      
    })
    try{
      
        const dataToSave=await data.save();
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})
router.get("/show", function (req, res) {
    Model.find({}, function (err, data) {
        if (!err) {
           res.json(data)
        } else {
            throw err;
        }
    }).clone().catch(function(err){ console.log(err)})
});
module.exports= router;