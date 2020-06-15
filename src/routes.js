const Router = require("express").Router();

const EditController = require("./controllers/EditableController")

Router.post("/editable", EditController.edit)
Router.get("/editable", EditController.get)

module.exports = Router;