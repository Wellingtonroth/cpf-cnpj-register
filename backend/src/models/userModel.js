const mongoose = require('mongoose');

// Data model used for users with cpf / cnpj
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  cnpjcpf: {
    type: String,
    required: true,
    unique: true
  },
  blacklist: {
    type: Boolean,
    default: false
  },
  create_date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);