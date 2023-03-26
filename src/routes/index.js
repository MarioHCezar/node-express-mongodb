import express from "express";
//nao entendi como importar books de um arquivo que nao possui tal variavel
import books from "./booksRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Lord of the Nodes" });
  });

  app.use(express.json(), books);
};

export default routes;
