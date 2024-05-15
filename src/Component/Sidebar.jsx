import PropTypes from "prop-types";

export default function Sidebar(props) {
  const { notes, currentNote, setCurrentNoteId, newNote, deleteNote } = props;

  const noteList = notes.map((note) => (
    <li
      key={note.id}
      className={`title ${
        note.id === currentNote.id ? "selected-note bg-blue-200" : ""
      }`}
      onClick={() => setCurrentNoteId(note.id)}
    >
      <span className="text-snippet">{note.body.split("\n")[0]}</span>
      <button
        className="delete-btn ml-2 text-red-500"
        onClick={(event) => deleteNote(event, note.id)}
      >
        <i className="fas fa-trash">X</i>
      </button>
    </li>
  ));

  return (
    <section className="sidebar bg-gray-200 p-4 rounded-lg">
      <div className="sidebar__header flex items-center justify-between mb-4">
        <h1 className="sidebar__header-logo text-xl font-bold">Notes</h1>
        <button
          className="sidebar__header-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={newNote}
        >
          +
        </button>
      </div>
      <ul className="note-list">{noteList}</ul>
    </section>
  );
}

Sidebar.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCurrentNoteId: PropTypes.func.isRequired,
  currentNote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  newNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};
