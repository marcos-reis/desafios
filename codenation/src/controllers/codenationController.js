const jsonfile = require("../../origin.json");
module.exports = {
  async index(req, res) {
    res.send(jsonfile);
  },
  async store(req,res){
    res.json(req.file)
  }
};
