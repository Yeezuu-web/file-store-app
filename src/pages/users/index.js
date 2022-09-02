import { Box, Card, CardContent } from '@mui/material'
import React from 'react'
import UserTable from 'src/views/users/UserTable'

const Users = () => {
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
            <UserTable />
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default Users
