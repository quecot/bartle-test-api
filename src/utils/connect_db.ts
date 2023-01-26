import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const connectDb = () => {
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.DATABASE_URL, () => {
    // eslint-disable-next-line no-console
    console.log('[+] Connected to database.');
  });
};

export default connectDb;
