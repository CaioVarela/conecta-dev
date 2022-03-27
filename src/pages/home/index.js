import React from "react";
import Header from "./components/header";
import Feed from "./components/feed"
import NavBar from "./components/navbar"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    main: {
        height: '100vh',
        display: 'flex',
        width: '1200px',
        margin: '0 auto',
        padding: 24,
    },
    toolbar: {
        minHeight: 64,
    }
})

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.toolbar}></div>
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>

            </main>
        </div>
    );
}
export default Home;