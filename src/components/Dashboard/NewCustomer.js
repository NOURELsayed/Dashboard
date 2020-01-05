import React, { useMemo } from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CustomerIcon from '@material-ui/icons/PersonAdd';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useQueryWithStore } from 'react-admin';

import CardIcon from './CardIcon';

const useStyles = makeStyles({
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
    },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
        width:350
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
});

const NewCustomers = () => {
    const classes = useStyles();
    const aMonthAgo = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() - 30);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    }, []);

    const { loaded, data: visitors } = useQueryWithStore({
        type: 'getList',
        resource: 'customers',
        payload: {
            filter: {
                has_ordered: true,
                first_seen_gte: aMonthAgo.toISOString(),
            },
            sort: { field: 'first_seen', order: 'DESC' },
            pagination: { page: 1, perPage: 100 },
        },
    });

    if (!loaded) return null;

    return (
        <div className={classes.main}>
            <CardIcon Icon={CustomerIcon} bgColor="#4caf50" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                new_customers
                </Typography>
                <Typography
                    variant="h5"
                    component="h2"
                    className={classes.value}
                >
                   new_customers
                </Typography>
                <Divider />
                <List>
                    {visitors
                        ? visitors.map(record => (
                              <ListItem
                                  button
                                  to={`/customers/${record.id}`}
                                  component={Link}
                                  key={record.id}
                              >
                                  <ListItemAvatar>
                                      <Avatar
                                          src={`${record.avatar}?size=32x32`}
                                      />
                                  </ListItemAvatar>
                                  <ListItemText
                                      primary={`${record.first_name} ${
                                          record.last_name
                                      }`}
                                  />
                              </ListItem>
                          ))
                        : null}
                </List>
            </Card>
        </div>
    );
};

export default NewCustomers;