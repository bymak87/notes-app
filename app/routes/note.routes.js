module.exports = function(app) {
    var notes = require('../controllers/note.controller.js');

    //Create new Note
    app.post('/notes', notes.create);

    //Retrieve all notes
    app.get('/notes', notes.findAll);

    //Retrieve a single note with  noteId
    app.get('/notes/:noteId', notes.findOne);

    //Update a note with noteId
    app.put('/notes/:noteId', note.update);

    //Delete a note with noteId
    app.delete('/notes/:noteId', note.delete);
}