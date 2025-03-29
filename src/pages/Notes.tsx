import React, { useState } from "react";

interface Note {
  id: number;
  title: string;
  content: string;
}

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const addNote = () => {
    if (newTitle.trim() && newContent.trim()) {
      const newNote: Note = {
        id: Date.now(),
        title: newTitle,
        content: newContent,
      };
      setNotes([...notes, newNote]);
      setNewTitle("");
      setNewContent("");
    }
  };

  return (
    <div className="notes-container">
      <h1>Minhas Anotações</h1>

      <div className="note-form">
        <input
          type="text"
          placeholder="Título da anotação"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Escreva sua anotação..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button onClick={addNote}>Adicionar</button>
      </div>

      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="note-card">
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))
        ) : (
          <p>Nenhuma anotação adicionada ainda.</p>
        )}
      </div>
    </div>
  );
};

export default Notes;
