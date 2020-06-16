import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button'

import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useParams } from 'react-router-dom';
import Moment from 'react-moment';



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
    const [client, setClient] = useState({});
    const { name } = useParams();
    const [filterByName, setFilterByName] = useState([]);

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('http://localhost:8080/api/chair/chairs/' + name, requestOptions)
            .then(response => response.text())
            .then(result => setClient(JSON.parse(result)))
            .catch(error => console.log('error', error));


    }, [name]);

    return (
        <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
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
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.addUser}>
                                Create Conference
                            </Button>
                            <Tooltip title="Reload">
                                <IconButton>
                                    <RefreshIcon className={classes.block} color="inherit" />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ textAlign: "left", background: "#009be5" }}>
                                <TableCell>Name</TableCell>
                                <TableCell >Short Name</TableCell>
                                <TableCell align="right">Date star</TableCell>
                                <TableCell align="right">Date end </TableCell>
                                <TableCell >Action </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {client.createdConferences?.filter(row => row.name.toLowerCase().search(filterByName) !== -1).map(row => (
                                <TableRow style={{ textAlign: "left", background: "lightblue" }} key={row.idConference}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell >{row.shortName}</TableCell>
                                    <TableCell align="right">
                                        <Moment format="YYYY/MM/DD">
                                            {row.dateStar}
                                        </Moment>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Moment format="YYYY/MM/DD">
                                            {row.dateEnd}
                                        </Moment>
                                    </TableCell>
                                    <TableCell >
                                        <Button variant="outline-primary">Delete</Button>{' '}
                                        <Button variant="outline-secondary">Edit</Button>{' '}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Paper>
    );
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);