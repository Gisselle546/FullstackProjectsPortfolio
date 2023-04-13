import { ISite } from "../types/site";
import { model, Schema } from 'mongoose';


const siteSchema: Schema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        description: String,
        githuburl: String,
        url: String
    }
)

export const Site = model<ISite>("Site", siteSchema)