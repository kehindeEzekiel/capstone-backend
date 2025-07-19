// Register, login controller
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../model/user.model.js";

export const registerController = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const userDetails = await userModel.findOne({ email });
  if (userDetails) {
    return res.status(401).json({ message: "Email already use" });
  }
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await userModel.create({
      firstName,
      lastName,
      email,
      password: hashed,
    });
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error registring user",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });
    res.status(200).json({
      token,
      message: "login success",
      user: { firstName: user?.firstName, lastName: user?.lastName },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "error login in",
    });
  }
};
