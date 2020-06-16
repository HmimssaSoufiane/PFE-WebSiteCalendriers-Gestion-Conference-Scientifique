import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from 'react-bootstrap/Nav'
import home_banner from '../asset/Home_banner.jpg'; // with import
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';
import Moment from 'react-moment';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import NavBar from './NavBar';









function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Nav.Link color="inherit" href="https://github.com/HmimssaSoufiane">
                By Hmimssa
            </Nav.Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Album() {
    const classes = useStyles();
    const [key, setKey] = useState('home');
    const [conference, setConference] = useState({});
    const { name } = useParams();


    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('http://localhost:8080/api/conference/conferences/' + name, requestOptions)
            .then(response => response.text())
            .then(result => setConference(JSON.parse(result)))
            .catch(error => console.log('error', error));


    }, [name]);



    return (
        <div style={{ background: "white" }}>
            <NavBar />

            <main>
                {/* Hero unit */}
                <div style={{
                    backgroundImage: "url(" + home_banner + ")", backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }} className={classes.heroContent}>
                    <Paper style={{ marginTop: "100px", verticalAlign: "top", display: 'inline-block', width: "70%" }} className={classes.paper}>
                        <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                            <Toolbar>
                                <h2 style={{ padding: "10px 0  5px 0", color: "white" }}> Conference Details </h2>
                            </Toolbar>
                        </AppBar>
                        <div style={{ textAlign: "right", padding: "10px" }}>
                            <Button variant="success">Submit Your Paper</Button>{' '}
                            <Button variant="danger">Author Registration</Button>{' '}
                            <Button variant="warning">Listener Registration</Button>{' '}
                        </div>
                        <div className={classes.contentWrapper}>
                            <Tabs
                                id="controlled-tab-example"
                                style={{ margin: "10px" }}
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                            >
                                <Tab eventKey="home" style={{ textAlign: "left", padding: "40px" }} title="About">
                                    <CssBaseline />
                                    <Container component="main" className={classes.main} >
                                        <Typography variant="h2" component="h1" gutterBottom>
                                            {conference.name}
                                        </Typography>
                                        <h4 style={{ color: "blue" }}>{"Dates"}</h4>
                                        <Typography variant="h6" component="h2" gutterBottom>
                                            <Moment format="YYYY/MM/DD">
                                                {conference.dateStar}
                                            </Moment> {" to "}
                                            <Moment format="YYYY/MM/DD">
                                                {conference.dateEnd}
                                            </Moment>
                                        </Typography>
                                        <h4 style={{ color: "blue" }}>{"About the conference"}</h4>
                                        <Typography variant="h6" component="h2" gutterBottom>
                                            {conference.about}
                                        </Typography>
                                    </Container>
                                </Tab>
                                <Tab eventKey="Planning" style={{ padding: "40px" }} title="Planning" >
                                    <FullCalendar
                                        defaultView="dayGridMonth"
                                        header={{
                                            left: 'prev,next today',
                                            center: 'title',
                                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                                        }}
                                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

                                        weekends={true}
                                        events={conference.plannings}
                                    />
                                </Tab>
                                <Tab style={{ textAlign: "left", padding: "40px" }} eventKey="Chairs" title="Chairs">
                                    <Container component="main" className={classes.main} >
                                        <h4 style={{ color: "blue", textDecoration: "underline" }}>{"Conference creator chair"}</h4>
                                        <h5>{conference.creator?.firstName}{" "}{conference.creator?.lastName}</h5>
                                        <h4 style={{ color: "blue", textDecoration: "underline" }}>{"Conference planning chairs"}</h4>

                                        <h4 style={{ color: "blue", textDecoration: "underline" }}>{"Conference scientist chairs"}</h4>

                                    </Container>
                                </Tab>
                            </Tabs>
                        </div>
                    </Paper>
                </div>
                <Container className={classes.cardGrid}>
                    {/* End hero unit */}

                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>

                <Copyright />
            </footer>
            {/* End footer */}
        </div >
    );
}