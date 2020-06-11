const cryptController = require("./controllers/cryptController");
const codenationController = require("./controllers/codenationController");
const sendMessageController = require("./controllers/sendMessageController");
const routes = require("express").Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

routes.get("/codenation", codenationController.index);
routes.post("/codenation-submit", upload.single('answer'), codenationController.store);

routes.get("/message", cryptController.index);
routes.put("/message", cryptController.update);

routes.post("/submit-message", sendMessageController.store);

module.exports = routes;
