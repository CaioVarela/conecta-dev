import React from "react";
import { makeStyles } from '@material-ui/styles';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const useStyles = makeStyles((theme)=>({
    root: {
        width: 275,
        padding: 16,
        marginRight:16,
    },
    button:{
        width:'100%',
    },
}));

const tags = [
    {id: 1, name:'reactjs'},
    {id: 2, name:'java script'},
    {id: 3, name:'dotnet'},
    {id: 4, name:'php'},
    {id: 5, name:'material design'},
    {id: 6, name:'webdev'},
]

function NavBar(){
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Grátis</Button>
            <ListSubheader>Tags em alta</ListSubheader>
            {
                tags.map((item)=>(
                    <ListItem dense button key={`item-${item.id}-${item.name}`}>
                        <ListItemText primary={`#${item.name}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    );
}

export default NavBar;