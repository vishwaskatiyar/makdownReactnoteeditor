import React from "react";
import Sidebar from "./Component/Sidebar";
import Editor from "./Component/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: `# Enter title here \n\n`,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    setNotes((oldNotes) => {
      let arr = [];
      for (let i = 0; i < oldNotes.length; i++) {
        if (oldNotes[i].id === currentNoteId) {
          arr.unshift({ ...oldNotes[i], body: text });
        } else {
          arr.push(oldNotes[i]);
        }
      }
      return arr;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        notes={notes}
        setCurrentNoteId={setCurrentNoteId}
        currentNote={findCurrentNote()}
        newNote={createNewNote}
        deleteNote={deleteNote}
      />
      <div className="flex-1">
        {notes.length > 0 ? (
          <Split sizes={[100]} direction="horizontal" className="h-full">
            {currentNoteId && notes.length > 0 && (
              <Editor updateNote={updateNote} currentNote={findCurrentNote()} />
            )}
          </Split>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl mb-4">You have no notes</h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={createNewNote}
              >
                Create one now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
