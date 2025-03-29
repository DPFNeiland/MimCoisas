import React from "react";
import { Link } from "react-router-dom";

interface Subject {
  id: string;
  name: string;
}

const subjects: Subject[] = [
  { id: "algebra", name: "Álgebra Linear" },
  { id: "calculo", name: "Cálculo" },
  { id: "fisica", name: "Física" },
];

const Notes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Anotações</h1>
      <p>Selecione uma matéria para ver as anotações:</p>
      <ul className="subjects-list">
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
