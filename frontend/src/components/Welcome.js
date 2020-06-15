import React from 'react';
import Button from '@material-ui/core/Button';
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

const conferences = [
    { name: "Computers and Computation Conference", shortName: "COMPUTE", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
    { name: "Advances in Animal Anatomy and Wild Animals Conference", shortName: "ICAAAWA", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
    { name: "Advances in Aquafarming Conference", shortName: "ICAA", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
    { name: "Autograft, Allograft, Isograft and Xenograft in Surgery Conference", shortName: "ICAAIXS", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
    { name: " Autonomous Agents and Multi-Agent Systems Conference", shortName: "ICAAMAS", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" }
];

export default function Album() {
    const classes = useStyles();

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
                                {conferences.map(row => (
                                    <TableRow style={{ textAlign: "left", background: "#f3f4f6" }} key={row.idConference}>
                                        <TableCell style={{ borderRadius: "10px 0 0 10px", fontWeight: "bold" }}>
                                            <Col xs={6} md={4}>
                                                <Image src={logo} roundedCircle width="80px" />
                                            </Col>
                                        </TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{row.name}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{row.shortName}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>{row.location}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }} align="right">{row.dateStar}</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }} align="right">{row.dateEnd}</TableCell>
                                        <TableCell style={{ borderRadius: "0 10px 10px 0" }} >
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                            >
                                                View
                                        </Button>
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