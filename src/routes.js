const Router = require("express").Router();

const EditController = require("./controllers/EditableController")

Router.post("/editable", EditController.edit)

module.exports = Router;