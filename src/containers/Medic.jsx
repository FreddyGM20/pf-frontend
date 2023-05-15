import React, { useState, useEffect } from "react";
import NavBarM from "./NavBarM";
import "../styles/medic.scss";
import { BsEyeFill } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import { BsSend } from "react-icons/bs";
import axios from "axios";
import { useParams } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  backgroundColor: "white",
  boxShadow: 24,
  padding: "20px",
};

function Medic() {
  const { id } = useParams();
  const URL = "https://contenedor-diagven-production.up.railway.app";
  const token = localStorage.getItem("token");
  const params = new URLSearchParams(window.location.search);

  let [npacientes, setNRpacientes] = useState([]);
  let [pacientes, setRpacientes] = useState([]);
  let [paciente, setPaciente] = useState({});
  let [historial, sethistorial] = useState([]);
  const [openS, setopenS] = useState(false);
  const [openE, setopenE] = useState(false);
  const [error, setError] = useState();

  const CloseS = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopenS(false);
  };
  const CloseE = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setopenE(false);
  };

  useEffect(() => {
    axios.get(`${URL}/medico/norevisado`).then((res) => {
      setNRpacientes(...npacientes, res.data.datos);
    });

    axios.post(`${URL}/medico/revisado`,{},
        {
          headers: {
            Authorization: `Basic ${token}`,
          },
        }
      )
      .then((res) => {
        setRpacientes(...pacientes, res.data.datos);
        console.log(pacientes)
      });
  }, []);
  console.log("npacientes",npacientes)
  console.log("pacientes",pacientes)
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id, user) => {
    params.set("id", id);
    params.set("iduser", user);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
    axios.post(`${URL}/medico/seep`,{id:id}).then((res) => {
        setPaciente(res.data.datos);
        sethistorial(res.data.datos.historial)
      });
    setOpen(true);
  };
  const handleClose = () => {
    params.delete("id");
    params.delete("iduser");
    const nuevaUrl = `${window.location.origin}${
      window.location.pathname
    }?${params.toString()}`;
    window.location.replace(nuevaUrl);
    setOpen(false);
  };

  function diagnostico() {
    const queryParams = new URLSearchParams(window.location.search);
    const idp = queryParams.get("id");
    const idu = queryParams.get("iduser");
    let val = document.getElementById("opciones").value;
    if (val == "Prioridad") {
      val = "true";
    } else {
      val = "false";
    }
    const formData = {
      iduser: idu,
      prioridad: val,
      revision: "true",
      texto: document.getElementById("texto").value,
      historialid: idp,
    };
    axios
      .put(`${URL}/medico/diagnostico`, formData, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        if (res.data.response == "Success") {
          setError(res.data.message);
          setopenS(true);
          setOpen(false);
        } else {
          setError(res.data.message);
          setopenE(true);
          setOpen(false);
        }
      })
      .catch((err) => {
        setError(err);
        setopenE(true);
    });
    console.log(openS, openE)
  }
  return (
    <>
      <Snackbar open={openS} autoHideDuration={4000} onClose={CloseS}>
        <Alert onClose={CloseS} severity="success" sx={{ width: '100%' }}>
          ¡Se envio el diagnostico correctamente 😄!
        </Alert>
      </Snackbar>
      <Snackbar open={openE} autoHideDuration={4000} onClose={CloseE}>
        <Alert onClose={CloseE} severity="error" sx={{ width: '100%' }}>
          Error al enviar el diagnostico 🙁.
        </Alert>
      </Snackbar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="MainModal">
          <div className="container-modal">
            <h1>{paciente.nameuser}</h1>
            <div className="container-cardqr">
              <div className="card-qr">
                {historial.map((elem, key) => {
                  return (
                    <div className="dialog-modal" key={key}>
                      <h6>
                        {key + 1}. {elem.pregunta}
                      </h6>
                      <p>{elem.respuesta}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="message">
              <select
                class="form-select seleccionar"
                aria-label="Default select example"
                id="opciones"
                required
              >
                <option selected>
                  Seleccione el tipo de prioridad*
                </option>
                <option value="Prioridad">Prioridad</option>
                <option value="Sin prioridad">Sin prioridad</option>
              </select>
              <div className="area-txt">
                <textarea
                  class="inputmessage"
                  rows="3"
                  placeholder="Escriba el diagnostico aqui*"
                  id="texto"
                  required
                ></textarea>
                <button value="Enviar" className="primary-button" onClick={()=>{diagnostico()}}>
                  Enviar <BsSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <NavBarM />
      <div className="MainMedic">
        <div className="container-medic">
          <div className="navbarList">
            <ul className="nav nav-underline navitem">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Revisado
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  No revisado
                </button>
              </li>
            </ul>
            <div className="container-tab tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab-priority"
                tabIndex="0"
              >
                <div className="dropdown">
                  <a
                    className="btn btn-primary dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filtrar por
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">Prioridad</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Sin prioridad</a>
                    </li>
                  </ul>
                </div>
                <div className="cards">
                  {pacientes.map((elem, key) => (
                    <div className="content-card" key={key}>
                      <div className="card">
                        <div className="card-izq">
                          <div className="textname">
                            <Tooltip title={elem.nameuser}>
                              <h6>Nombre: {elem.nameuser}</h6>
                            </Tooltip>
                          </div>
                          <p>Revisado</p>
                        </div>
                        <div className="card-der">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              handleOpen(elem._id, elem.iduser);
                            }}
                          >
                            <BsEyeFill />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <div className="cards">
                  {npacientes.map((elem, index) => (
                    <div className="content-card" key={index}>
                      <div className="card">
                        <div className="card-izq">
                          <div className="textname">
                            <Tooltip title={elem.nameuser}>
                              <h6>Nombre: {elem.nameuser}</h6>
                            </Tooltip>
                          </div>
                          <p>No Revisado</p>
                        </div>
                        <div className="card-der">
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              handleOpen(elem._id, elem.iduser);
                            }}
                          >
                            <BsEyeFill />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Medic;
