import routes from "./routes/router";
import express from 'express';
const app = express();


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server running on por ${PORT}`);
})
app.use(express.json());
app.use(routes)