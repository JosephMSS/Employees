exports.success=(req,res,data={},message='',status=200)=>{
    res.status(status).send({
        error:false,
        status:status,
        body:{message,data}
    })
}
exports.error=(req,res,message='Internal server error',status=500)=>{
    res.status(status).send({
        error:true,
        status:status,
        body:{message} 
    })
}