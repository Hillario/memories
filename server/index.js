import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyparser.json({limit: "30mb", extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//https://www.mongodb.com/cloud/atlas/

const CONNECTION_URL='mongodb+srv://elitecompiler:megasxlr@memories.b9aaud6.mongodb.net/?retryWrites=true&w=majority';
const PORT=process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    app.listen(PORT, () => console.log('Server running on port 5000'))
}).catch((err) => {
    console.log(err.message)
});

//disable warnings on the console
//mongoose.set('useFindAndModify', false)