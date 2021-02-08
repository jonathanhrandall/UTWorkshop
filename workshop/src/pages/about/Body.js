import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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

}));

export default function About() {
    const classes = useStyles();
    return (
        <Container size="lg" style={{ "padding-top": 50 }}>
            <Typography component="h4" variant="h2" gutterBottom>
                Lorem ipsum.
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Ut eu mollis tellus, et pharetra nunc. Pellentesque nec semper odio. Sed scelerisque massa congue tincidunt lacinia. Nunc vestibulum consectetur nibh, scelerisque congue urna scelerisque quis. Quisque maximus nulla non volutpat aliquam. Curabitur et tempor ex, at finibus lacus. Cras convallis tortor nec consectetur varius. Etiam nec nulla diam. Donec et aliquam nunc. Suspendisse ut arcu finibus, ornare enim et, semper turpis. Aliquam ut nunc in felis hendrerit tincidunt eu ac risus. Nam quis nulla lectus. Nulla facilisi. Nunc auctor placerat nibh, ut suscipit quam accumsan ac. Etiam eros massa, eleifend vitae convallis in, vehicula a metus. Quisque dignissim dolor sed luctus laoreet.
            </Typography>
            <Typography component="h4" variant="h2" gutterBottom>
                Quisque vehicula.
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Ut eu mollis tellus, et pharetra nunc. Pellentesque nec semper odio. Sed scelerisque massa congue tincidunt lacinia. Nunc vestibulum consectetur nibh, scelerisque congue urna scelerisque quis. Quisque maximus nulla non volutpat aliquam. Curabitur et tempor ex, at finibus lacus. Cras convallis tortor nec consectetur varius. Etiam nec nulla diam. Donec et aliquam nunc. Suspendisse ut arcu finibus, ornare enim et, semper turpis. Aliquam ut nunc in felis hendrerit tincidunt eu ac risus. Nam quis nulla lectus. Nulla facilisi. Nunc auctor placerat nibh, ut suscipit quam accumsan ac. Etiam eros massa, eleifend vitae convallis in, vehicula a metus. Quisque dignissim dolor sed luctus laoreet.
            </Typography>
            <Typography component="h4" variant="h2" gutterBottom>
                Curabitur nec tempus lectus.
            </Typography>
            <Typography variant="subtitle1" paragraph>
                Nulla aliquam felis arcu, sit amet faucibus mauris malesuada tincidunt. Aliquam congue mollis augue eu consequat. Nullam rhoncus lorem et diam laoreet laoreet. Phasellus et arcu mauris. Integer varius odio vel nisi mattis mollis. Cras malesuada elit in ligula hendrerit, nec consectetur odio iaculis. Suspendisse potenti. Integer consectetur tellus est, ut fringilla lacus tempus in. Ut semper tincidunt urna sit amet mattis. Ut rutrum imperdiet libero, vitae porta leo molestie ac. Nam ullamcorper dolor ut leo fermentum fringilla. Praesent non sapien ultricies, dignissim ante ullamcorper, vestibulum ligula. Phasellus sollicitudin elit et risus ultricies fermentum. Vestibulum facilisis porttitor interdum.
            </Typography>
        </Container>


    );
}
