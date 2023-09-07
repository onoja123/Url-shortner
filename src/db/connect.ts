
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/url'

export const connectDb = async () =>{
    try {
        await mongoose.connect(MONGODB_URI, {
        }).then(()=>{
            console.log('⚡️:: Connected to MongoDB!')
        }).catch(err =>{
            console.error(`Can't connect to MongoDB ${err} `)
        })
    } catch (err) {
        console.error(err);
    }

}