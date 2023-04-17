import React from 'react'
import NavBar from './NavBar'
import BtnChatBot from './BtnChatBot'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import logo from '../images/pokemon.jpg'
function Home() {
  return (
    <Box>
        <NavBar/>
        <Container maxWidth='lg'>
                <Grid container spacing={3} marginTop={2}>
                    <Grid item xs={8}>
                        <img src={logo} width='100%' height='90%'></img>
                    </Grid>
                    <Grid item xs={4} alignSelf={'center'}>
                        <Typography variant='h3' align='center' noWrap>Register</Typography>
                        <Typography mt={2} align="justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quas, voluptatibus voluptas nam saepe inventore eum incidunt laborum at autem repellat, iure exercitationem molestiae magni architecto odit quos animi placeat.</Typography>
                        <Box textAlign={'center'} marginTop={'15px'}>
                          <Button sx={{backgroundColor:'#00a2ff'}} variant='contained' size='large'>Registrarse</Button>
                        </Box>
                    </Grid>
                </Grid>
        </Container>
    </Box>
  )
}

export default Home