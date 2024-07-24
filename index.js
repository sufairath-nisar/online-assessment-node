// import express from "express";
// import cookieParser from "cookie-parser";
// import userRouter from "./userRoutes.js";
// import connect from "../config/db.js"; // Corrected import


// const app = express();

// app.use(express.json());
// app.use(cookieParser())
// app.use("/api/v1/user", userRouter);

// const port = 7000;
// connect();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./userRoutes.js";
import connect from "./config/db.js"


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = 4000;
connect();

const corsOptions ={
  origin:'http://localhost:5172', 
  credentials:true,          
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/api/v1/user", userRouter);


app.get("/", (req, res) => {
  res.send("server is running!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});