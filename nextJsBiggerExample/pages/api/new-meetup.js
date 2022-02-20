import { MongoClient } from 'mongodb';

// /api/new-meetup

const sendData = async (data) => {

    // connect to your cluster
    const client = await MongoClient.connect('mongodb+srv://root:root1234@cluster0.jyaui.mongodb.net/meetups?retryWrites=true&w=majority', { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('meetups');
    // execute find query
    const items = await db.collection('meetups').insertOne(data);
    console.log(items);
    // close connection
    client.close();

}

const handler = (req, res) => {

    if (req.method === 'POST') {
        const data = req.body;
        sendData(data).then(
            res.status(201).json({ message: 'Meetup inserted' })
        );
    }

};

export default handler;