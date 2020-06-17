import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';


const styles = (theme) => ({
    paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
});

function Content(props) {
    const { classes } = props;
    const [conferences, setConferences] = useState([]);
    const [conference, setConference] = useState([]);
    const { name } = useParams();
    const conferenceSelected = useRef(2);

    const handleChange = (event) => {
        conferenceSelected.current = parseInt(event.target.value);
        setConference(conferences.filter(x => x.idConference === conferenceSelected.current));
        console.log(conference);

    };

    //const [client, setClient] = useState({});

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/chair/chairs/" + name, requestOptions)
            .then(response => response.text())
            .then(result => setConferences((JSON.parse(result)).createdConferences))
            .catch(error => console.log('error', error))
    }, [name]);


    return (
        <div >
            <Paper className={classes.paper}>
                <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <h2 style={{ padding: "10px 0  5px 0", color: "white" }}>Conference</h2>
                    </Toolbar>
                </AppBar>
                <Form style={{ textAlign: "left", padding: "20px" }}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Label >Select Conference </Form.Label>
                            <Form.Control as="select" value={conferenceSelected.current} onChange={handleChange} >
                                {conferences.map(row => (<option value={row.idConference}>{row.name}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row >
                </Form>
            </Paper>
            <Paper >

                <div className={classes.contentWrapper} style={{ padding: "10px" }}>
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow style={{ textAlign: "left", background: "#eaeff1" }}>
                                    <TableCell>Artice title</TableCell>
                                    <TableCell >Note</TableCell>
                                    <TableCell >Status </TableCell>
                                    <TableCell >Author </TableCell>
                                    <TableCell >View Article </TableCell>
                                    <TableCell >Send to Scientist </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {conference[0]?.articles?.map(row => (
                                    <TableRow style={{ textAlign: "left", background: "white" }} key={row.idArticle}>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell >{row.noteAverage}</TableCell>
                                        <TableCell >{row.status}</TableCell>
                                        <TableCell >{row.author.firstName}</TableCell>
                                        <TableCell >
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<VisibilityIcon />}
                                            >
                                                View submitted article
                                        </Button>
                                        </TableCell>
                                        <TableCell >
                                            <InputGroup className="mb-2">
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text>@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl id="inlineFormInputGroup" placeholder="Sent to scientist" />
                                            </InputGroup>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>

        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);