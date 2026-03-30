import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    default: false,   // ← new users are unverified by default
  }
}, { timestamps: true });  // ← auto adds createdAt and updatedAt

export default mongoose.model('User', userSchema);