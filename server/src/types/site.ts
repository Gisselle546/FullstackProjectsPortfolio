import { Document } from 'mongoose';

export interface ISite extends Document{
    name: string;
    description: string;
    githuburl: string;
    url: string;
    images: Array<string>
}