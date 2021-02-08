import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apply from '../pages/Apply';
import About from '../pages/about/About';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Footer from './Footer'




const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    photo: {
        height: '100%',
        width: '200px',
        paddingTop: '15px',
    }
}));


export default function Navbar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container spacing={0}>
                        <img alt="panda" className={classes.photo} src={'https://i.imgur.com/f9oZGqP.png'} />
                    </Grid>

                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Social Science Workshop
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="about" className={classes.link}>
                            About
                        </Link>
                        <Link variant="button" color="textPrimary" href="apply" className={classes.link}>
                            Apply
                        </Link>
                        <Link variant="button" color="textPrimary" href="resources" className={classes.link}>
                            Resources
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/apply'>
                        <Apply />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </React.Fragment >
    );
}