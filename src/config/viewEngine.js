import express from  'express';

let configViewEngine = (app) => {

  // Config Static File
  app.use(express.static("./src/public"));

  // Config View Engine
  app.set("view engine", "ejs");
  app.set("views", "./src/views")
}

module.exports = configViewEngine;