// src/pages/Subject.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // Importando os estilos para LaTeX

const Subject: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!subjectId) {
    return <div>Erro: Matéria não encontrada.</div>;
  }

  // Simulando anotações para a matéria
  const notes = [
    {
      id: 1,
      content: "## Matrizes e Determinantes\nA matriz identidade é representada por $I_n$.",
    },
  ];

  const handleDelete = (noteId: number) => {
    if (isAdmin) {
      // Lógica de exclusão de anotação
      alert(`Anotação ${noteId} excluída!`);
    } else {
      alert("Você não tem permissão para excluir anotações.");
    }
  };

  return (
    <div className="subject-container">
      <h1>Anotações de {subjectId.replace("-", " ")}</h1>
      <Link to="/notes">← Voltar para Anotações</Link>
      <div className="notes-list">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {note.content}
            </ReactMarkdown>
            {isAdmin && (
              <button onClick={() => handleDelete(note.id)}>Excluir</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subject;
