import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const useStyles = makeStyles((theme) => ({

    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [client, setClient] = useState({});
    const [firstName, setFirstName] = useState("");
    const [organizationName, setOrganizationName] = useState("");
    const [lastName, setLastName] = useState("");
    const [compteType, setCompteType] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleChange = (event) => {
        setCompteType(event.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        //var raw = JSON.stringify({ "email": email, "password": password });

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        setClient({
            "title": "Mr",
            "firstName": firstName,
            "lastName": lastName,
            "organizationName": organizationName,
            "country": "Morocco",
            "region": "Safi",
            "phone": "0614758412",
            "email": email,
            "password": password
        })
        var raw = JSON.stringify(client);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/chair/chairs", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log("hello");


    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus
                                onChange={e => {
                                    setFirstName(e.target.value);
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname"
                                onChange={e => {
                                    setLastName(e.target.value);
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField id="outlined-basic" label="Organisation Name" variant="outlined" required fullWidth
                                onChange={e => {
                                    setOrganizationName(e.target.value);
                                }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" required fullWidth>
                                <InputLabel id="demo-simple-select-outlined-label">Account type</InputLabel>
                                <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={compteType} onChange={handleChange} label="Account type" >
                                    <MenuItem value={10}>Chair</MenuItem>
                                    <MenuItem value={20}>Scientist</MenuItem>
                                    <MenuItem value={30}>Listener</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email"
                                onChange={e => {
                                    setEmail(e.target.value);
                                }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
                                onChange={e => {
                                    setPassword(e.target.value);
                                }} />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}