import CreateArea from "@/components/CreateArea";
import Header from "@/components/Header";
import Note from "@/components/Note";
import React, { useState } from "react";


function App() {
  const [notes, setNotes] = useState<any | []>([]);

  function addNote(newNote:any) {
    setNotes((prevNotes:any) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id:any) {
    setNotes((prevNotes:any) => {
      return prevNotes.filter((noteItem:any, index:any) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem:any, index:any) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

    </div>
  );
}

export default App;
