import React from "react";
import NavBar from "./NavBar";
import "../styles/informacion.scss";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Herpes() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className="MainInformacion1">
        <div className="button-back1">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/informacion-ets")}
          >
            <BsArrowLeftCircleFill /> Regresar
          </button>
        </div>
        <div className="container-informacion1">
          <div className="paper-informacion1">
            <h1>¿Que es el Herpes Genital?</h1>
            <p>
            El herpes genital es una enfermedad de transmisión sexual (ETS) causada por el virus del herpes simple (VHS) tipo 1 o tipo 2. Esta infección se transmite a través del contacto sexual vaginal, anal u oral con una persona infectada. También puede transmitirse de madre a hijo durante el parto. Una vez que una persona ha sido infectada con el virus del herpes genital, este permanece en su cuerpo de por vida y puede causar brotes recurrentes de ampollas y llagas en los genitales, el ano y las áreas circundantes. Los síntomas pueden incluir dolor, picazón, ardor y hormigueo antes de que aparezcan las ampollas y llagas, y pueden durar de dos a cuatro semanas.
            </p>
            <p>
            Si bien el herpes genital no se puede curar, existen tratamientos que pueden ayudar a reducir la duración y la frecuencia de los brotes, así como aliviar los síntomas. Los tratamientos pueden incluir medicamentos antivirales que se toman de forma oral o se aplican en forma de crema tópica. La infección por herpes genital puede tener graves consecuencias para la salud. En las mujeres embarazadas, la infección puede provocar complicaciones durante el embarazo y el parto, como aborto espontáneo, parto prematuro y transmisión del virus al recién nacido. En las personas con un sistema inmunológico debilitado, como las personas con VIH/sida, el herpes genital puede ser más grave y más difícil de tratar.
            </p>
          </div>
          <div className="list-informacion1">
            <div className="papers-informacion1">
              <h2>Los síntomas más comunes son:</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "start",
                }}
              >
                <p>
                Durante el primer brote, es probable que también tengas síntomas similares a los de la gripe, como los siguientes:
                </p>
                <ul>
                  <li>Fiebre.</li>
                  <li>Dolor de Cabeza.</li>
                  <li>Dolores en el cuerpo.</li>
                  <li>Hinchazón de los ganglios linfáticos de la ingle.</li>
                </ul>
                <p>
                Los síntomas comienzan entre 2 y 12 días después de la exposición al virus. Estos son algunos síntomas posibles:
                </p>
                <ul>
                  <li>Dolor o picazón alrededor de los genitales.</li>
                  <li>Pequeños bultos o ampollas alrededor de los genitales, el ano o la boca.</li>
                  <li>
                  Úlceras dolorosas que se forman cuando las ampollas se rompen y exudan o sangran.
                  </li>
                  <li>Secreción de la uretra, el conducto que expulsa la orina del cuerpo o secreción de la vagina.</li>
                </ul>
              </div>
            </div>
            <div className="papers-informacion1">
              <h2>¿Como se puede diagnosticar?</h2>
              <ul>
                <li>
                Para confirmar el diagnóstico, probablemente tome una muestra de una llaga activa. Estas muestras se analizan en una o más pruebas para ver si tienes infección por el virus del herpes simple y determinar si el virus es de tipo 1 o tipo 2.
                </li>
                <li>Con menos frecuencia, se puede hacer un análisis de sangre para confirmar el diagnóstico o descartar otras infecciones.</li>
              </ul>
            </div>
          </div>
          <div className="paper-informacion1">
            <h1>Posibles tratamientos</h1>
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "start",
                }}
              >
                <p>
                El herpes genital no tiene cura. Se puede hacer un tratamiento con pastillas antivirales con receta médica para lo siguiente:
                </p>
                <ul>
                  <li>Ayudar a que las llagas cicatricen durante el primer brote..</li>
                  <li>Reducir la frecuencia de los brotes recurrentes.</li>
                  <li>Disminuir la gravedad y la duración de los síntomas en brotes recurrentes.</li>
                  <li>Reducir la posibilidad de trasmitir el virus del herpes a la pareja.</li>
                </ul>
                <p>
                Entre los medicamentos que suelen recetarse para el herpes genital se incluyen los siguientes:
                </p>
                <ul>
                  <li>Aciclovir (Zovirax).</li>
                  <li>Famciclovir.</li>
                  <li>Valaciclovir (Valtrex).</li>
                </ul>
              </div>
          </div>
          <div className="button-info1">
            <button className="btn btn-primary">Ver más información</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Herpes;
