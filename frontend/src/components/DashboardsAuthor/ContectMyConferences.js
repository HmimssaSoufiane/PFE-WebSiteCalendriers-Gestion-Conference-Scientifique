import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityIcon from '@material-ui/icons/Visibility';
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
    const [conferences, setConferences] = useState([
        { name: "Computers and Computation Conference", shortName: "COMPUTE", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
        { name: "Advances in Animal Anatomy and Wild Animals Conference", shortName: "ICAAAWA", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
        { name: "Advances in Aquafarming Conference", shortName: "ICAA", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
        { name: "Autograft, Allograft, Isograft and Xenograft in Surgery Conference", shortName: "ICAAIXS", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" },
        { name: " Autonomous Agents and Multi-Agent Systems Conference", shortName: "ICAAMAS", location: "Barcelona", dateStar: "2020-06-10", dateEnd: "2020-06-14" }]);

    useEffect(() => {
        // Update the document title using the browser API

    });

    return (
        <Paper className={classes.paper}>
            <AppBar style={{ background: "#009be5" }} className={classes.searchBar} position="static" color="default" elevation={0}>
                <Toolbar>
                    <h2 style={{ padding: "10px 0  5px 0", color: "white" }}>Conference</h2>
                </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
                <TableContainer component={Paper} >
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ textAlign: "left", background: "#f5f5dc", paddingBottom: "10px" }}>
                                <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                                <TableCell style={{ fontWeight: "bold" }} >Short Name</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Location</TableCell>
                                <TableCell style={{ fontWeight: "bold" }} align="right">Date star</TableCell>
                                <TableCell style={{ fontWeight: "bold" }} align="right">Date end </TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Edit </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {conferences.map(row => (
                                <TableRow style={{ textAlign: "left", background: " #f5f5dc" }} key={row.idConference}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell >{row.shortName}</TableCell>
                                    <TableCell >{row.location}</TableCell>
                                    <TableCell align="right">{row.dateStar}</TableCell>
                                    <TableCell align="right">{row.dateEnd}</TableCell>
                                    <TableCell >
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<VisibilityIcon />}
                                        >
                                            View my submitted article
                                        </Button>
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