import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

export default function DoctorsList({ doctorsList, handleOpenModal, setDoctorDetail }) {
    const columns: GridColDef[] = [
        { field: 'avatar', headerName: 'User', width: 100, renderCell: (params) => {
          return (
            <div>
              <Avatar src={params.row.avatar} onClick={() => handleRowSelection(params.row)}/>
            </div>
          )
        } },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 50, align: "center"},
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        { field: 'yearsInPractice', headerName: 'Years In Pratice', type: 'number', width: 120, align: "center" },
        { field: 'speciality', headerName: 'Speciality', width: 200 }
      ];

    const handleRowSelection = (row) => {
        setDoctorDetail(row);
        handleOpenModal();
    }

  return (
    <div style={{ height: 634, width: '100%' }}>
      <DataGrid
        rows={doctorsList}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}
