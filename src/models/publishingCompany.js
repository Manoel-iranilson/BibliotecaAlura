import mongoose from "mongoose";

const PublishingCompanySchema = new mongoose.Schema(
    {
        id:{type:String},
        name: {type:String,required:true}
    }
)

const PublishingCompany = mongoose.model("publishingCompany",PublishingCompanySchema)

export default PublishingCompany