import mongoose from "mongoose";
import 'dotenv/config'
const connectToDatabase = async () => {
try {
await mongoose.connect(process.env.MONGOODB_URL)
} catch(error) {
console.log(error)
}
}
export default connectToDatabase;