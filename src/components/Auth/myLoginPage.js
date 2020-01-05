import React, { useState } from 'react';
import { useLogin, useNotify } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import LockIcon from '@material-ui/icons/Lock';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
}));

const MyLoginPage = ({ theme }) => {
    const [loading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const classes = useStyles();
    const submit = (e) => {
        e.preventDefault();
        login({ email, password })
            .catch(() => notify('Invalid email or password'));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.main}>
                <Card className={classes.card}>
                    <div className={classes.avatar}>
                        <Avatar className={classes.icon}>
                            <LockIcon />
                        </Avatar>
                    </div>
                    <form onSubmit={submit}>
                        <div className={classes.form}>
                            <div className={classes.input}>
                                <input name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className={classes.input}>
                                <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <CardActions className={classes.actions}>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary"
                                // disabled={loading}
                                fullWidth
                                href="/"
                            >
                                {loading && (
                                    <CircularProgress
                                        size={25}
                                        thickness={2}
                                    />
                                )}

                                sign_in
                            </Button>
                        </CardActions>
                    </form>
                </Card>
            </div>
        </ThemeProvider>
    );
};

export default MyLoginPage;