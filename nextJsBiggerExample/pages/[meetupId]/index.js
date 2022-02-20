import { useRouter } from 'next/router';
import MeetupDetail from './../../components/meetups/MeetupDetail';

const MeetupDetailPage = (props) => {

    const router = useRouter();

    return props.meetupData && <MeetupDetail meetup={props.meetupData} />

}

const getData = async (mongoClient) => {

    // connect to your cluster
    const client = await mongoClient.connect('mongodb+srv://root:root1234@cluster0.jyaui.mongodb.net/meetups?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('meetups');
    // execute find query
    const items = await db.collection('meetups').find({}, {_id: 1}).toArray();
    console.log(items);
    // close connection
    client.close();
    return items;

}

const getMeetup = async (mongoClient, meetupId) => {

    const { ObjectId } = require('mongodb');

    // connect to your cluster
    const client = await mongoClient.connect('mongodb+srv://root:root1234@cluster0.jyaui.mongodb.net/meetups?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('meetups');
    // execute find query
    const item = await db.collection('meetups').findOne({_id: ObjectId(meetupId)});
    console.log(item);
    // close connection
    client.close();
    return item;

}

export const getStaticPaths = async () => {

    const { MongoClient } = require('mongodb');
    const data = await getData(MongoClient);

    return {
        paths: data.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
        fallback: false
    };
}

export const getStaticProps = async (context) => {

    const params = context.params;

    const { MongoClient } = require('mongodb');
    const data = await getMeetup(MongoClient, params.meetupId);

    return {
        props: {
            meetupData: {
                id: data._id.toString(),
                title: data.title,
                address: data.address,
                image: '/bild.jpg',
                description: data.description
            }
        }
    };
}

export default MeetupDetailPage;