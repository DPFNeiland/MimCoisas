import React from "react";
import "../styles/linearalgebra.css"
import VectorPlot from "../components/Vectors/vectorplot";
import VectorAddition from "../components/Vectors/VectorAddition";

const Algebralinear: React.FC = () => {
  return (
    <div>
      <h1>Anotações de Linear Algebra</h1>

      <div className="chapters">
        <div>
          <h3> Vector | Chapter 1, Essence of linear algebra</h3>
        </div>

        <div>
          <i>"The introduction of numbers as coordinates is an act of violence" </i> - Hermman Wolf
        </div>

        <div className="withvector">
          Vector Visualization:

          <VectorPlot/>

          <div className="explanation">
            <div>
              <i>e.g</i>: This vector are (1, 2)
            </div>

            <div>
              Vectors at Computer Science = List of number
            </div>

            <div>
              (2,600 ft², $300,000) ≠ ($300,000, 2,600 ft²)  
            </div>

          </div>
        </div>
      </div>



      <div className="chapters">
        <div>
          <h3>Vector Addition</h3>


          <VectorAddition />
        </div>
      </div>


      <div>
        Fontes:
        <a href="https://youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&si=z59O9mXtH43aHZnv">
          3Blue1Brown
        </a>

        <a href="https://www.geogebra.org/classic?lang=pt_PT">
          Geogebra
        </a>
      </div>
    </div>
  );
};

export default Algebralinear;
