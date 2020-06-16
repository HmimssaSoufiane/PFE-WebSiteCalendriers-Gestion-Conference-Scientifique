import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import Form from 'react-bootstrap/Form'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';



import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

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
    const conferenceSelected = useRef(0);
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");


    const handleChange = (event) => {
        conferenceSelected.current = parseInt(event.target.value);
        setConference(conferences.filter(x => x.idConference === conferenceSelected.current));
        console.log(conferenceSelected.current);
        console.log(conference);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "title": title,
            "date": date,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/conference/conferences/" + conferenceSelected.current + "/planning", requestOptions)
            .then(response => response.text())
            .then(result => setConference([result]))
            .catch(error => console.log('error', error));
        // setShow(true);
    }


    useEffect(() => {
        // Update the document title using the browser API
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
            <Paper style={{ marginRight: "10px", display: "inline-block", verticalAlign: "top", minWidth: "20%" }} className={classes.paper}>
                <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <h2 style={{ padding: "10px 0  5px 0", color: "white" }}>Conference</h2>
                    </Toolbar>
                </AppBar>
                <Form onSubmit={handleSubmit} style={{ textAlign: "left", padding: "20px" }}>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Label >Select Conference </Form.Label>
                            <Form.Control as="select" value={conferenceSelected.current} onChange={handleChange} >
                                {conferences.map(row => (<option value={row.idConference}>{row.name}</option>))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row >

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type="text" placeholder="Event name" onChange={e => {
                                setTitle(e.target.value);
                            }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Event Date </Form.Label>
                            <Form.Control
                                type="date"
                                style={{ width: '100%' }}
                                onChange={e => {
                                    setDate(e.target.value);
                                }}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Create event
                    </Button>
                </Form>
            </Paper>
            <Paper className={classes.paper} style={{ marginBottom: "10px", display: "inline-block", verticalAlign: "top", maxHeight: "50%", minWidth: "60%" }}>
                <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <h2 style={{ padding: "10px 0  5px 0", color: "white" }}> Conference its events </h2>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

                        weekends={true}
                        events={conference[0]?.plannings}
                    />
                </div>
            </Paper>

        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);