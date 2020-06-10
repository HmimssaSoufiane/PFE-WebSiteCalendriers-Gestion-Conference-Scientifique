import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../asset/logo.png'; // with import
import home_banner from '../asset/Home_banner.jpg'; // with import
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import CssBaseline from '@material-ui/core/CssBaseline';







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

const conferences =
    { name: "Computers and Computation Conference", about: "The International Research Conference is a federated organization dedicated to bringing together a significant number of diverse scholarly events for presentation within the conference program. Events will run over a span of time during the conference depending on the number and length of the presentations. With its high quality, it provides an exceptional value for students, academics and industry researchers.", shortName: "COMPUTE", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" };

export default function Album() {
    const classes = useStyles();
    const [key, setKey] = useState('home');


    return (
        <div style={{ background: "white" }}>
            <Navbar >
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">EsteConference</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                    <Nav.Link href="#pricing">About us</Nav.Link>
                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">LogIn</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">SingUp</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>
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
                            <Button variant="success"> Submit Your Paper</Button>{' '}
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
                                <Tab eventKey="home" title="About">
                                    <CssBaseline />
                                    <Container style={{ textAlign: "left", padding: "40px" }} component="main" className={classes.main} >
                                        <Typography variant="h2" component="h1" gutterBottom>
                                            {conferences.name}
                                        </Typography>
                                        <h4 style={{ color: "blue" }}>{"Dates"}</h4>
                                        <Typography variant="h6" component="h2" gutterBottom>
                                            {conferences.dateStar} {" to "} {conferences.dateEnd}
                                        </Typography>
                                        <h4 style={{ color: "blue" }}>{"About the conference"}</h4>
                                        <Typography variant="h6" component="h2" gutterBottom>
                                            {conferences.about}
                                        </Typography>
                                    </Container>
                                </Tab>
                                <Tab eventKey="Planning" title="Planning">
                                    test2
                                </Tab>
                                <Tab eventKey="Chairs" title="Chairs">
                                    test
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