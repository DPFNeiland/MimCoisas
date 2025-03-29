import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Subject.css";

const Subject: React.FC = () => {
  const { subjectId } = useParams<{ subjectId?: string }>();

  if (!subjectId) {
    return <p>Matéria não encontrada.</p>; // Tratamento para evitar erro
  }

  return (
    <div>
      <h1>Anotações sobre {subjectId.replace("-", " ")}</h1>
      <p>Aqui estarão as anotações dessa matéria.</p>
    </div>
  );
};

export default Subject;
