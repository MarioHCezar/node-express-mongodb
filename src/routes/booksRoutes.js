import express from "express";
import BooksController from "../controllers/booksController.js";

const router = express.Router();

router
    .get("/books", BooksController.listBooks)
    .post("/books", BooksController.registerBook)

export default router;
