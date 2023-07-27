import authors from "../models/author.js";

class AuthorController{

    static listAuthors = async (req,res)=>{
        try {
            const listaAuthors = await authors.find();
            res.status(200).json(listaAuthors);
          } catch (err) {
            // Lide com o erro de forma adequada
            res.status(500).json({ error: 'Erro ao buscar os autores' });
          }
    }

    static listAuthorPorId = async (req,res) => {
      const id = req.params.id
      try {
      let a = await authors.findById(id)
      res.status(200).json(a.toJSON());
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o autor' });
      }

    }

    static registerAuthor = async (req,res)=>{
      let author = new authors(req.body);
      try {
        author.save()
        res.status(200).json(author.toJSON());
      } catch (err) {
        res.status(500).json({ error: `${err} -falha ao salvar` });
      }

 
    }

    static updateAuthor = async (req,res) => {
      const id = req.params.id

      try {
        await authors.findByIdAndUpdate(id, { $set:req.body })
        res.status(200).send('autor atualizado')
      } catch (error) {
        res.status(500).send(`erro ao atualizar autor ${error}`)
        
      }

    }

    static deleteAuthor = async (req,res) => {
      const id = req.params.id

      try {
        await authors.findByIdAndDelete(id)
        res.status(200).send('autor Deletado')
      } catch (error) {
        res.status(500).send(`erro ao deletar autor ${error}`)
      }

    }

}

export default AuthorController;