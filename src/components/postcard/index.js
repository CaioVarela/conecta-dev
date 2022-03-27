import React from "react";
import { makeStyles } from '@material-ui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import { bgcolor, color } from "@mui/system";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 16,
    },
    subheader: {
        display: 'flex',
        alignItems: 'center',
    },
    typography: {
        paddingRight: 8
    },
    message: {
        height: 'auto',
        marginBottom: 16,
        padding: '0 24px'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%',
    }
}));

function PostCard({ post }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar sx={{ bgcolor: '#d50000' }} aria-label="recipe">C</Avatar>}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader=
                {
                    <div className={classes.subheader}>
                        <Typography className={classes.typography} variant="caption">{'Postado por'}</Typography>
                        <Typography className={classes.typography} variant="subtitle2">{post.author.name}</Typography>
                        <Typography className={classes.typography} variant="caption">{post.date}</Typography>
                    </div>
                }
            />
            <CardContent>
                <Typography className={classes.message} variant='body1'>
                    {post.hashtags}
                </Typography>
            </CardContent>
            <CardActionArea>
                <img className={classes.image} src={post.image} />
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="like">
                    <FavoriteIcon />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="textSecondary"
                        variant="body2"
                    >
                        {post.likes}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <MessageIcon />
                    <Typography
                        className={classes.reactions}
                        color="textSecondary"
                        variant="body2"
                    >
                        {post.comments}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>

    );
}

export default PostCard;