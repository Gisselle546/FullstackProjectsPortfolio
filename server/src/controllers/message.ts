import { Response, Request } from 'express';
import { IMessage } from '../types/message';
import { Message } from '../models/message';

const newMessage = async(req: Request, res: Response) =>{
    try{
        const {name, message, email} = req.body as Pick<IMessage, 'name'| 'message' | 'email'>
    
        if(!name || !message || !email){
            return res.status(403).send('please provide all values')
        }

        const bottlemessage: IMessage = new Message({
            name,
            message,
            email
        })

        const newMessage: IMessage = await bottlemessage.save();
        res.status(200).json(newMessage)
    }catch(error){
        throw error
    }
}

const getMessages = async(req: Request, res: Response) =>{
    try{
        const messages: IMessage[] = await Message.find()
        res.status(200).json(messages)

    }catch(error){
        throw error
    }
}

export {newMessage, getMessages}