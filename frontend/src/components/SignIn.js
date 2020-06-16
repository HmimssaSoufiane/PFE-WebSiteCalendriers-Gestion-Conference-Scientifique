import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import NavBar from './NavBar';



import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'



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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



export default function SignIn() {
    const classes = useStyles();
    const [client, setClient] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [compteType, setCompteType] = useState(10);

    const handleChange = (event) => {
        setCompteType(event.target.value);
    };


    const handleSubmit = (evt) => {
        evt.preventDefault();

        var raw = JSON.stringify({ "email": email, "password": password });

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        var myAPI;
        if (compteType === 10) myAPI = "http://localhost:8080/api/login/chairsLogin";
        else if (compteType === 30) myAPI = "http://localhost:8080/api/login/authorsLogin";

        console.log(myAPI);
        console.log(compteType);

        fetch(myAPI, requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result !== "") {
                    //console.log(JSON.parse(result));
                    localStorage.setItem('client', result);
                    setClient(JSON.parse(localStorage.getItem('client')));
                    //console.log('cliant', JSON.parse(localStorage.getItem('client')));
                    //console.log('cliant state', client);

                }
                else setShow(true);
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <NavBar />
            <Container component="main" maxWidth="xs">

                {(Object.keys(client).length !== 0) ? (compteType === 10) ? <Redirect to={`/DashboardsChair/${client.idPerson}`} /> : (compteType === 30) ? <Redirect to="/DashboardsAuthor" /> : null : null}
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
                            <p>Your password or the email not correct!</p>
                        </Alert>
                        <FormControl variant="outlined" required fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Account type</InputLabel>

                            <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" value={compteType} onChange={handleChange} label="Account type" >
                                <MenuItem value={10}>Chair</MenuItem>
                                <MenuItem value={20}>Scientist</MenuItem>
                                <MenuItem value={30}>Author</MenuItem>
                                <MenuItem value={40}>Listener</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus
                            onChange={e => {
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"
                            onChange={e => {
                                setPassword(e.target.value);
                            }}
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                            Sign In
                    </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                            </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}