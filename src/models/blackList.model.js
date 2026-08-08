import mongoose from 'mongoose';


const blackListSchema = new mongoose.Schema({
  token: {
    type: String,   
    required: [true, 'Token is required'],
  }
}, {
  timestamps: true,
});


const blacklistToken = mongoose.model("blacklistToken", blackListSchema)

export default blacklistToken;