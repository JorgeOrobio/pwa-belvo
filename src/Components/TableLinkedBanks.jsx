import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Box from "@mui/material/Box";

export const TableLinkedBanks=({linkedRow,setRedirectDataFunction})=> {
  const columns = [
    { field: "institution", headerName: "Institution", width: 200 },
    { field: "id", hide: true },
    { field: "status", headerName: "Status" },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        let data = {
          link: "",
          token: "1234ab",
          save_data: true,
        };
        const retrieveLinkedBanks = async (e) => {
          e.stopPropagation();
          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          data.link = thisRow.id;
          setRedirectDataFunction(data);


        };

        return (
          <IconButton onClick={(e) => retrieveLinkedBanks(e)}>
              <RemoveRedEyeIcon color="secondary" />
            </IconButton>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: 1 / 1.5 }}>
      <DataGrid
        rowHeight={80}
        rows={linkedRow}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
}
