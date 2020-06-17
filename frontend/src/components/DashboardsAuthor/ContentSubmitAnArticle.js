import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Form from 'react-bootstrap/Form';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Col } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'




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
    const conferenceSelected = useRef(2);
    const { name } = useParams();
    const [title, setTitle] = useState("");
    const [abstract, setAbstract] = useState("");
    const [show, setShow] = useState(false);



    const handleChange = (event) => {
        conferenceSelected.current = parseInt(event.target.value);
        setConference(conferences.filter(x => x.idConference === conferenceSelected.current));
        console.log(conference);

    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        var myHeaders = new Headers();


        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": title,
            "abstract_": abstract,

        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/author/authors/" + name + "/" + conferenceSelected.current + "/article", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setShow(true);

    }

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('http://localhost:8080/api/conference/conferences', requestOptions)
            .then(response => response.text())
            .then(result => setConferences(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Paper className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <h2 style={{ padding: "10px 0  5px 0" }}>Conference</h2>
                    </Toolbar>
                </AppBar>
                <Form style={{ textAlign: "left", padding: "20px" }}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Label >Last Conferences Conference </Form.Label>
                            <Form.Control as="select" value={conferenceSelected.current} onChange={handleChange} >
                                {conferences.map(row => (<option value={row.idConference}>{row.name}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row >
                </Form>
            </Paper>

            <Paper tyle={{ background: "#009be5", margin: "10px" }} className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <h2 style={{ padding: "10px 0  5px 0" }}> Submit an article </h2>

                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper} style={{ textAlign: "left", padding: "40px" }} >
                    <Typography variant="h5" component="h1" gutterBottom>
                        {conference[0]?.name}
                    </Typography>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>Article title</Form.Label>
                            <Form.Control type="Article title" placeholder="Article title" onChange={e => {
                                setTitle(e.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Abstract</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={e => {
                                setAbstract(e.target.value);
                            }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="File input(PDF)" />
                        </Form.Group>
                        <Button variant="primary" type="submit"  >Create</Button>


                        <Alert show={show} variant="success">
                            <Alert.Heading> Your conferences  has been created successfully !</Alert.Heading>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button type="reset" onClick={() => setShow(false)} variant="outline-success">
                                    Close
                            </Button>
                            </div>
                        </Alert>
                    </Form>

                </div>
            </Paper>

        </>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);