// import React, { useState,Component } from 'react';
// import { connect } from 'react-redux';
// import { userLogin } from 'react-admin';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import TextField from '@material-ui/core/TextField';
// import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
// import { Field, withTypes } from 'react-final-form';
// import LockIcon from '@material-ui/icons/Lock';
// const useStyles = makeStyles(theme => ({
//     main: {
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         background: 'url(https://source.unsplash.com/random/1600x900)',
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//     },
//     card: {
//         minWidth: 300,
//         marginTop: '6em',
//     },
//     avatar: {
//         margin: '1em',
//         display: 'flex',
//         justifyContent: 'center',
//     },
//     icon: {
//         backgroundColor: theme.palette.secondary.main,
//     },
//     hint: {
//         marginTop: '1em',
//         display: 'flex',
//         justifyContent: 'center',
//         color: theme.palette.grey[500],
//     },
//     form: {
//         padding: '0 1em 1em 1em',
//     },
//     input: {
//         marginTop: '1em',
//     },
//     actions: {
//         padding: '0 1em 1em 1em',
//     },
// }));
// class MyLoginPage extends Component {
//     submit = (e) => {
//         e.preventDefault();
//         // gather your data/credentials here
//         const credentials = { };

//         // Dispatch the userLogin action (injected by connect)
//         this.props.userLogin(credentials);
//     }

//     render() {
//             const [loading, setLoading] = useState(false);
//             const translate = useTranslate();
//             const classes = useStyles();
//             const notify = useNotify();
//             const login = useLogin();
//         return (
//             <form onSubmit={this.submit}>
//                       <div className={classes.main}>
//                         <Card className={classes.card}>
//                             <div className={classes.avatar}>
//                                 <Avatar className={classes.icon}>
//                                     <LockIcon />
//                                 </Avatar>
//                             </div>
//                             <div className={classes.hint}>
//                                 Hint: demo / demo
//                             </div>
//                             <div className={classes.form}>
//                                 <div className={classes.input}>
//                                     <Field
//                                         autoFocus
//                                         name="username"
//                                         // @ts-ignore
//                                         component={renderInput}
//                                         label={translate('ra.auth.username')}
//                                         disabled={loading}
//                                     />
//                                 </div>
//                                 <div className={classes.input}>
//                                     <Field
//                                         name="password"
//                                         // @ts-ignore
//                                         component={renderInput}
//                                         label={translate('ra.auth.password')}
//                                         type="password"
//                                         disabled={loading}
//                                     />
//                                 </div>
//                             </div>
//                             <CardActions className={classes.actions}>
//                                 <Button
//                                     variant="contained"
//                                     type="submit"
//                                     color="primary"
//                                     disabled={loading}
//                                     fullWidth
//                                 >
//                                     {loading && (
//                                         <CircularProgress
//                                             size={25}
//                                             thickness={2}
//                                         />
//                                     )}
//                                     {translate('ra.auth.sign_in')}
//                                 </Button>
//                             </CardActions>
//                         </Card>
//                         <Notification />
//                     </div>
//             </form>
//         );
//     }
// };

// export default connect(undefined, { userLogin })(MyLoginPage);