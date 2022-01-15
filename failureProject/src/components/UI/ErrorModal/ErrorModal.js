import ReactDom from 'react-dom';

import classes from './ErrorModal.module.css';

import Card from '../Card/Card';
import Button from '../Button/Button';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onResetError}></div>
}

const ModalOverlay = (props) => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={classes.content}>
            <p>
                {props.message}
            </p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onResetError}>
                OK
            </Button>
        </footer>
    </Card>
}

const ErrorModal = (props) => {

    return <>
        {ReactDom.createPortal(<Backdrop onResetError={props.onResetError}></Backdrop>, document.getElementById('backdrop-root'))}
        {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onResetError={props.onResetError}></ModalOverlay>, document.getElementById('overlay-root'))}
    </>

}

export default ErrorModal;