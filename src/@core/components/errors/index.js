import { List, ListItemText, Typography } from "@mui/material"
import { useState } from "react";

const Error = ({errors = [], ...props}) => {
  const {dense, setDense} = useState(true)
  return (
    <>
        {errors.length > 0 && (
          <List dense={dense}>
            <ListItemText
              disableTypography="true"
              primary={<Typography variant="body1" color="red">Whoosh! Something errors...</Typography>}
            />

            {errors.map(error => (
              <ListItemText
                key={error}
                disableTypography="true"
                primary={<Typography variant="body2" color="error">- {error}</Typography>}
              />
            ))}
          </List>
        )}
    </>
  )
}

export default Error