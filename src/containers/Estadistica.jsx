import React from 'react'
import NavBar from './NavBar'
import BtnChatBot from './BtnChatBot'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import { Divider } from '@mui/material'
import { Chip } from '@mui/material'
import logo from '../images/pokemon.jpg'
import NavBarM from './NavBarM'

function Estadistica() {
  return (
    <Box>
        <NavBarM/>
        <Container maxWidth='lg'>
        <Grid container spacing={3} marginTop={2}>
            <Grid item xs={7}>
                <img src={logo} width='100%' height='90%'></img>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{height:500, alignSelf:'center'}}>
                <Chip label=" " />
            </Divider>
            <Grid item xs={3} alignSelf={'center'}>
                <Typography variant='h3' align='center' noWrap>Graphic #1</Typography>
                <Typography mt={2} align="justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quas, voluptatibus voluptas nam saepe inventore eum incidunt laborum at autem repellat, iure exercitationem molestiae magni architecto odit quos animi placeat.</Typography>
                <Box textAlign={'center'} marginTop={'15px'}>
                </Box>
            </Grid>
            <Grid item xs={3} alignSelf={'center'}>
                <Typography variant='h3' align='center' noWrap>Graphic #1</Typography>
                <Typography mt={2} align="justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quas, voluptatibus voluptas nam saepe inventore eum incidunt laborum at autem repellat, iure exercitationem molestiae magni architecto odit quos animi placeat.</Typography>
                <Box textAlign={'center'} marginTop={'15px'}>
                </Box>
            </Grid>
            <Divider orientation="vertical" flexItem sx={{height:500, alignSelf:'center'}}>
                <Chip label=" " />
            </Divider>
            <Grid item xs={7}>
                <img src={logo} width='100%' height='90%'></img>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default Estadistica