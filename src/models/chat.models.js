import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,  // ← reference to a User document
    ref: 'User',                           // ← which model to reference
    required: true,
  },
  title: {
    type: String,
    default: 'New Chat',
  }
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);