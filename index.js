const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const app = express();
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;

const port =process.env.PORT || 5000;

// middleWare
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gfvdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        console.log('connect');
        // const database = client.db("volunter");
        // const eventCollection = database.collection("allEvents");
        // const registerCollection = database.collection("allRegister")

        //   get post

        // app.post('/events', async (req, res) => {
        //     const event = req.body;
        //     const result = await eventCollection.insertOne(event);
        //     console.log('hitted', event, result);
        //     res.json(result);
        // })

        //  get api

        // app.get('/events', async (req, res) => {
        //     const cursor = eventCollection.find({});
        //     const event = await cursor.toArray();
        //     res.send(
        //         event
        //     );
        // })

        

        // get singel event

        // app.get('/events/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await eventCollection.findOne(query);
        //     res.send(result);
        // })

        //post register api
        // app.post('/register', async (req, res) => {
        //     const register = req.body;
        //     const result = await registerCollection.insertOne(register);
        //     console.log('hitted', result);
        //     res.json(result);
        // })

         //  get register api

        //  app.get('/register', async (req, res) => {
        //     const cursor = registerCollection.find({});
        //     const register = await cursor.toArray();
        //     res.send(
        //         register
        //     );
        // })

        //  get singel regester api
        // app.get('/register/:emailId', async (req, res) => {
        //     const emailId = req.params.emailId;
        //     const query = { email: emailId };
        //     const getData = registerCollection.find(query);
        //     const result = await getData.toArray();
        //     res.send(result);
        // })





        // delete api

        // app.delete('/products/:id', async(req,res)=>{
        //     const id = req.params.id;
        //     const query = {_id : ObjectId(id)};
        //     const result = await productCollection.deleteOne(query);
        //     res.send(result);
        // })
    }
    finally {
        //   await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})