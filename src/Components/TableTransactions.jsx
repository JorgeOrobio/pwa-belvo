import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";


export default function TableTransactions(rows) {
  const columns = [
    { field: "id", headerName: "Id", width: 250 },
    { field: "amount", headerName: "Amount" },
    { field: "balance", headerName: "Balance" },
    { field: "status", headerName: "Status" },
    { field: "type", headerName: "Type" },
    { field: "value_date", headerName: "Value Date" }
  ];

  return (
    <Box sx={{ height: 500, width: 1 }}>
      <DataGrid
        rowHeight={80}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
