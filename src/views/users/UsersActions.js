import { IconButton, Box, CircularProgress } from '@mui/material'
import { Delete, Eye, Pencil } from 'mdi-material-ui'
import React, { useEffect, useState } from 'react'

const UsersActions = props => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);

  const { params } = props

  const handleEdit = params => {
    console.log(params.id);
  }

  return (
    <Box sx={{
      m: 1,
      display: 'flex',
      alignItems: 'center'
    }}>
      <IconButton aria-label="edit" size="small" color="primary" onClick={() => handleEdit(params)}>
        <Pencil fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="edit" size="small" color="error">
        <Delete fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="edit" size="small" color="success">
        <Eye fontSize="inherit" />
      </IconButton>
    </Box>
  )
}

export default UsersActions
