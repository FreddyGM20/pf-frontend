import React from 'react'
import NavBarM from './NavBarM'
import PropTypes from 'prop-types';
import { Box } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { Typography } from '@mui/material'
import { Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material';
import { Modal } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const diagnostico = [{
    "id":'214',
    "name":'Freddy Guete',
    "estado":'revisado',
    "preguntas":[{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    },{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
    ,{
        "pregunta":"¿Qué tipo de servicio desea usar?",
        "respuesta":"Informacion sobre las enfermedades venereas"
    }
]
},
{
    "id":'214',
    "name":'Fabian Vargas',
    "estado":'revisado',
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Sharay Guete',
    "estado":'revisado',
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Ivonne Maldonado',
    "estado":'revisado',
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
},
{
    "id":'214',
    "name":'Isabella Araque',
    "estado":'revisado',
    "preguntas":[{
        "pregunta":"hola?2",
        "respuesta":"siuuuu1"
    },{
        "pregunta":"hola?2",
        "respuesta":"siuuuu2"
    },{
        "pregunta":"hola?3",
        "respuesta":"siuuuu3"
    },{
        "pregunta":"hola?4",
        "respuesta":"siuuuu4"
    },
]
}]

const prueba = diagnostico[0] 

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function Medic() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box>
        <NavBarM/>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Revisado" />
                    <Tab label="No Revisado" />
                </Tabs>
            </Box>
                <Grid container spacing={1} marginTop={2} justifyContent={'start'} padding={'8px'}>
                    {diagnostico.map((elem)=>
                    <TabPanel value={value} index={0}>
                    <Card sx={{display:'flex', flexDirection:'row', width:320, borderRadius:'10px', BorderColor:'blue', padding:'8px',textAlign:'end'}}>
                        <CardContent>
                                <Typography gutterBottom variant="h6" component="div" align='center'>
                                Nombre: {elem.name}
                                </Typography>
                                <Typography variant="body2" align='center' color="text.secondary">
                                {elem.estado}
                                </Typography>
                        </CardContent>
                        <CardActions>
                        <Button size="small" variant='contained' sx={{backgroundColor:'#00a2ff'}} onClick={handleOpen}>
                            Ver
                        </Button>
                        </CardActions>
                    </Card>
                    </TabPanel>
                        )}

                                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                       <Box sx={{
                                        display:'flex',flexDirection:'column',position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: '80%',height:'80%',bgcolor: 'background.paper',boxShadow: 24,p: 4, borderRadius:'12px',  overflow: "hidden",overflowY: "scroll",}}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2" align='center' marginBottom={'20px'}>
                                                Historial
                                            </Typography>
                                            {diagnostico[0].preguntas.map((elem)=> {
                                            return (<Paper elevation={3} sx={{marginBottom:'15px'}}>
                                                <Typography id="server-modal-description" sx={{ pt: 2 }} padding={'8px'}>
                                                    Pregunta: {elem.pregunta}
                                                </Typography>
                                                <Typography  id="server-modal-description" sx={{ pt: 2 }} padding={'8px'}>
                                                    Respuesta: {elem.respuesta}
                                                </Typography>
                                            </Paper>)
                                            })}
                                            <Grid container spacing={3} marginTop={2} position={'sticky'}>
                                                <Grid item xs={11}>
                                                    <Paper elevation={3}>
                                                        <TextField required label="Diagnostico" multiline fullWidth variant='outlined'/>
                                                    </Paper>
                                                </Grid>
                                                <Grid item xs={1} fullWidth alignSelf='center'>
                                                    <Button variant="contained" endIcon={<SendIcon />}>
                                                        Send
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                </Modal>
                </Grid>
    </Box>
  )
}

export default Medic