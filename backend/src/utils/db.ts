import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGODB_URI = "mongodb+srv://mongodb:mongo123@cluster0.aajzzhp.mongodb.net/blogDB";
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB; 
