const {getFromDatabase}= require('../model/user')

const databaseController = {
    data: async(req,res)=>{
        res.send({response: await getFromDatabase(req.body)})
    }
}

module.exports=databaseController;