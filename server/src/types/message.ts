import { Document } from 'mongoose';

export interface IMessage extends Document{
    name: string;
    message: string;
    email: string;
}