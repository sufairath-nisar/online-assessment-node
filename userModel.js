import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: true,
        unique: true
      },
    one: {
      type: Number,
      required: true,
     
    },
    two: {
      type: Number,
      required: true
    },
   
   
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;




