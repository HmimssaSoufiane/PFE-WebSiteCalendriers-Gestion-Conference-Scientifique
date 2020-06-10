import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Form from 'react-bootstrap/Form'
import { withStyles } from '@material-ui/core/styles';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Toolbar from '@material-ui/core/Toolbar';




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
    const [name, setName] = useState("");
    const [shortName, setShortName] = useState("");
    const [contry, setContry] = useState("");
    const [city, setCity] = useState('');
    const [adress, setAdress] = useState("");
    const [about, setAbout] = useState("");
    const [theme, setTheme] = useState("");
    const [dateStart, setStar] = useState("");
    const [dateEnd, setEnd] = useState("");



    const handleChange = (event) => {
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    useEffect(() => {
        // Update the document title using the browser API

    });

    return (
        <Paper className={classes.paper}>
            <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <h2 style={{ padding: "10px 0  5px 0", color: "white" }}>Create Conference</h2>
                </Toolbar>
            </AppBar>

            <div className={classes.contentWrapper}>

                <Form style={{ textAlign: "left" }}>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Coference name</Form.Label>
                            <Form.Control type="text" placeholder="Coference name" />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Conference abbreviation </Form.Label>
                            <Form.Control type="text" placeholder="Conference abbreviation" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Conference Disciplines</Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Date start</Form.Label>
                            <Form.Control
                                type="date"
                                style={{ width: '100%' }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Date End</Form.Label>
                            <Form.Control
                                type="date"
                                style={{ width: '100%' }}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>County</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>County</option>
                                <option></option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>



                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>

            </div>
        </Paper>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);