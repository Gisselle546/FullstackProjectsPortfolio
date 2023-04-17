
import { IMessage } from "../types/message";
import { model, Schema} from 'mongoose';
import validator from 'validator'

const messageSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: [true, 'Please Provide email'],
            validate:{
                validator: validator.isEmail,
                message: 'Please provide a valid email'
            }
        },
        message: {
            type: String,
            required: true
        }
    }
)

const Message = model<IMessage>("Message", messageSchema)

export {Message}