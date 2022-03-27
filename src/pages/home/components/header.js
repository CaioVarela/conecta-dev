import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SvgIcon from '@mui/material/SvgIcon';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/styles';
import Button from '@mui/material/Button';
import { Bell } from "react-feather";

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight:5
    },
    icon: {
        marginLeft:15
    }
});

function Header() {
    const classes = useStyles();
    return (
        <AppBar position = "fixed" color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                <Button variant="contained" color="primary" className={classes.button}> Novo post</Button>
                <SvgIcon className={classes.icon}>
                    <Bell/>
                </SvgIcon>
                <Avatar alt="C" src="/" className={classes.icon} />
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Header;