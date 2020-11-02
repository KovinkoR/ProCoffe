import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    match: /[A-Za-z]\w+/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[A-Za-z]\w+/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  googleId: {
    type: Number,
    unique: true,
  },
  favorites: {
    type: Array,
    default: [],
  },
  raited: {
    type: Array,
    default: [],
  },
  wishlist: {
    type: Array,
    default: [],
  },

});

UserSchema.statics.findOrCreate = function findOrCreate(condition, callback) {
  const user = this;
  user.findOne(condition, (err, result) => (
    result
      ? callback(err, result)
      : user.create(condition, (err, result) => callback(err, result))));
};

export default mongoose.model('User', UserSchema);
