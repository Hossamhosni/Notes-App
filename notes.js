'use strict';
const fs = require('fs');

var fetchNotes = () => {
    try {
    var notesString = fs.readFileSync('notes.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  notes = fetchNotes();

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log('Getting note', title);
};

var removeNote = (title) => {
  var notes = fetchNotes();

  notes = notes.filter((note) => note.title !== title);
  saveNotes(notes);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
