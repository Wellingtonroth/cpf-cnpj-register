const mongoose = require('mongoose');

// Data model used for users with cpf / cnpj
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cpfcnpj: {
      type: String,
      required: true,
      unique: true
    },
    blacklist: {
      type: Boolean,
      default: false
    }
  }, 
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);