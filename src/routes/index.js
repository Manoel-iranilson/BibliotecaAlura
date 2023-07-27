import express from "express";
import books from './booksRoutes.js'
import authors from './authorsRoutes.js'
import PublishingCompany from './PublishingCompanyRoutes.js'
const routes = (app)=>{
    app.route("/").get((req,res)=>{
        res.status(200).send({titulo:"curso de node"})
    })

    app.use(
        express.json(),
        books,
        authors,
        PublishingCompany
    )

    

}

export default routes