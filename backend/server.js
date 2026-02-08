//  start server
require("dotenv").config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
const port = process.env.PORT || 4000;
// connectDB();

// app.listen(3000,()=>{
//    console.log("server is running on port 3000");
// })

async function startServer() {
  await connectDB(); // wait for DB FIRST

  app.listen(port, () => {
    console.log("Server started on port 3000");
  });
}
startServer();