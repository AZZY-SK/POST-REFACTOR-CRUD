
// console.log("hello node")


let cl = console.log;


const express = require("express");
const cors=require("cors");
const port = 3001;
const app = express();

  
// middleware

app.use(cors());
app.use(express.json());


// import routes

const routes=require("./router/postsRoutes");

//connect routes

app.use("/api/posts",routes);


app.listen(port, () => {
  cl(`Server running at http://localhost:${port}`);
});