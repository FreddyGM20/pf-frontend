import React from "react";
import NavBar from "./NavBar";
import "../styles/ets.scss";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

function Clamidia() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className="MainInformacion">
        <div className="button-back">
          <button className="btn btn-primary" onClick={()=> navigate('/informacion-ets')}><BsArrowLeftCircleFill/> Regresar</button>
        </div>
        <div className="container-informacion">
          <div className="paper-informacion">
            <h1>¿Que es la clamidia?</h1>
            <p>
              La clamidia es una infección causada por la bacteria Chlamydia
              trachomatis que se transmite a través del contacto sexual vaginal,
              anal u oral con una persona infectada. También puede transmitirse
              de madre a hijo durante el parto. Es una de las enfermedades de
              transmisión sexual (ETS) más comunes en todo el mundo y puede
              afectar tanto a hombres como a mujeres. La mayoría de las personas
              infectadas con clamidia no presentan síntomas, lo que significa
              que pueden transmitir la enfermedad sin saberlo. Cuando se
              presentan síntomas, estos pueden incluir secreción anormal, dolor
              o ardor al orinar, dolor durante las relaciones sexuales y dolor
              en la parte baja del abdomen en las mujeres.
            </p>
            <p>
              Si no se trata, la clamidia puede tener graves consecuencias para
              la salud. En las mujeres, la infección puede causar enfermedad
              inflamatoria pélvica (EIP), que puede provocar dolor crónico y
              daño en las trompas de Falopio, lo que aumenta el riesgo de
              infertilidad y embarazo ectópico. En los hombres, la infección
              puede causar epididimitis, una inflamación del epidídimo que puede
              provocar dolor e hinchazón en los testículos. Tanto en hombres
              como en mujeres, la clamidia no tratada también puede aumentar el
              riesgo de contraer el VIH y otras ETS.
            </p>
          </div>
          <div className="list-informacion">
            <div className="papers-informacion">
              <h2>Los síntomas más comunes son:</h2>
              <ul>
                <li>Dolor o ardor al orinar.</li>
                <li>Dolor durante el sexo.</li>
                <li>Dolor en el bajo vientre.</li>
                <li>Flujo vaginal anormal (puede ser amarillento y tener un olor fuerte).</li>
                <li>Sangrado entre periodos menstruales.</li>
                <li>Si se infectan los ojos, es posible que los tengas rojos, sientas picazón o fluido o lagañas (moco que aparece en tus ojos). A veces, la clamidia afecta la boca y/o la garganta y provoca dolor de garganta, aunque no es frecuente.</li>
              </ul>
            </div>
            <div className="papers-informacion">
              <h2>
                ¿Como se puede diagnosticar?
              </h2>
              <ul>
                <li>Un análisis de orina. Se analiza una muestra de tu orina en el laboratorio para detectar la presencia de esta infección.</li>
                <li>Un hisopado. En el caso de las mujeres, el médico toma una muestra de flujo del cuello del útero para realizar un cultivo o un análisis de los antígenos para detectar la clamidia. Esto se puede realizar durante una prueba de Papanicolaou de rutina. Algunas mujeres prefieren tomar las muestras de la vagina ellas mismas; se ha demostrado que esto es tan preciso como los hisopos obtenidos por el médico.</li>
                <li>En el caso de los hombres, si se requiere el hisopado el médico inserta un hisopo delgado en el extremo del pene para obtener una muestra de la uretra. En algunos casos, el médico te hará un hisopado del ano.</li>
              </ul>
            </div>
          </div>
          <div className="paper-informacion">
            <h1>Posibles tratamientos</h1>
            <p>La clamidia (Chlamydia trachomatis) se trata con antibióticos. Puede que recibas una dosis única, o puede que necesites tomar el medicamento diariamente o varias veces al día durante cinco o 10 días. En la mayoría de los casos, la infección se cura en una o dos semanas. Durante ese tiempo, debes abstenerse de tener relaciones sexuales. Tu pareja o parejas sexuales también necesitan recibir tratamiento aunque no presenten signos o síntomas. De lo contrario, la infección puede transmitirse entre las parejas sexuales.</p>
            <div style={{display:"flex", width:"100%",alignItems:"start"}}>
                <p>Recordatorio: Tener clamidia o haber sido tratado por ella en el pasado no impide que la contraigas de nuevo. </p>
            </div>
          </div>
          <div className="button-info">
            <button className="btn btn-primary">Ver más información</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Clamidia;
