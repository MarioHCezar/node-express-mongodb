import books from "../models/Book.js";

class BooksController {
  //Mongoose nao aceita mais funcao callback ao utilizar o find
  //Criar variavel com metodo find assincrono e retornar a variavel na response da consulta
  static listBooks = async (req, res) => {
    let foundBooks = await books.find();
    res.status(200).json(foundBooks);
  };

  //criando try/catch para tratar erros, considerando que nao ha mais suporte a callbacks no Mongoose
  static registerBook = async (req, res) => {
    let book = new books(req.body);
    let saveBook = await book.save();
    try {
      res.status(201).send(book.toJSON(saveBook));
    } catch (error) {
      res
        .status(500)
        .send({ message: `${err.message} - failed during book registration.` });
    }
  };
}

export default BooksController;
