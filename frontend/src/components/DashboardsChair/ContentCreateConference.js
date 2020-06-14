import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Form from 'react-bootstrap/Form'
import { withStyles } from '@material-ui/core/styles';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Toolbar from '@material-ui/core/Toolbar';
import Alert from 'react-bootstrap/Alert'




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
    const [name, setName] = useState("");
    const [shortName, setShortName] = useState("");
    const [contry, setContry] = useState("");
    const [city, setCity] = useState('');
    const [adress, setAdress] = useState("");
    const [about, setAbout] = useState("");
    const [discipline, setDiscipline] = useState("");
    const [dateStart, setDateStar] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    const [show, setShow] = useState(false);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "shortName": shortName,
            "contry": contry,
            "city": city,
            "adress": adress,
            "about": about,
            "discipline": discipline,
            "dateStar": dateStart,
            "dateEnd": dateEnd,
            "articles": null,
            "plannings": null,
            "chairsRoles": null,
            "sponsors": null
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/chair/chairs/1/conference", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }



    return (
        <Paper className={classes.paper}>
            <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <h2 style={{ padding: "10px 0  5px 0", color: "white" }}>Create Conference</h2>
                </Toolbar>
            </AppBar>

            <div className={classes.contentWrapper}>

                <Form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Coference name</Form.Label>
                            <Form.Control type="text" placeholder="Coference name" onChange={e => {
                                setName(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Conference abbreviation </Form.Label>
                            <Form.Control type="text" placeholder="Conference abbreviation" onChange={e => {
                                setShortName(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Conference Disciplines</Form.Label>
                            <Form.Control as="select" on value={discipline} onChange={e => {
                                setDiscipline(e.target.value);
                            }} >
                                <option >addictions nursing</option>
                                <option>applied physics</option>
                                <option>applied mathematics</option>
                                <option>computational mechanics</option>
                                <option>computer architecture</option>
                                <option>computer networks</option>
                                <option>computer vision</option>
                                <option>computer science</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Date start</Form.Label>
                            <Form.Control
                                type="date"
                                style={{ width: '100%' }}
                                onChange={e => {
                                    setDateStar(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Date End</Form.Label>
                            <Form.Control
                                type="date"
                                onChange={e => {
                                    setDateEnd(e.target.value);
                                }}
                                style={{ width: '100%' }}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>County</Form.Label>
                            <Form.Control onChange={e => {
                                setContry(e.target.value);
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control onChange={e => {
                                setCity(e.target.value);
                            }} />
                        </Form.Group>

                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" onChange={e => {
                            setAdress(e.target.value);
                        }} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>About</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={e => {
                            setAbout(e.target.value);
                        }} />
                    </Form.Group>



                    {!show && <Button variant="primary" type="submit" onClick={() => setShow(true)}>Create</Button>}


                    <>
                        <Alert show={show} variant="success">
                            <Alert.Heading> Your conferences  has been created successfully !</Alert.Heading>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button type="reset" onClick={() => setShow(false)} variant="outline-success">
                                    Close
                                </Button>
                            </div>
                        </Alert>
                    </>
                </Form>

            </div>
        </Paper>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);