import express from 'express';
const app = express();
app.use(express.json());


const PORT = 3000;

app.get("/", (req,res) => {
    console.log('asdada');
    res.send("asdasdas");
});

app.listen(PORT,()=>{
    console.log(`Server running on por ${PORT}`);
})