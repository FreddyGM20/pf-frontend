import React from 'react'
import NavBar from './NavBar'
import "../styles/ets.scss";

function ETS() {
  return (
    <>
    <NavBar/>
    <main className='MainInformacion'>
        <div className='container-informacion'>
            <div className='paper-informacion'>
              <h1>¿Que son las ETS (Enfermedades de transmision sexual)?</h1>
              <p>Las enfermedades de transmisión sexual, o ETS, son infecciones que se transmiten de una persona a otra a través del contacto sexual. Estas infecciones pueden ser causadas por diferentes tipos de microorganismos, como virus, bacterias, hongos o parásitos.Las ETS pueden afectar a cualquier persona que tenga relaciones sexuales, independientemente de su edad, género o orientación sexual. Aunque algunas ETS son más comunes en ciertos grupos de población, como los jóvenes sexualmente activos o los hombres que tienen relaciones sexuales con otros hombres.Algunas de las ETS más comunes incluyen la sífilis, la gonorrea, la clamidia, el VIH/SIDA, el herpes genital, la hepatitis B, la tricomoniasis y el VPH (virus del papiloma humano). Cada una de estas enfermedades tiene sus propios síntomas, complicaciones y tratamientos, y algunas pueden ser asintomáticas, lo que significa que la persona infectada no presenta síntomas visibles.</p>
              <p>Es importante destacar que las ETS pueden tener graves consecuencias para la salud si no se tratan adecuadamente. Por ejemplo, la sífilis no tratada puede afectar al cerebro, el corazón y otros órganos, y el VPH puede provocar cáncer cervical y otros tipos de cáncer. Por esta razón, es fundamental realizarse pruebas de detección de ETS con regularidad y recibir tratamiento si se ha contraído una infección. Además, se pueden tomar medidas para prevenir la transmisión de ETS, como utilizar condones o barreras dentales durante las relaciones sexuales, limitar el número de parejas sexuales y conocer el estado de salud sexual de las parejas antes de tener relaciones sexuales. También es importante educar a las personas sobre los riesgos y la prevención de las ETS para promover una sexualidad segura y saludable.</p>
            </div>
        </div>
    </main>
    </>
  )
}

export default ETS