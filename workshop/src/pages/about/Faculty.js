import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '140%',
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const profs = [
    {
        name: "George Washington",
        title: "Associate Professor",
        education: "Ph.D., Emory University",
        interests: "International organizations, international conflict, international law, international political economy, formal modeling",
        img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="

    },
    {
        name: "George Washington",
        title: "Associate Professor",
        education: "Ph.D., Emory University",
        interests: "International organizations, international conflict, international law, international political economy, formal modeling",
        img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="

    },
    {
        name: "George Washington",
        title: "Associate Professor",
        education: "Ph.D., Emory University",
        interests: "International organizations, international conflict, international law, international political economy, formal modeling",
        img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="

    },
    {
        name: "George Washington",
        title: "Associate Professor",
        education: "Ph.D., Emory University",
        interests: "International organizations, international conflict, international law, international political economy, formal modeling",
        img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="

    },
    {
        name: "George Washington",
        title: "Associate Professor",
        education: "Ph.D., Emory University",
        interests: "International organizations, international conflict, international law, international political economy, formal modeling",
        img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="

    },
    {
        name: "George Washington",
        title: "Associate Professor",
        education: "Ph.D., Emory University",
        interests: "International organizations, international conflict, international law, international political economy, formal modeling",
        img: "https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM="

    },

];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <main>

                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {profs.map((prof) => (
                            <Grid item key={prof} xs={3} >
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={prof.img}
                                        title={prof.name}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h6">
                                            {prof.name}
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {prof.title}
                                        </Typography>
                                        <Typography variant="subtitle2" gutterBottom>
                                            {prof.education}
                                        </Typography>
                                        <Typography variant="caption">
                                            {prof.interests}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment >
    );
}