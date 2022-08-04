const MailRoutes = require("express").Router();

const { getAll, getOne, postOne } = require("./mail.controllers");

MailRoutes.get("/", getAll);

MailRoutes.get("/:id", getOne);

MailRoutes.post("/", postOne);


module.exports = MailRoutes;
