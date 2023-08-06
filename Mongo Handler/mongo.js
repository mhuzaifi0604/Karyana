const ConnectDB = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 6969;
app.use(bodyParser.json());
app.use(cors());


app.get('/data', async (req, res) => {
    try {
        let collection = await ConnectDB();
        let response = await collection.find({}).toArray();
        res.status(200).json(response)
    } catch (error) {
        console.error('Something Went Wrong!', error);
    }

});

app.post('/insert', async(req, res) => {
    try {
        let data = req.body.data;
        let collection = await ConnectDB();
        collection.insertOne({"type":data.type, "price":data.price, "name":data.name});   
        res.send({message:'Document Inserted Successfully!'});
    } catch (error) {
        console.error('Something Went Wrong!', error);
    }
})

app.listen(port, () => {
    console.log(`Connected to Server at port ${port}`);
});
