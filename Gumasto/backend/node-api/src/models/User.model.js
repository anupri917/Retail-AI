import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },

    resetOTP: {
      type: String
    },
    resetOTPExpiry: {
      type: Date
    },

    role: {
      type: String,
      enum: ["admin", "store_owner"],
      default: "store_owner"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
