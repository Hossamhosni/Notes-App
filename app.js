'use strict';
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = process.argv[2];
console.log(argv);

if (command === 'add') {
    console.log("Adding new Note");
    notes.addNote(argv.title, argv.body);
} else if (command === 'read') {
    console.log("Reading a note");
    notes.readNote(argv.title);
} else if (command === 'remove') {
    console.log("Removing a note");
    notes.removeNote(argv.title);
} else if (command === 'List') {
    console.log("Listing notes");
    console.log(notes.getNotes());
} else {
    console.log("Command not recoginzed");
}