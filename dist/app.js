"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const express = require("express");
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
  res.status(202).json({ msg: "No hay token" });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
setTimeout(() => {}, timeout);
