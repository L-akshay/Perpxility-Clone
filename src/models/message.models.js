import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,  // ← reference to a Chat document
    ref: 'Chat',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'ai'],   // ← can only be one of these two values
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('Message', messageSchema);