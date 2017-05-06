"use strict";

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  describe:"title of note",
  demand: true,
  alias: "t"
};
const bodyOptions = {
  describe: "body of note",
  demand: true,
  alias :"b"
}

const argv = yargs
  .command('add','add a note',{
    title: titleOptions,
    body:bodyOptions
  })
  .command('list','Listing all notes')
  .command('read','read a note',{
    title: titleOptions
  })
  .command('remove','remove a note',{
    title:titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  if(notes.addNote(argv.title, argv.body)) {
      console.log("Note was added Successfully");
  } else {
      console.log("Note was not added");
  }
} else if (command === 'list') {
  var myNotes = notes.getAll();
  if (myNotes) {
    myNotes.forEach(function(note) {
      console.log(`Title: ${note.title}`);
      console.log(`Body: ${note.body}`);
    });
  } else {
    console.log("No notes found");
  }
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log(`Note not found`);
  }
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
