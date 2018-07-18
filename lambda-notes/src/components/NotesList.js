import React from "react";
import { Link } from "react-router-dom";

const NotesList = props => {
  return (
    <div className="notes-list-div">
      <p className="notes-list-title">Your Notes: </p>
      <ul className="notes-list">
        {props.notes.map(note => {
          return (
            <Link className="note-link" to={`/notes/${note.id}`} key={note.id}>
              <p className='note-link-title'>{note.title.substring(0, 20)}</p>
              <hr/>
              <p>{note.content.substring(0, 150)}</p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesList;
