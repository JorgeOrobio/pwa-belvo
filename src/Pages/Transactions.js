import { useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { retrieveTransactions } from '../services/transactions';
import { TextField, Button, Grid } from '@mui/material';
import Tabletransactions from '../Components/TableTransactions'

const theme = createTheme();

export default function Transactions(props) {
    const history = useHistory();

    const [transactionsRow, setTransactionsRow] = useState([]);
    const [form, setForm] = useState({
        dateFrom: "",
        dateTo: "",
    });
    const [valid, setValid] = useState(false);


    const initializeData = async () => {
        
        let data = history.location.state;
        data.date_from = form.dateFrom || "";
        data.date_to = form.dateTo || "";
        await retrieveTransactions(data, setTransactionsRow, setValid);

    }

    const onChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const getTransactions = async () => {
        await initializeData();
        console.log(transactionsRow)
    }

    let today = new Date()
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CssBaseline />
            <Grid container spacing={2} mt={10} justifyContent={"center"}>
                <Grid item xs={8} paddingLeft={40}>
                    <Typography variant="h5" justifyContent={"center"}> Date from</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField  InputProps={{inputProps: { min: "2022-01-01", max: (today.toISOString().split('T')[0])} }} id="dateFrom" variant="standard" name='dateFrom' type="date" onChange={onChange} />
                </Grid>
                <Grid item xs={8} paddingLeft={40}>
                    <Typography variant="h5"> Date to</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField InputProps={{inputProps: { min: "2022-01-01", max: (today.toISOString().split('T')[0])} }} id="dateTo" variant="standard" name='dateTo' type="date" onChange={onChange} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="outlined" onClick={(e) => { getTransactions() }}>Get Transactions</Button>
                </Grid>
            </Grid>
            {valid? Tabletransactions(transactionsRow):null}

        </ThemeProvider>
    )
}
