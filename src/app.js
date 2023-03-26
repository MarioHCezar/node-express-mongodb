import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Connection failed"));
db.once("open", () => {
  console.log("Connection established");
});

const app = express();

app.use(express.json());

routes(app)

// const books = [
//   { id: 1, title: "The Lord of the Rings" },
//   { id: 2, title: "The Hobbit" },
//   { id: 3, title: "Silmarillion" },
//   { id: 4, title: "Dragonlance" },
// ];

// app.get("/", (req, res) => {
//   res.status(200).send("The Lord of the Nodes");
// });

// //Mongoose nao aceita mais funcao callback ao utilizar o find
// //Criar variavel com metodo find assincrono e retornar a variavel na response da consula
// app.get("/books", async (req, res) => {
//   let foundBooks = await books.find()
//     res.status(200).json(foundBooks);
//   });

app.get("/books/:id", (req, res) => {
  let index = findBook(req.params.id);
  res.json(books[index]);
});

// app.post("/books", (req, res) => {
//   books.push(req.body);
//   res.status(201).send("Book added");
// });

app.patch("/books/:id", (req, res) => {
  let index = findBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.delete("/books/:id", (req, res) => {
  let index = findBook(req.params.id);
  books.splice(index, 1);
  res.json(books);
});

const findBook = (id) => {
  return books.findIndex((book) => book.id == id);
};

export default app;
