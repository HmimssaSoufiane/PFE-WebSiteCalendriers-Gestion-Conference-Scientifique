import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Nav from 'react-bootstrap/Nav'
import home_banner from '../asset/Home_banner.jpg'; // with import
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Form from 'react-bootstrap/Form';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import NavBar from './NavBar';




const lightColor = 'rgba(255, 255, 255, 0.7)';


const styles = (theme) => ({
    secondaryBar: {
        zIndex: 0,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

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


function Album(props) {
    const classes = useStyles();
    const conferences =
        { name: "Computers and Computation Conference", about: "The International Research Conference is a federated organization dedicated to bringing together a significant number of diverse scholarly events for presentation within the conference program. Events will run over a span of time during the conference depending on the number and length of the presentations. With its high quality, it provides an exceptional value for students, academics and industry researchers.", shortName: "COMPUTE", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" };


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
                                <h2 style={{ padding: "10px 0  5px 0", color: "white" }}> Submit an article </h2>

                            </Toolbar>
                        </AppBar>
                        <div className={classes.contentWrapper} style={{ textAlign: "left", padding: "40px" }} >
                            <Typography variant="h5" component="h1" gutterBottom>
                                {conferences.name}
                            </Typography>

                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Abstract</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="File input(PDF)" />
                                </Form.Group>
                            </Form>

                        </div>
                    </Paper>
                </div>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>

                <Copyright />
            </footer>
            {/* End footer */}
        </div >
    );
}
Album.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);