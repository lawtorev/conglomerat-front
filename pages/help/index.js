import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Router from "next/router";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    Container, Card, Grid,
    Typography, CardContent,
    CardActions, Button, Box
} from "@material-ui/core";
import Head from "next/head";


const useStyles = makeStyles(theme => ({
    root: {
        minWidth: 275,
    },
    titleBlock: {
        padding: theme.spacing(10, 0, 10),
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: 400,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Help ({ posts }) {

    const classes = useStyles();

    return (
        <main>
            <Head>
                <title>Conglomerat Help</title>

                <meta name="description" content="Want to report anything? Submit a bug? Grab some bounty? Feel free to go"/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://conglomerat.group/"/>
                <meta property="og:title" content="Conglomerat Help"/>
                <meta property="og:description" content="Want to report anything? Submit a bug? Grab some bounty? Feel free to go"/>
                <meta property="og:image" content="https://conglomerat.group/logo.png"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="og:url" content="https://conglomerat.group/"/>
                <meta property="twitter:title" content="Conglomerat Help"/>
                <meta property="twitter:description" content="Want to report anything? Submit a bug? Grab some bounty? Feel free to go"/>
                <meta property="og:image" content="https://conglomerat.group/logo.png"/>
            </Head>
            <Container fixed>
                <Grid container direction="column" justify="space-around" alignItems="center" spacing={2}>
                    <Box alignItems="center" display="flex" justifyContent="center">
                        <Container maxWidth={false} className={classes.titleBlock}>
                            <Typography component="h1" variant="h2" color="textPrimary" className={classes.title}>
                                HELP
                            </Typography>
                        </Container>
                    </Box>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                >
                {posts.map(({ slug, frontmatter: { title, description, updatedAt } }, i) => (
                    <Grid key={i} item xs={6} sm={6}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    {updatedAt}
                                </Typography>
                                <Typography variant="body1" component="p">
                                    {description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => Router.push(`/help/${slug}`)} size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </main>
    );
}

export async function getStaticProps() {

    const files = fs.readdirSync(`${process.cwd()}/wiki`);

    const posts = files.map((filename) => {
        const markdownWithMetadata = fs.readFileSync(`wiki/${filename}`).toString();

        const { data } = matter(markdownWithMetadata);

        const formattedDate = data.updatedAt.toLocaleDateString("en-GB");

        const frontmatter = {
            ...data,
            updatedAt: formattedDate,
        };

        return {
            slug: filename.replace(".md", ""), frontmatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}
