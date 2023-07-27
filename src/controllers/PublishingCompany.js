import publishingCompany from "../models/publishingCompany.js";

class PublishingCompanyController{

    static listPublishingCompany = async (req,res)=>{
        try {
            const listPublishingCompany = await publishingCompany.find();
            res.status(200).json(listPublishingCompany);
          } catch (err) {
            // Lide com o erro de forma adequada
            res.status(500).json({ error: 'Erro ao buscar os autores' });
          }
    }

   static listPublishingCompanyPorId = async (req,res) => {
      const id = req.params.id
      try {
      let list = await publishingCompany.findById(id)
      
      res.status(200).json(list);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o autor' });
      }

    } 

    static registerPubliclistPublishingCompany = async (req,res)=>{
      let company = new publishingCompany(req.body);
      try {
        company.save()
        res.status(200).json(company.toJSON());
      } catch (err) {
        res.status(500).json({ error: `${err} -falha ao salvar` });
      }

      
 
    }

    static updatePubliclistPublishingCompany = async (req,res) => {
      const id = req.params.id

      try {
        await publishingCompany.findByIdAndUpdate(id, { $set:req.body })
        res.status(200).send('autor atualizado')
      } catch (error) {
        res.status(500).send(`erro ao atualizar autor ${error}`)
        
      }

    }

    static deletePubliclistPublishingCompany = async (req,res) => {
      const id = req.params.id

      try {
        await publishingCompany.findByIdAndDelete(id)
        res.status(200).send('autor Deletado')
      } catch (error) {
        res.status(500).send(`erro ao deletar autor ${error}`)
      }

    }

}

export default PublishingCompanyController;