import React from 'react'
import MonthlyRevenu from './MonthlyRevenu'
import NewCustomer from './NewCustomer'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import ColumnCharts from '../graphs.js/column-chart'
const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },
};
export default function index() {

    return (
        <div>
            <div style={styles.leftCol}>
                <div style={styles.flex}>
                    <MonthlyRevenu />
                    <NewCustomer />
                </div>
            </div>
            <Card>
                <CardHeader title="Welcome to the administration" />
                <CardContent>MetaTech company...</CardContent>
                <ColumnCharts/>
            </Card>
        </div>
    )
}
