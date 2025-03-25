import express from "express";
import User from "../models/user";

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

export default userRouter;

//