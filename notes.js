'use strict';
const fs = require('fs');
var addNote = (title, body) => {
    var notes = [];
    try {
        var data = fs.readFileSync('notes.json'); 
        var notes = JSON.parse(data);
    } catch (e) {

    }
    var note = {
        title:title,
        body:body
    }
    notes.push(note);
    fs.writeFileSync('notes.json',JSON.stringify(notes));
}

var readNote = (title) => {
   
}

var removeNote = (title) => {
    fs.readFile('notes.json',function(err,data) {
        var json;
        if (err) {
            console.error(err);
        }
        var json = {};
        try {
            json = JSON.parse(data.toString());
        }
        catch (e) {
            json = {};
        }
        delete json[title];
        console.log(json);
        fs.writeFile('notes.json',JSON.stringify(json));
    });
}

module.exports = {
    readNote,
    addNote,
    removeNote
}