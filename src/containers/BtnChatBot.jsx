import React from 'react'
import { Fab, Box,} from '@mui/material'
import { BsFillChatRightTextFill } from "react-icons/bs";
function BtnChatBot() {
  return (
    <Box sx={{bottom:'0'}}>
          <Fab color="primary" aria-label="add">
            <BsFillChatRightTextFill />
          </Fab>
    </Box>
    
  )
}

export default BtnChatBot