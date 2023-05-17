import React from "react";
import NavBar from "./NavBar";
import "../styles/ets.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const classes = {
  maxWidth: "85%",
  height: "100%",
  borderRadius: "15px",
  "@media(max-width:900px)": {
    maxWidth: "100%",
    height: "3000px",
  },
};

function ETS() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className="MainInformacion">
        <div className="container-informacion">
          <div className="paper-informacion">
            <h1>¿Que son las ETS (Enfermedades de transmision sexual)?</h1>
            <p>
              Las enfermedades de transmisión sexual, o ETS, son infecciones que
              se transmiten de una persona a otra a través del contacto sexual.
              Estas infecciones pueden ser causadas por diferentes tipos de
              microorganismos, como virus, bacterias, hongos o parásitos.Las ETS
              pueden afectar a cualquier persona que tenga relaciones sexuales,
              independientemente de su edad, género o orientación sexual. Aunque
              algunas ETS son más comunes en ciertos grupos de población, como
              los jóvenes sexualmente activos o los hombres que tienen
              relaciones sexuales con otros hombres.Algunas de las ETS más
              comunes incluyen la sífilis, la gonorrea, la clamidia, el
              VIH/SIDA, el herpes genital, la hepatitis B, la tricomoniasis y el
              VPH (virus del papiloma humano). Cada una de estas enfermedades
              tiene sus propios síntomas, complicaciones y tratamientos, y
              algunas pueden ser asintomáticas, lo que significa que la persona
              infectada no presenta síntomas visibles.
            </p>
            <p>
              Es importante destacar que las ETS pueden tener graves
              consecuencias para la salud si no se tratan adecuadamente. Por
              ejemplo, la sífilis no tratada puede afectar al cerebro, el
              corazón y otros órganos, y el VPH puede provocar cáncer cervical y
              otros tipos de cáncer. Por esta razón, es fundamental realizarse
              pruebas de detección de ETS con regularidad y recibir tratamiento
              si se ha contraído una infección. Además, se pueden tomar medidas
              para prevenir la transmisión de ETS, como utilizar condones o
              barreras dentales durante las relaciones sexuales, limitar el
              número de parejas sexuales y conocer el estado de salud sexual de
              las parejas antes de tener relaciones sexuales. También es
              importante educar a las personas sobre los riesgos y la prevención
              de las ETS para promover una sexualidad segura y saludable.
            </p>
          </div>
          <div className="list-informacion">
            <div className="papers-informacion">
              <h2>Los síntomas más habituales son:</h2>
              <ul>
                <li>
                  Lesiones de la piel como úlceras, llagas, granos o verrugas,
                  sobre todo alrededor o en genitales, boca y ano.
                </li>
                <li>Dolor abdominal en las mujeres.</li>
                <li>Dolor o molestias durante la relación sexual.</li>
                <li>Flujos vaginal o por el pene.</li>
                <li>Dolor y ardor al orinar.</li>
                <li>Fiebre y malestar general.</li>
              </ul>
            </div>
            <div className="papers-informacion">
              <h2>
                ¿Cuáles son los tratamientos para las enfermedades de
                transmisión sexual?
              </h2>
              <p>
                Los antibióticos pueden tratar las ETS causadas por bacterias o
                parásitos. No existe cura para las ETS causadas por un virus,
                pero a menudo los medicamentos pueden ayudar con los síntomas y
                reducir su riesgo de propagar la infección.
              </p>
            </div>
          </div>
          <div className="paper-informacion">
            <h1>Enfermedades de transmision sexual</h1>
          </div>
          <div className="container-papersc">
            <Card sx={classes} elevation={10}>
              <CardContent>
                <h5>Clamidia</h5>
                <p>
                  {" "}
                  La infección por clamidia es una ETS común que puede infectar
                  tanto a los hombres como a las mujeres. Puede causar daños
                  graves y permanentes en el aparato reproductor.
                </p>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "95%" }}
                  onClick={() => navigate("/clamidia")}
                >
                  Ver más
                </button>
              </CardActions>
            </Card>
            <Card sx={classes} elevation={10}>
              <CardContent>
                <h5>Gonorrea</h5>
                <p>
                  es una infección causada por una bacteria de transmisión
                  sexual que infecta tanto a hombres como a mujeres. La gonorrea
                  afecta con mayor frecuencia la uretra.
                </p>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "95%" }}
                  onClick={() => navigate("/gonorrea")}
                >
                  Ver más
                </button>
              </CardActions>
            </Card>
            <Card sx={classes} elevation={10}>
              <CardContent>
                <h5>Herpes Genital</h5>
                <p>
                  es una enfermedad de transmisión sexual (ETS) común que puede
                  contraer cualquier persona sexualmente activa. La mayoría de
                  las personas con el virus no tiene síntomas.
                </p>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "95%" }}
                  onClick={() => navigate("/herpes-g")}
                >
                  Ver más
                </button>
              </CardActions>
            </Card>
            <Card sx={classes} elevation={10}>
              <CardContent>
                <h5>Sifilis</h5>
                <p>
                  La sífilis es una enfermedad de transmisión sexual (ETS) que
                  puede tener complicaciones muy graves cuando se deja sin
                  tratar, pero es fácil de curar con el tratamiento adecuado.
                </p>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "95%" }}
                  onClick={() => navigate("/sifilis")}
                >
                  Ver más
                </button>
              </CardActions>
            </Card>
            <Card sx={classes} elevation={10}>
              <CardContent>
                <h5>VIH/Sida</h5>
                <p>
                  El VIH es una infección de trasmisión sexual. También puede
                  trasmitirse por el contacto con sangre infectada y por
                  inyectarse drogas ilícitas o por compartir agujas.
                </p>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "95%" }}
                  onClick={() => navigate("/vih")}
                >
                  Ver más
                </button>
              </CardActions>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default ETS;
