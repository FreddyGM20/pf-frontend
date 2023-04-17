import React, {useState,useEffect} from 'react'
import '../styles/Admin.scss'
import { useNavigate } from "react-router-dom";
import { AiFillEdit, AiFillDelete, AiOutlineMonitor} from 'react-icons/ai';
import {Modal, Box, Button, Typography} from '@mui/material'


const listado = [{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Pichologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
},
{
  "name":"Alberto Rodrigo",
  "especialista":"Odontologia",
}]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Admin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
<div className='admin'>
  <h1 className='title'>Panel de Administrador</h1>
    <div className='buttons'>
    <div className='positionizq'>
      <input type='text' className='position find' value='Busqueda por correo'/>
      <AiOutlineMonitor className='position'/>
    </div>
    <div className='positionder'>
      <button className='primary-buttona' onClick={() => navigate("/login")}>
        Cerrar sesion
      </button>
      <button className='primary-buttona'>Añadir profesional</button>
    </div>
  </div>
  <div className='scroll'>
  <table className='table'>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Especialidad</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {listado.map((elem)=>
          <tr>
            <td>{elem.name}</td>
            <td>{elem.especialista}</td>
            <td>
              <AiFillEdit className='secondary-buttonsa' onClick={() => setOpen(true)}/>
              <AiFillDelete className='secondary-buttonsa'/>
              <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
      </Modal>
            </td>
          </tr>
        )}
    </tbody>
  </table>
  </div>
</div>
  )
}

export default Admin