const router=require("express").Router()
const Post=require('../models/Post')
const User=require("../models/User")
const bcrypt=require('bcrypt')


router.put("/:id",async(req,res)=>{
    if(req.params.id===req.body._id)
    {
        if(req.body.password)
        { 
            const salt=await bcrypt.genSalt(10)
            req.body.password=await bcrypt.hash(req.body.password,salt)
        }
    try{
    const user=await User.findByIdAndUpdate(req.params.id,
        {$set:req.body},{new:true})
    
    res.status(200).json(user)
    }catch(err){
      res.status(500).json(err)
    }
}
else
{ 
    res.status(500).json(err)

}
})
router.delete("/:id",async(req,res)=>{
    if(req.params.id===req.body._id)
    {
       try{ 
     const user=await User.findById(req.params.id)
    try{
        await Post.deleteMany({username:user.username})
    await User.findByIdAndDelete(req.params.id)
    
    res.status(200).json("User Deleted")
    }catch(err){
      res.status(500).json(err)
    }
}
    catch(err)
    {
        res.status(500).json(err)
    }
}
else
{ 
    res.status(500).json("cannot delete other account")

}
})

router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports= router