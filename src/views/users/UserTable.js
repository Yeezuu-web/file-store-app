import React, { useState, useEffect, useMemo } from 'react'
import DataTable from 'src/@core/components/data-table'
import axios from 'src/@core/lib/axios'
import Label from './Label'
import UsersActions from './UsersActions'

const UserTable = () => {
  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'Id', width: 50, editable: false },
      { field: 'name', headerName: 'Name', flex: 1, editable: true },
      { field: 'email', headerName: 'Email', flex: 1, editable: true },
      {
        field: 'roles',
        headerName: 'Roles',
        type: 'actions',
        flex: 1,
        renderCell: params => (
          <Label params={params} />
        )
      },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        flex: 1,
        renderCell: (params) => (
          <UsersActions params={params} />
        )
      }
    ],
    []
  )

  const [rows, setRows] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getUsers = async () => {
    setIsLoading(true)

    await axios.get('/api/users')
      .then(res => res.data.data)
      .then(res => {
        setIsLoading(false)
        setRows(res)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <DataTable rows={rows} columns={columns} isLoading={isLoading} title="User Manger" />
    </>
  )
}

export default UserTable
