import express  from "express";
import PublishingCompany from "../controllers/PublishingCompany.js";

const router = express.Router();

router
    .get('/editora',PublishingCompany.listPublishingCompany)
    .get('/editora/:id',PublishingCompany.listPublishingCompanyPorId)
    .post('/editora',PublishingCompany.registerPubliclistPublishingCompany)
    .put('/editora/:id',PublishingCompany.updatePubliclistPublishingCompany)
    .delete('/editora/:id',PublishingCompany.deletePubliclistPublishingCompany)

export default router;