import React from "react";
import NavBar from "./NavBar";
import "../styles/informacion.scss";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function VIH() {
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
            <h1>¿Que es el VIH/Sida?</h1>
            <p>
              El VIH (Virus de Inmunodeficiencia Humana) es un virus que afecta
              al sistema inmunológico, el cual es el encargado de proteger al
              cuerpo contra las infecciones y las enfermedades. El VIH ataca y
              destruye los glóbulos blancos (linfocitos T CD4+) del sistema
              inmunológico, lo que debilita la capacidad del cuerpo para
              combatir las infecciones y enfermedades. Si no se trata, el VIH
              puede llevar a la aparición del SIDA (Síndrome de
              Inmunodeficiencia Adquirida). El SIDA es una enfermedad causada
              por el VIH que se caracteriza por la presencia de infecciones
              oportunistas y cánceres, los cuales se producen cuando el sistema
              inmunológico se debilita significativamente. Sin tratamiento, el
              SIDA puede ser mortal. Sin embargo, con el tratamiento adecuado,
              las personas con VIH pueden vivir vidas largas y saludables y
              prevenir la aparición del SIDA.
            </p>
            <p>
              El VIH se transmite a través de ciertos fluidos corporales, como
              la sangre, el semen, las secreciones vaginales y la leche materna.
              Las formas más comunes de transmisión son el contacto sexual sin
              protección, el uso compartido de jeringuillas contaminadas entre
              personas que se inyectan drogas, y la transmisión de madre a hijo
              durante el embarazo, el parto o la lactancia materna. El VIH no se
              puede curar, pero el tratamiento con medicamentos
              antirretrovirales (ARV) puede controlar el virus y evitar que se
              debilite el sistema inmunológico. El tratamiento implica tomar una
              combinación de medicamentos antirretrovirales a diario de por
              vida, lo que se conoce como terapia antirretroviral (TAR). La TAR
              reduce la cantidad de virus en la sangre a niveles muy bajos, lo
              que ayuda a prevenir la aparición del SIDA y permite que las
              personas con VIH vivan vidas largas y saludables.
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
                Estos son algunos de los posibles signos y síntomas:
                </p>
                <ul>
                  <li>Fiebre.</li>
                  <li>Dolor de cabeza.</li>
                  <li>Dolor muscular y articular.</li>
                  <li>Erupción.</li>
                  <li>Dolor de garganta y llagas dolorosas en la boca.</li>
                  <li>Ganglios linfáticos inflamados, principalmente en el cuello.</li>
                  <li>Diarrea.</li>
                  <li>Pérdida de peso.</li>
                  <li>Tos.</li>
                  <li>Sudores nocturnos.</li>
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
                El VIH puede diagnosticarse a través de análisis de sangre o saliva. Entre las pruebas disponibles se incluyen:
                </p>
              </div>
              <ul>
                <li>
                Pruebas de antígenos y anticuerpos. Estas pruebas suelen implicar la extracción de sangre de una vena. Los antígenos son sustancias del propio virus del VIH y suelen detectarse, o dar positivo, en la sangre a las pocas semanas de la exposición al VIH.
                </li>
                <li>
                Análisis de anticuerpos. Estas pruebas buscan anticuerpos contra el VIH en la sangre o la saliva. La mayoría de las pruebas rápidas de VIH, incluidas las pruebas que se realiza la persona en casa, son pruebas de anticuerpos. Las pruebas de anticuerpos pueden tardar de 3 a 12 semanas en dar positivo después de la exposición.
                </li>
                <li>
                Pruebas de ácido nucleico. Estas pruebas buscan el virus que realmente está presente en la sangre (carga viral). También consisten en la extracción de sangre de una vena. Si estuviste expuesto al VIH en las últimas semanas, es posible que el proveedor de atención médica te recomiende una prueba de ácido nucleico. La prueba de ácido nucleico será la primera prueba en dar positivo después de la exposición al VIH.
                </li>
              </ul>
            </div>
          </div>
          <div className="paper-informacion">
            <h1>Posibles tratamientos</h1>
            <p>
            Actualmente, no existe una cura para el VIH ni el SIDA. Una vez que tienes la infección, tu cuerpo no puede deshacerse de ella. Sin embargo, hay muchos medicamentos que pueden controlar el VIH y evitar complicaciones. Estos medicamentos se denominan terapia antirretroviral. Todas las personas a quienes se les diagnostica el VIH deben comenzar con la terapia antirretroviral, independientemente de la etapa de la infección o de las complicaciones.
            </p>
            <p>La terapia antirretroviral suele ser una combinación de dos o más medicamentos de varias clases de fármacos diferentes. Este enfoque es el que más posibilidades tiene de reducir la cantidad de VIH en la sangre. Hay muchas opciones de terapia antirretroviral que combinan varios medicamentos para el VIH en un solo comprimido, que se toma una vez al día.</p>
          </div>
          <div className="button-info">
            <button className="btn btn-primary">Ver más información</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default VIH;
