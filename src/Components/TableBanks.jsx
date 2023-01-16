import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Box from "@mui/material/Box";

import { linkBank } from "../services/link";

export default function TableBanks(rows) {
  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "type", headerName: "Type" },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const createLinkBank = async (e) => {
          e.stopPropagation();
          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          const data = {
            institution: thisRow.name,
            username: "12345",
            password: "12345",
          };
          console.log(data);
          linkBank(data);
        };

        return (
          <IconButton onClick={(e) => createLinkBank(e)}>
            <InsertLinkIcon color="secondary" />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: 1 / 1.5 }}>
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
