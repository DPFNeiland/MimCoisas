import { Link } from "react-router-dom";
import React from "react";

const subjects = [
  { id: "algebralinear", name: "Álgebra Linear" },
  { id: "calculo", name: "Cálculo" },
  { id: "fisica", name: "Física" }
];

const Notes: React.FC = () => {
  return (
    <div>
      <h1>Anotações</h1>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <Link to={`/notes/${subject.id}`}>{subject.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
