
import dotenv from 'dotenv';
dotenv.config();

import app from "./src/app.js";
import connectToDb from './src/config/db.js';

const PORT = process.env.PORT || 3000

connectToDb().then(()=>{
  app.listen(PORT,()=>{
  console.log("server is running on port 3000")
})
  
})



