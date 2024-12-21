const error =(req,res)=>{
    res.status(404).json({
        success:false,
        message:"API not Found"
    })
}
export{
    error
}