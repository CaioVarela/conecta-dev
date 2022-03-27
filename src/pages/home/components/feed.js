import React from "react";
import { makeStyles } from '@material-ui/styles';
import PostCard from '../../../components/postcard';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Caio Varela',
            username: 'VoiaC',
            avatar: '/',
            description: 'teste 1',
        },
        title: 'Criando um App em React.js!',
        date: 'March 26, 2022',
        description:'Fala pessoal, qual o framework que vocês mais gostam?',
        hashtags:'#dotnet,#javascript,#reactjs,#developer',
        image: '/images/reactJS.png',
    },
    {
        id: 2,
        author: {
            id: 2,
            name: 'Caio Varela',
            username: 'VoiaC',
            avatar: '/',
            description: 'teste 2',
        },
        title: 'React.js! x Vue.js - Quem tem mais performance?',
        date: 'March 26, 2022',
        description:'Quem será que vence?',
        hashtags:'#framework,#javascript,#reactjs,#vue',
        image: '/images/reactvue.png',
    },
];

function Feed() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    );
}

export default Feed;