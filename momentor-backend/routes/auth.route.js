import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  changePassword,
} from "../controller/auth.controller.js";

const router = express.Router();

// Signup (for creating admin user now)
router.post("/signup", signupUser);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

// Change password (token is checked inside controller)
router.post("/change-password", changePassword);

export default router;
