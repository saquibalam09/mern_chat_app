import express from "express";
import dotenv from "dotenv";
import messageRoutes from "./routes/message.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectTodb from "./db/connectTodb.js";

import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello wolrd");
});
// app.get("/api/auth/signup", (req, res) => {
//   console.log("Signup route");
// });

// app.get("/api/auth/login", (req, res) => {
//   console.log("Login route");
// });

// app.get("/api/auth/logout", (req, res) => {
//     console.log("Logout route");
//   });

app.use("/api/users", userRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/auth", authRoutes);

server.listen(PORT, () => {
  connectTodb();
  console.log(`Server is running on ${PORT}`);
});
