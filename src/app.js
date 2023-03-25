import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "The Lord of the Rings" },
  { id: 2, title: "The Hobbit" },
  { id: 3, title: "Silmarillion" },
  { id: 4, title: "Dragonlance" },
];

app.get("/", (req, res) => {
  res.status(200).send("The Lord of the Nodes");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

app.get("/books/:id", (req, res) =>{
  let index = findBook(req.params.id)
  res.json(books[index])
})

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book added");
});

app.put("/books/:id", (req, res) => {
  let index = findBook(req.params.id);
  books[index].title = req.body.title;
  res.json(books);
});

app.delete('/books/:id', (req, res) =>{
  let index = findBook(req.params.id)
  books.splice(index, 1)
  res.json(books)
})

const findBook = (id) => {
  return books.findIndex((book) => book.id == id);
};

export default app;
