import mongoose from "mongoose";

const bookSchema= new mongoose.Schema(
    {
        id:{type:String},
        title:{type:String,required:true},
        author:{type:mongoose.Schema.Types.ObjectId,ref:"authors"},
        publishing_company : {type:mongoose.Schema.Types.ObjectId,ref:"publishingCompany"}
    }
)

const books = mongoose.model('books',bookSchema)

export default books;