const fs = require("fs")
const api = require("../services/api");

module.exports = {
    async store(req,res){
        fs.readFile("answer.json", "utf8",(err,data)=>{})
       const submitMessage =  req.files
            res.send(submitMessage)
    }
}