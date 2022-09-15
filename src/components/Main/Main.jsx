import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import { ExpenseTrackerContext } from '../../context/context'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'


const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title='Income Tracker' subheader='Finance Manager'/>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: ${balance}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* <InfoCard /> */}
                    Try saying: Add expense for $100 for Food for last Friday...
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main