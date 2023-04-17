import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import NavBar from './NavBar'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { BorderColor, Height } from '@mui/icons-material';
import BtnChatBot from './BtnChatBot'


const diagnostico = [,{
    "id":'214',
    "estado":'revisado'
},
{
    "id":'21432',
    "estado":'revisado'
},
{
    "id":'212443',
    "estado":'revisado'
},
{
    "id":'2355314',
    "estado":'revisado'
},
{
    "id":'2355314',
    "estado":'revisado'
},
{
    "id":'2355314',
    "estado":'revisado'
},
{
    "id":'2355314',
    "estado":'revisado'
}]

function Diagnostico() {
  return (
    <div className='app'>
    <Box>
        <NavBar/>
        <Grid container spacing={1} marginTop={2} justifyContent={'start'} padding={'8px'}>
            {diagnostico.map((elem)=>
            <Card sx={{display:'flex', flexDirection:'row', width:250, borderRadius:'10px', BorderColor:'blue', marginLeft:'25px', marginTop:'15px', marginRight:'15px', textAlign:'end'}}>
                <CardActionArea maxWidth='auto'>
                <CardContent>
                        <Typography gutterBottom variant="h6" component="div" align='center'>
                        Caso: {elem.id}
                        </Typography>
                        <Typography variant="body2" align='center' color="text.secondary">
                        {elem.estado}
                        </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" variant='contained' sx={{backgroundColor:'#00a2ff'}}>
                    Ver
                </Button>
                </CardActions>
            </Card>
                  )}
        </Grid>
    </Box>
    <BtnChatBot/>
    </div>
  )
}

export default Diagnostico