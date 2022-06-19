import express from "express";
//const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(202).json({ msg: "No hay token" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
