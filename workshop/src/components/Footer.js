import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';





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
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
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
}));

function Copyright() {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            The University of Texas at Austin{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: 'About',
        description:
            [
                {
                    text: 'Mission',
                    link: 'https://emergency.utexas.edu/'
                },
                {
                    text: 'Events',
                    link: 'https://emergency.utexas.edu/'
                },
                {
                    text: 'Faculty',
                    link: 'https://www.utexas.edu/site-policies',
                },
            ]
    },
    {
        title: 'Apply',
        description:
            [
                {
                    text: 'Eligibility',
                    link: 'https://emergency.utexas.edu/'
                },
                {
                    text: 'FAQ',
                    link: 'https://www.utexas.edu/site-policies',
                },
            ]
    },
    {
        title: 'Resources',
        description:
            [
                {
                    text: 'Department of Government',
                    link: 'https://liberalarts.utexas.edu/government/'
                },
                {
                    text: 'FAQ',
                    link: 'https://www.utexas.edu/site-policies',
                },
            ]
    },
    {
        title: 'University of Texas',
        description:
            [
                {
                    text: 'Emergency Information',
                    link: 'https://emergency.utexas.edu/'
                },
                {
                    text: 'Site Policies',
                    link: 'https://www.utexas.edu/site-policies',
                },
                {
                    text: 'Web Accessibility Policy',
                    link: 'http://www.utexas.edu/web-accessibility-policy',
                },
                {
                    text: 'Web Privacy Policy',
                    link: 'http://www.utexas.edu/web-privacy-policy',
                },
            ]
    },
];

export default function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md" component="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) => (
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item} >
                                        <Link href={item.link} variant="subtitle1" color="textSecondary">
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container >
        </React.Fragment>
    );
}
