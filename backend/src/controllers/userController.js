const User = require('../models/userModel');
const utils = require('../utils/utils');

module.exports = {
  //Get users and sort by recent creations first
  async index(req, res) {
    try {
      const usuarios = await User.find().sort('-createdAt');

      return res.status(200).json(usuarios);
    } catch (e) {
      res.status(500).json({
        error: 500,
        message: e.message,
        stack: e.stack,
      });
    }
  },

  // Create user
  async create(req, res) {
    try {
      const { name, cpfcnpj, blacklist } = req.body;

      if (utils.validate_cpf_cnpj(cpfcnpj)) {
        req.body.cpfcnpj = cpfcnpj;
      } else {
        return res.status(404).json({
          status: "error",
          message: 'CPF or CNPJ is invalid!',
        })
      }
      
      const user = await User.create({
        name,
        cpfcnpj,
        blacklist
      });
  
      return res.status(200).json(user);
    } catch (e) {
      res.status(500).json({
        error: 500,
        message: e.message,
        stack: e.stack,
      });
    }
  },

  // Update selected user
  async update(req, res) {
    try {
      const { id } = req.params;
      const { body: user } = req;

      let validateBody = {
        name: user.name,
        cpfcnpj: user.cpfcnpj,
        blacklist: user.blacklist,
      }

      const userUpdate = await User.findByIdAndUpdate({ _id: id }, validateBody, { new: true });

      return res.status(200).json(userUpdate);
    } catch (e) {
      res.status(500).json({
        error: 500,
        message: e.message,
        stack: e.stack,
      });
    }
  },

  // Delete user
  async delete(req, res) {
    try {
     await User.deleteOne({ _id: req.params.id });

      return res.status(200).json({ message: "User deleted"});
    } catch (e) {
      res.status(500).json({
        error: 500,
        message: e.message,
        stack: e.stack,
      });
    }
  }
}