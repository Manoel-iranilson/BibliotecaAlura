import express  from "express";
import AuthorsController from "../controllers/authorsController.js";

const router = express.Router();

router
    .get('/autores',AuthorsController.listAuthors)
    .get('/autores/:id',AuthorsController.listAuthorPorId)
    .post('/autores',AuthorsController.registerAuthor)
    .put('/autores/:id',AuthorsController.updateAuthor)
    .delete('/autores/:id',AuthorsController.deleteAuthor)

export default router;