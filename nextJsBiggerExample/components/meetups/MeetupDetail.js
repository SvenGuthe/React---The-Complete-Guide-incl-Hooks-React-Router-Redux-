import { Fragment } from "react";
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {

    return <section className={classes.detail}>
        {props.meetup && <Fragment><img src={props.meetup.image} alt={props.meetup.description}></img>
            <h1>{props.meetup.title}</h1>
            <address>{props.meetup.address}</address>
            <p>{props.meetup.description}</p>
        </Fragment>}
    </section>

};

export default MeetupDetail;