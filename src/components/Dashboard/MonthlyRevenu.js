
import React from 'react';
import Card from '@material-ui/core/Card';
import DollarIcon from '@material-ui/icons/AttachMoney';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import CardIcon from './CardIcon';

const useStyles = makeStyles({
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    card: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 70,
        width:350
    },
});

const MonthlyRevenue = ({ value }) => {

    const classes = useStyles();
    return (
        <div className={classes.main}>
            <CardIcon Icon={DollarIcon} bgColor="#31708f" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                monthly_revenue
                </Typography>
                <Typography variant="h5" component="h2">
                monthly_revenue
                </Typography>
            </Card>
        </div>
    );
};

export default MonthlyRevenue;