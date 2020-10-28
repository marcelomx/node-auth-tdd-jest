const express = require("express");

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.request(express.json());
  }

  routes() {
    this.express.request(require("./routes"));
  }
}

module.exports = new AppController().express;
