const Mail = require("./mail.model");

const getAll = async (req, res, next) => {
 
  try {
    const mailResponse = await Mail.find();
    res.status(200).json(mailResponse);
  } catch (error) {
    return next(error);
  }

};

const getOne = async (req, res, next) => {
 
  try {
    const { id } = req.params;
    const mailResponse = await Mail.findById(id);
    res.status(200).json(mailResponse);
  } catch (error) {
    return next(error);
  }

};


const postOne = async (req, res, next) => {

  try {
    const userEmail = new Mail();
    const userExists = await Mail.findOne({mailContacto: req.body.mailContacto })

    if (!userExists) {
      userEmail.mailContacto = req.body.mailContacto;
      const userToSave = await userEmail.save()
      res.status(201).json(userToSave)
    } else {
      res.json({msg: "El usuario ya existe"})
    }
  } catch (error) {
    res.send(error)
  }
    
};

module.exports = {
  getAll,
  getOne,
  postOne
};
