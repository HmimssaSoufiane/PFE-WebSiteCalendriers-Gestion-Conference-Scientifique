import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListGroup from 'react-bootstrap/ListGroup';
import PeopleIcon from '@material-ui/icons/People';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PieChartIcon from '@material-ui/icons/PieChart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ContentAnalytics from './ContentAnalytics';
import ContentCreateConference from './ContentCreateConference';
import ContentPlanning from './ContentPlanning';
import ContentMyConferences from './ContectMyConferences';
import Header from './Header';
//import { Redirect } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import ConferenceArticles from './ConferenceArticles';





function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/HmimssaSoufiane">
                By Hmimssa
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    shape: {
        borderRadius: 8,
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        toolbar: {
            minHeight: 48,
        },
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
};

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        flex: 1,
        padding: theme.spacing(6, 4),
        background: '#eaeff1',
    },
    footer: {
        padding: theme.spacing(2),
        background: '#eaeff1',
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },

};

function Paperbase(props) {
    const { classes } = props;
    const [whichContent, setWhichContent] = useState("link1");


    const handleChangeContent = (e) => {

        if (e.target.name === "link1") { setWhichContent("link1"); }
        else if (e.target.name === "link2") { setWhichContent("link2"); }
        else if (e.target.name === "link3") { setWhichContent("link3"); }
        else if (e.target.name === "link4") { setWhichContent("link4"); }
        else if (e.target.name === "link5") { setWhichContent("link5"); }
    }






    return (
        <ThemeProvider theme={theme}>
            {/*(Object.keys(client).length === 0) ? <Redirect to="/SignIn" /> : null*/}
            <div className={classes.root}>
                <CssBaseline />
                <nav className={classes.drawer} style={{ backgroundColor: "lightblue", textAlign: "left", padding: "5px" }}>

                    <ListItem style={{ borderRadius: "5px" }} className={clsx(classes.item, classes.itemCategory)}  >

                        <ListItemText classes={{ primary: classes.itemPrimary, }} >
                            Chair Dashboards
                        </ListItemText>
                    </ListItem>
                    <ListGroup defaultActiveKey="#link1" style={{ marginTop: "30px" }}  >
                        <ListGroup.Item action name="link1" onClick={handleChangeContent} >
                            <PeopleIcon /> My conferences
                        </ListGroup.Item>
                        <ListGroup.Item action name="link2" onClick={handleChangeContent}  >
                            <AddCircleOutlineIcon /> Create conference
                        </ListGroup.Item>
                        <ListGroup.Item action name="link3" onClick={handleChangeContent} >
                            <CalendarTodayIcon /> Planning
                        </ListGroup.Item>
                        <ListGroup.Item action name="link4" onClick={handleChangeContent} >
                            <DescriptionIcon /> Conference articles
                        </ListGroup.Item>
                        <ListGroup.Item action name="link5" onClick={handleChangeContent} >
                            <PieChartIcon /> Analytics
                        </ListGroup.Item>
                    </ListGroup>
                </nav>
                <div className={classes.app}>
                    <Header />
                    <main className={classes.main}>
                        {
                            (whichContent === "link1") ? <ContentMyConferences /> :
                                (whichContent === "link2") ? <ContentCreateConference /> :
                                    (whichContent === "link3") ? <ContentPlanning /> :
                                        (whichContent === "link4") ? <ConferenceArticles /> : <ContentAnalytics />}
                    </main>
                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
                </div>
            </div>

        </ThemeProvider >
    );
}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);