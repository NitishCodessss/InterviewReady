import mongoose from 'mongoose';


const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,   
    required: [true, 'Token is required'],
  }
}, {
  timestamps: true,
});


const blacklistToken = mongoose.model("blacklistToken", blackListTokenSchema)

export default blacklistToken;