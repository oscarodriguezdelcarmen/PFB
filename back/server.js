"use strict";

import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();

const { PORT } = process.env;

app.get("/", (req, res) => {
  res.send("Hola desde proyecto de fin de bootcamp");
});

app.listen(PORT, () => {
  console.log(`Server on fire 🔥🔥 on ${PORT}`);
});
