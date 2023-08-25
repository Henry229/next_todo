import mongoose from 'mongoose';

const connection = {};

const uri = process.env.MONGODB_URI; // MongoDB 연결 문자열

async function connectDB() {
  if (connection.isConnected) {
    // 이미 연결된 경우
    return;
  }

  // DB 연결
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
