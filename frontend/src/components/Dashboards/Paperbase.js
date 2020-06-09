import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListGroup from 'react-bootstrap/ListGroup';
import PeopleIcon from '@material-ui/icons/People';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PieChartIcon from '@material-ui/icons/PieChart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



import Content from './Content';
import Header from './Header';

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
function alertClicked() {
    alert('You clicked the third ListGroupItem');
}
function Paperbase(props) {
    const { classes } = props;


    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <nav className={classes.drawer} style={{ backgroundColor: "lightblue", textAlign: "left", padding: "5px" }}>

                    <ListItem style={{ borderRadius: "5px" }} className={clsx(classes.item, classes.itemCategory)}  >
                        <ListItemIcon className={classes.itemIcon}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.itemPrimary, }} >
                            Manage Overview
                        </ListItemText>
                    </ListItem>
                    <ListGroup defaultActiveKey="#link1" style={{ marginTop: "30px" }}  >
                        <ListGroup.Item action href="#link1"  >
                            <PeopleIcon /> My Conferences
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2"  >
                            <AddCircleOutlineIcon /> Create Conference
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" >
                            <CalendarTodayIcon /> Planning
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={alertClicked}>
                            <PieChartIcon /> Analytics
                        </ListGroup.Item>
                    </ListGroup>
                </nav>
                <div className={classes.app}>
                    <Header />
                    <main className={classes.main}>
                        <Content />
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