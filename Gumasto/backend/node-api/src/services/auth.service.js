import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};
