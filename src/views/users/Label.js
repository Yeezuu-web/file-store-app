import { Box, Chip } from '@mui/material'
import React from 'react'

const Label = props => {
  const { params } = props
  const roles = params.row.roles

  return (
    <Box>
      {roles.map((role) => (
        <Chip label={role.title} color="primary" key={role.id} size="small" />
      ))}
    </Box>
  )
}

export default Label
