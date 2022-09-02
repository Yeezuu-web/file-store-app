import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'

const DataTable = props => {
  const { rows, columns, title, isLoading } = props
  const [pageSize, setPageSize] = useState(5)

  return (
    <Box as="div" width="100%">
      <Typography
        variant='h5'
        component='h5'
        sx={{ textAlign: 'left', m: 4 }}
      >
        {!title ? 'Data Table' : title}
      </Typography>
      <DataGrid
        width="100%"
        autoHeight
        getRowId={row => row.id}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 50]}
        pagination
        checkboxSelection
        disableSelectionOnClick
        sx={{
          '.MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within': {
            outline: 'none'
          },
          '.css-98oxe6-MuiInputBase-root-MuiTablePagination-select': {
            marginTop: '4px'
          },
          '.MuiDataGrid-cell:focus': {
            outline: '0px'
          },
          '.MuiDataGrid-cell:focus-within': {
            outline: 'none'
          }
        }}
        rows={rows}
        columns={columns}
        loading={isLoading}
      />
    </Box >
  )
}

export default DataTable
