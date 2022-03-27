import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Avatar, Button, FormHelperText, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from '../../utils/axios';
import authService from "../../services/authService";

const useStyles = makeStyles({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: 2,
        textAlign: 'center',
    },
    form: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 4,
        marginRight: 4,
    }
});

function SignIn() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    async function handleSignIn(){
        try {
            await authService.signIn(email,password);
            navigate('/');
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <Grid container className={classes.root}>
            <Grid item container direction="column" justifyContent="center" alignContent="center" alignItems="center" className={classes.image} md={7}>
                <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px', }}>
                    <strong> Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant='body2' style={{ color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}>
                    <strong> Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
            </Grid>
            <Grid item md={5}>
                <Box display='flex' flexDirection= 'column' alignItems='center' m={8}>
                <Avatar sx = {{bgcolor: '#30F2F2', marginBottom: 0.5}}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">Acesso</Typography>
                <form>
                    <TextField 
                    variant="outlined"
                    margin="normal"
                    required fullWidth
                    id="email"
                    label="E-mail"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value = {email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                    <TextField 
                    variant="outlined"
                    margin="normal"
                    required fullWidth
                    id="password"
                    label="Senha"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    autoFocus
                    value = {password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSignIn}
                    sx={{marginTop: 1}}
                    >
                        Entrar
                    </Button>
                    {
                        errorMessage &&
                        <FormHelperText error>
                            {errorMessage}
                        </FormHelperText>
                    }
                    <Grid container>
                        <Grid>
                            <Link>Esqueceu sua senha?</Link>
                        </Grid>
                        <Grid>
                            <Link>Não possui conta? cadastre-se já!</Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
        </Grid >
    );
}

export default SignIn;