import { useEffect, useState } from 'react';
import MeetupList from './../components/meetups/MeetupList';

const Index = (props) => {

    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setLoadedMeetups(props.meetups);
    }, []);

    return <MeetupList meetups={loadedMeetups} />;
}

// export const getServerSideProps = async (context) => {

//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }

// }

const getData = async (mongoClient) => {

    // connect to your cluster
    const client = await mongoClient.connect('mongodb+srv://root:root1234@cluster0.jyaui.mongodb.net/meetups?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // specify the DB's name
    const db = client.db('meetups');
    // execute find query
    const items = await db.collection('meetups').find().toArray();
    console.log(items);
    // close connection
    client.close();
    return items;

}

export const getStaticProps = async () => {

    const { MongoClient } = require('mongodb');
    const data = await getData(MongoClient);

    const transformedData = data.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: '/bild.jpg',
        id: meetup._id.toString()
    }))

    return {
        props: {
            meetups: transformedData
        },
        revalidate: 10
    };
}

export default Index;