import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.4)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { post } = props;

    return (

        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(https://www.jasonmerlo.com/images/xl/2011070909-Live-oak-trees-on-the-South-Mall.jpg)` }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src='https://liberalarts.utexas.edu/_internal/images/banners/depts-banners/government1.jpg' alt="UT Six pack" />}
            <div className={classes.overlay} />
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Diversity & Inclusion Workshop for Social Science Methods
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut dolor sit amet nunc tincidunt consequat in eget sapien.
                        </Typography>
                        <Button color="primary">
                            Apply
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}
