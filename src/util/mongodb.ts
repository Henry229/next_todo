import mongoose from 'mongoose';

type ConnectionType = {
  isConnected?: boolean;
};

const connection: ConnectionType = {};

// 환경 변수가 반드시 제공되어야 함을 나타내는 것이 더 적절할 수 있습니다.
const uri = process.env.ATLAS_DB_URL!; // MongoDB 연결 문자열

async function connectDB() {
  if (connection.isConnected) {
    // 이미 연결된 경우
    return;
  }

  try {
    // DB 연결
    await mongoose.connect(uri);
    console.log('Conneted to MongoDB');
  } catch (error) {
    console.log(error);
  }
  connection.isConnected = mongoose.connections[0].readyState === 1;
}

export default connectDB;
