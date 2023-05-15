import React from "react";
import NavBar from "./NavBar";
import "../styles/ets.scss";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Sifilis() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className="MainInformacion">
        <div className="button-back">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/informacion-ets")}
          >
            <BsArrowLeftCircleFill /> Regresar
          </button>
        </div>
        <div className="container-informacion">
          <div className="paper-informacion">
            <h1>¿Que es la Sifilis?</h1>
            <p>
              La sífilis es una enfermedad de transmisión sexual (ETS) causada
              por la bacteria Treponema pallidum. Esta infección se transmite a
              través del contacto sexual vaginal, anal u oral con una persona
              infectada y también puede transmitirse de una madre infectada a su
              hijo durante el embarazo o el parto. La sífilis se divide en
              cuatro etapas: primaria, secundaria, latente y terciaria. En la
              etapa primaria, aparece una úlcera indolora en el lugar de la
              infección, que puede ser el pene, la vulva, el ano o la boca. En
              la etapa secundaria, pueden aparecer erupciones cutáneas en el
              cuerpo, así como síntomas generales como fiebre, dolor de cabeza y
              fatiga. En la etapa latente, la bacteria permanece en el cuerpo
              sin causar síntomas evidentes. En la etapa terciaria, pueden
              aparecer complicaciones graves como daño cerebral, ceguera,
              problemas cardíacos y daño en los órganos internos.
            </p>
            <p>
              Si bien la sífilis se puede curar con antibióticos, es importante
              recibir tratamiento lo antes posible para evitar complicaciones
              graves. El tratamiento suele consistir en una inyección de
              penicilina o en una serie de dosis de antibióticos orales. Es
              importante realizarse pruebas de detección de ETS con regularidad
              para detectar la sífilis y otras infecciones de transmisión
              sexual. La sífilis puede tener graves consecuencias para la salud.
              En las mujeres embarazadas, la sífilis no tratada puede provocar
              aborto espontáneo, parto prematuro, muerte fetal o transmisión de
              la bacteria al feto, lo que puede causar graves complicaciones de
              salud y discapacidad. En las personas con VIH/sida, la sífilis
              puede ser más grave y más difícil de tratar.
            </p>
          </div>
          <div className="list-informacion">
            <div className="papers-informacion">
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
                  {" "}
                  La sífilis se desarrolla por etapas, y los síntomas varían con
                  cada etapa. Sin embargo, las etapas pueden superponerse y los
                  síntomas no siempre se presentan en el mismo orden. Se puede
                  estar infectado de sífilis sin notar ningún síntoma durante
                  años. Las etapas mas importantes son:
                </p>
                <ul>
                  <li>
                    Sífilis primaria: El primer signo de sífilis es una pequeña
                    llaga, llamada chancro. La llaga aparece en el lugar por
                    donde la bacteria entró a su cuerpo.
                  </li>
                  <li>
                    Sífilis secundaria: Pocas semanas después de la recuperación
                    del chancro original, puedes experimentar una erupción que
                    comienza en el tronco, pero que acaba cubriendo todo el
                    cuerpo, incluso las palmas de las manos y las plantas de los
                    pies.
                  </li>
                  <li>
                    Sífilis terciaria: Aproximadamente del 15 % al 30 % de las
                    personas infectadas con sífilis que no reciben tratamiento
                    tendrán complicaciones conocidas como sífilis terciaria. En
                    la etapa tardía, la enfermedad puede dañar el cerebro, los
                    nervios, los ojos, el corazón, los vasos sanguíneos, el
                    hígado, los huesos y las articulaciones.{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="papers-informacion">
              <h2>¿Como se puede diagnosticar?</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "start",
                }}
              >
                <p>
                  La sífilis se puede diagnosticar mediante el análisis de
                  muestras de:
                </p>
              </div>
              <ul>
                <li>
                  Sangre: Los análisis de sangre pueden confirmar la presencia
                  de anticuerpos que el cuerpo produce para combatir la
                  infección. Los anticuerpos contra la bacteria que causa la
                  sífilis permanecen en tu cuerpo durante años, por lo que el
                  examen se puede utilizar para determinar una infección actual
                  o pasada.
                </li>
                <li>
                  Líquido cefalorraquídeo: Si se sospecha que tienes
                  complicaciones de la sífilis en el sistema nervioso, tu médico
                  también puede sugerirte que se te tome una muestra de líquido
                  cefalorraquídeo a través de una punción lumbar.
                </li>
              </ul>
            </div>
          </div>
          <div className="paper-informacion">
            <h1>Posibles tratamientos</h1>
            <p>
              Cuando se diagnostica y se trata en sus primeras etapas, la
              sífilis es fácil de curar. El tratamiento preferido en todas las
              etapas es la penicilina, un medicamento antibiótico que puede
              matar al organismo que causa la sífilis. Si eres alérgico a la
              penicilina, tu médico puede sugerirte otro antibiótico o
              recomendarte la insensibilización con penicilina. El tratamiento
              recomendado para la sífilis latente primaria, secundaria o
              temprana (que se refiere a una infección dentro del último año) es
              una sola inyección de penicilina. Si has tenido sífilis durante
              más de un año, puedes necesitar dosis adicionales.
            </p>
          </div>
          <div className="button-info">
            <button className="btn btn-primary">Ver más información</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sifilis;
