import React, { useState, useEffect } from 'react';
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
import Button from 'react-bootstrap/Button'


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

    const calendarContect = {
        calendarWeekends: true,
        calendarEvents: {
            calendarWeekends: true,
            calendarEvents: [{ title: 'event 1', date: '2020-06-09' },
            { title: 'event 2', date: '2020-06-11' },
            { title: 'event 3', start: new Date() }
            ]
        }
    }

    useEffect(() => {
        // Update the document title using the browser API
        console.log(new Date());

    });

    return (
        <div >
            <Paper style={{ verticalAlign: "top", display: 'inline-block', width: "70%" }} className={classes.paper}>
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

                        weekends={false}
                        events={[
                            { title: 'event 1', date: '2020-06-01' },
                            { title: 'event 1', date: '2020-06-02' },
                            { title: 'event 2', date: '2020-06-01' }
                        ]}
                    />


                </div>
            </Paper>
            <Paper style={{ verticalAlign: "top", display: 'inline-block', width: "25%", marginLeft: "50px" }} className={classes.paper}>
                <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <h2 style={{ padding: "10px 0  5px 0", color: "white" }}>Conference</h2>
                    </Toolbar>
                </AppBar>
                <Form style={{ textAlign: "left", padding: "5%" }}>
                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridState" >
                            <Form.Label >Select Conference </Form.Label>
                            <Form.Control as="select" value="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row >

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridAddress1">
                            <Form.Label>Event name</Form.Label>
                            <Form.Control placeholder="Event name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>


                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Date begin </Form.Label>
                            <Form.Control
                                type="date"
                                style={{ width: '100%' }}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="date" bsSize="large">
                            <Form.Label>Date end</Form.Label>
                            <Form.Control
                                type="date"
                                style={{ width: '100%' }}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Create
                    </Button>
                </Form>
            </Paper>
        </div>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);