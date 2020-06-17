import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
    const { name } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch('http://localhost:8080/api/author/authors/' + name, requestOptions)
            .then(response => response.text())
            .then(result => setArticles((JSON.parse(result)).articles))
            .catch(error => console.log('error', error));
        console.log(articles);


    }, [name, articles]);

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
                                <TableCell style={{ fontWeight: "bold" }}>Article title</TableCell>
                                <TableCell style={{ fontWeight: "bold" }} >Conference Name</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Articile status</TableCell>
                                <TableCell style={{ fontWeight: "bold" }}>Action </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {articles?.map(row => (
                                <TableRow style={{ textAlign: "left", background: " #f5f5dc" }} key={row.idArticle}>
                                    <TableCell>{row.title}</TableCell>
                                    <TableCell >{row.conference.shortName}</TableCell>
                                    <TableCell >{row.status}</TableCell>
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