import {Schema, model, Document} from 'mongoose';

export interface IUrl extends Document{
    originalUrl: string;
    shortUrl: string;
    createdAt: Date;
}

const urlSchema = new Schema({
    originalUrl: {
        type: String,
    },
    shortUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export default model<IUrl>('Url', urlSchema)