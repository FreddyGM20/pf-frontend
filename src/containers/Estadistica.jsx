import React from "react";
import NavBarM from "./NavBarM";
import "../styles/estadistica.scss";
import img1 from "../assets/GUID-3045CB88-870B-4A90-A55A-F50EFA20506B-web.png";

function Estadistica() {
  return (
    <>
      <NavBarM />
      <main className="MainEstadistica">
        <div className="container-estadistica">
          <div className="container-hestadistica">
            <div className="card-hestadistica">
              <iframe
                className="graficau"
                src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=2d9e5ab3-1a86-4338-bff8-ce5740737e46&maxDataAge=3600&theme=light&autoRefresh=true"
              ></iframe>
            </div>
            <div className="card-hestadistica">
              <iframe
                className="graficau"
                src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=64603317-c04b-4029-8a24-0eeea793ac1c&maxDataAge=3600&theme=light&autoRefresh=true"
              ></iframe>
            </div>
            <div className="card-hestadistica">
              <iframe
                className="graficau"
                src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=d92d2c79-7ecb-4298-85a9-c31f68702dfc&maxDataAge=3600&theme=light&autoRefresh=true"
              ></iframe>
            </div>
          </div>
          <div className="container-h2estadistica">
            <div className="card-estadistica">
              <div className="imgG">
                <iframe
                  className="graficad"
                  src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=64602fdf-6cd4-4222-8771-d817f431d652&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </div>
            <div className="card-estadistica">
              <div className="imgG">
                <iframe
                  className="graficad"
                  src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=64603ef6-c04b-4989-869d-0eeea79b89cb&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container-h2estadistica">
            <div className="card-estadistica">
              <div className="imgG">
                <iframe
                  className="graficad"
                  src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=3be3c794-49e4-4554-99be-8554c259b878&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </div>
            <div className="card-estadistica">
              <div className="imgG">
                <iframe
                  className="graficad"
                  src="https://charts.mongodb.com/charts-project-0-hpwqy/embed/charts?id=c0ccf8c9-7393-499e-87f1-44be47aaf822&maxDataAge=3600&theme=light&autoRefresh=true"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Estadistica;
