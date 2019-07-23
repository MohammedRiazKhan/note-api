package me.mohammedriazkhan.note.service;

import me.mohammedriazkhan.note.domain.Note;
import me.mohammedriazkhan.note.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class NoteService implements Service<Note, Integer>{

    @Autowired
    private NoteRepository noteRepository;

    @Override
    public Note create(Note note) {
        return noteRepository.save(note);
    }

    @Override
    public Optional<Note> read(Integer integer) {
        return noteRepository.findById(integer);
    }

    @Override
    public Note update(Note note) {

        Optional<Note> noteInDB = read(note.getNoteId());

        //if the note exists we edit it
        if(noteInDB.isPresent()){

            noteInDB.get().setNoteTitle(note.getNoteTitle());
            noteInDB.get().setNoteContent(note.getNoteContent());
        }

        //then save it. if it doesn't exist it will just save.
        return noteRepository.save(note);
    }

    @Override
    public void delete(Integer integer) {

        noteRepository.deleteById(integer);

    }

    public List<Note> getAll(){

        List<Note> notes = (List<Note>) noteRepository.findAll();

        //sort in descending order then send to client
        List<Note> reversed = notes.stream()
                .sorted(Comparator.comparing(Note::getNoteId).reversed()).collect(Collectors.toList());

        return reversed;

    }

}
