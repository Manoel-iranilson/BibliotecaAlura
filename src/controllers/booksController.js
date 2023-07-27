import books from "../models/book.js";

class BookController{

    static listbooks = async (req,res)=>{
        try {
            const listaBooks = await books.find().populate('author').populate('publishing_company').exec();
            res.status(200).json(listaBooks);
          } catch (err) {
            // Lide com o erro de forma adequada
            res.status(500).json({ error: 'Erro ao buscar os livos' });
          }
    }

    static listBookId = async (req,res) => {
      const id = req.params.id
      try {
      let a = await books.findById(id).populate('author').exec()
      res.status(200).json(a.toJSON());
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o Book' });
      }

    }

    static registerBook = async (req,res)=>{
      let Book = new books(req.body);
      try {
        Book.save()
        res.status(200).json(Book.toJSON());
      } catch (err) {
        res.status(500).json({ error: `${err} -falha ao salvar` });
      }

 
    }

    static updateBook = async (req,res) => {
      const id = req.params.id

      try {
        await books.findByIdAndUpdate(id, { $set:req.body })
        res.status(200).send('livro atualizado')
      } catch (error) {
        res.status(500).send(`erro ao atualizar livro ${error}`)
        
      }

    }

    static deleteBook = async (req,res) => {
      const id = req.params.id

      try {
        await books.findByIdAndDelete(id)
        res.status(200).send('Book Deletado')
      } catch (error) {
        res.status(500).send(`erro ao deletar Book ${error}`)
      }

    }

    static listBookAuthor = async (req,res) => {
      const author = req.query.author
      try {
        const listBook =await books.find({'author':author})
        res.status(200).json(listBook);
      } catch (error) {
        res.status(500).json({ error: `${error} -falha ao buscar` });
      }


    }

}

export default BookController