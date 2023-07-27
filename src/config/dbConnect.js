import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Manoel:manoel06@alura.coadmgu.mongodb.net/Alura-node")

let db = mongoose.connection

export default db;