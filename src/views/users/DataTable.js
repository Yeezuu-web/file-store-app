import { CardContent } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'

const columns = [
  {field: 'name', headerName: 'Name', width: 200},
  {field: 'email', headerName: 'Email', width: 300},
  {field: 'role', headerName: 'Role'},
  {field: 'status', headerName: 'Status'},
  {field: 'actions', headerName: 'Actions'}
]

const DataTableE = () => {
  const [ tableData, setTableData ] = useState([])

  const [ pageSize, setPageSize ] = useState(10)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(data => {
        setTableData(data)
      })
  })

  return (
    <>
      <Card>
        <CardContent sx={{
            p: '0 !important',
        }}>
          <Box sx={{
            mb: 4
          }}>

          </Box>
          <Box>
            <DataGrid
              autoHeight
              rows={tableData}
              columns={columns}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[10, 20, 50]}
              pagination
              checkboxSelection
              sx= {{
                '.MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within': {
                  outline: 'none'
                },
                '.css-98oxe6-MuiInputBase-root-MuiTablePagination-select': {
                  marginTop: '4px'
                }

              }}
            />
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default DataTableE
