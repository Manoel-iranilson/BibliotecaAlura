import express  from "express";
import bookController from "../controllers/booksController.js";

const router = express.Router();

router
    .get('/livros',bookController.listbooks)
    .get('/livros/buscar',bookController.listBookAuthor)
    .get('/livros/:id',bookController.listBookId)
    .post('/livros',bookController.registerBook)
    .put('/livros/:id',bookController.updateBook)
    .delete('/livros/:id',bookController.deleteBook)

export default router;