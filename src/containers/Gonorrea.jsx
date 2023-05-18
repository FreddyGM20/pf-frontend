import React from "react";
import NavBar from "./NavBar";
import "../styles/informacion.scss";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Gonorrea() {
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
            <h1>¿Que es la Gonorrea?</h1>
            <p>
              La gonorrea es una enfermedad de transmisión sexual (ETS) causada
              por la bacteria Neisseria gonorrhoeae. Esta infección puede
              afectar tanto a hombres como a mujeres, y es una de las ETS más
              comunes en todo el mundo. Este se transmite a través del contacto
              sexual vaginal, anal u oral con una persona infectada. También
              puede transmitirse de madre a hijo durante el parto. Al igual que
              con otras ETS, muchas personas infectadas con gonorrea no
              presentan síntomas, lo que significa que pueden transmitir la
              enfermedad sin saberlo. Cuando se presentan síntomas, estos pueden
              incluir secreción genital anormal, dolor o ardor al orinar, dolor
              durante las relaciones sexuales y dolor en la parte baja del
              abdomen en las mujeres.
            </p>
            <p>
              {" "}
              Si no se trata, la gonorrea puede tener graves consecuencias para
              la salud. En las mujeres, la infección puede causar enfermedad
              inflamatoria pélvica (EIP), que puede provocar dolor crónico y
              daño en las trompas de Falopio, lo que aumenta el riesgo de
              infertilidad y embarazo ectópico. En los hombres, la infección
              puede causar epididimitis, una inflamación del epidídimo que puede
              provocar dolor e hinchazón en los testículos. Tanto en hombres
              como en mujeres, la gonorrea no tratada también puede aumentar el
              riesgo de contraer el VIH y otras ETS.
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
                  Los signos y síntomas de la infección de gonorrea en los
                  hombres incluyen:
                </p>
                <ul>
                  <li>Dolor al orinar.</li>
                  <li>Secreción similar al pus de la punta del pene.</li>
                  <li>Dolor o hinchazón en un testículo.</li>
                </ul>
                <p>
                  Los signos y síntomas de la infección de gonorrea en las
                  mujeres incluyen:
                </p>
                <ul>
                  <li>Aumento del flujo vaginal.</li>
                  <li>Dolor al orinar.</li>
                  <li>
                    Sangrado vaginal entre períodos, como después de una
                    relación sexual vaginal.
                  </li>
                  <li>Dolor abdominal o pélvico.</li>
                </ul>
              </div>
            </div>
            <div className="papers-informacion1">
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
                  Para determinar si tienes gonorrea, el médico analizará una
                  muestra de células. Las muestras pueden ser recogidas de las
                  siguientes maneras:
                </p>
              </div>
              <ul>
                <li>
                  Análisis de orina. Esto puede ayudar a identificar bacterias
                  en la uretra.
                </li>
                <li>
                  Muestras del área afectada. Una muestra de tu garganta,
                  uretra, vagina o recto puede recolectar bacterias que se
                  pueden identificar en un laboratorio.
                </li>
                <li>
                  En el caso de los hombres, si se requiere el hisopado el
                  médico inserta un hisopo delgado en el extremo del pene para
                  obtener una muestra de la uretra. En algunos casos, el médico
                  te hará un hisopado del ano.
                </li>
              </ul>
            </div>
          </div>
          <div className="paper-informacion1">
            <h1>Posibles tratamientos</h1>
            <p>
              Los adultos con gonorrea se tratan con antibióticos. Debido a las
              cepas emergentes de Neisseria gonorrhoeae resistente a los
              medicamentos, los Centros para el Control y la Prevención de
              Enfermedades recomiendan que la gonorrea no complicada se trate
              con el antibiótico ceftriaxona, administrado por inyección, con
              azitromicina oral (Zithromax). Si eres alérgico a los antibióticos
              de cefalosporina, como la ceftriaxona, se te podría administrar
              gemifloxacina (Factive) oral o gentamicina inyectable y
              azitromicina oral.
            </p>
            <div
              style={{ display: "flex", width: "100%", alignItems: "start" }}
            >
              <p>
                <p>
                  En caso de los bebés nacidos de madres con gonorrea que
                  desarrollan la infección pueden tratarse con antibióticos.
                </p>
              </p>
            </div>
          </div>
          <form className="button-info1" action="https://medlineplus.gov/spanish/ency/article/007267.htm">
            <button className="btn btn-primary">Ver más información</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Gonorrea;
