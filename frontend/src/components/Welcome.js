import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from 'react-bootstrap/Nav'
import logo from '../asset/logo.png'; // with import
import home_banner from '../asset/Home_banner.jpg'; // with import
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Image from 'react-bootstrap/Image';
import { Col } from 'react-bootstrap';
import NavBar from './NavBar';
import { Link } from "react-router-dom";
import Moment from 'react-moment';

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
    const [conferences, setConferences] = useState([]);
    const [filterByName, setFilterByName] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/conference/conferences", requestOptions)
            .then(response => response.text())
            .then(result => setConferences(JSON.parse(result)))
            .catch(error => console.log('error', error));

    }, []);

    return (
        <React.Fragment>
            <NavBar />

            <main>
                {/* Hero unit */}
                <div style={{
                    height: "400px",
                    backgroundImage: "url(" + home_banner + ")", backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                }} className={classes.heroContent}>
                    <Container maxWidth="sm" style={{ paddingTop: "50px" }}>

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>

                        </Typography>
                        <Toolbar style={{ borderRadius: "11px 10px 10px 10px", border: "1px solid #e9eaee", background: "white", opacity: "06" }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <SearchIcon className={classes.block} color="inherit" />
                                </Grid>
                                <Grid item xs>
                                    <TextField
                                        fullWidth
                                        placeholder="Search by conference name "
                                        InputProps={{
                                            disableUnderline: true,
                                            className: classes.searchInput,
                                        }}
                                        onChange={e => {
                                            setFilterByName(e.target.value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Container>
                </div>
                <Container className={classes.cardGrid}>
                    {/* End hero unit */}
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table" style={{ padding: "20px", borderCollapse: "separate", borderSpacing: "0 15px" }}>

                            <TableBody>
                                {conferences.filter(row => row.name.toLowerCase().search(filterByName) !== -1).map(row => (
                                    <TableRow style={{ textAlign: "left", background: "#f3f4f6" }} key={row.idConference}>
                                        <TableCell style={{ borderRadius: "10px 0 0 10px", fontWeight: "bold" }}>
                                            <Col xs={6} md={4}>
                                                <Image src={logo} roundedCircle width="80px" />
                                            </Col>
                                        </TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{row.name}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{row.shortName}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{row.contry}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }} align="right">
                                            <Moment format="YYYY/MM/DD">
                                                {row.dateStar}
                                            </Moment>
                                        </TableCell>
                                        <TableCell style={{ fontWeight: "bold" }} align="right">
                                            <Moment format="YYYY/MM/DD">
                                                {row.dateEnd}
                                            </Moment>
                                        </TableCell>
                                        <TableCell style={{ background: "red", borderRadius: "0 10px 10px 0" }} >
                                            <Link
                                                to={`/ConferanceDetails/${row.idConference}`}
                                            > View </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
        </React.Fragment >
    );
}