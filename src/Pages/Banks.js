import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


import TableInstitutions from '../Components/TableBanks'
import {TableLinkedBanks} from '../Components/TableLinkedBanks'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getInstitutions } from '../services/link';
import { listLinks } from '../services/link';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

export const Banks = (props) => {
  const [institutionsRow, setInstitutionsRows] = useState([]);
  const [linkedRow, setLinkedRows] = useState([]);
  const [valid, setValid] = useState(false);
  const [validLinked, setValidLinked] = useState(false);
  const history = useHistory()


  const initializeData = async() => {
    let institutions = await getInstitutions()
    let linkedInstitutions = await listLinks()

    setInstitutionsRows(institutions.data.results)
    setLinkedRows(linkedInstitutions.data.results)
    if(institutions.status === 200 && institutions.data.results.length > 0) {
      setValid(true)
    }

    if(linkedInstitutions.status === 200 && linkedInstitutions.data.results.length > 0) {
      setValidLinked(true)
    }
  }
  const setRedirectDataFunction =async (data)=>{
    history.push('/transactions', data)
    window.location.reload()

  }

  React.useEffect(() => {
    initializeData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CssBaseline />
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">List of banks to links with</Typography>
        {valid? TableInstitutions(institutionsRow) :null}

        <Typography variant="h4">Linked banks</Typography>
        {validLinked? <TableLinkedBanks linkedRow={linkedRow} setRedirectDataFunction={setRedirectDataFunction}/>:null}

      </Box>
    </ThemeProvider>

  )
}
