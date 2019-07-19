package me.mohammedriazkhan.note.service;

import me.mohammedriazkhan.note.domain.ArchivedNote;
import me.mohammedriazkhan.note.repository.ArchivedNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class ArchiveService implements Service<ArchivedNote, Integer> {

    @Autowired
    private ArchivedNoteRepository noteRepository;

    @Override
    public ArchivedNote create(ArchivedNote archivedNote) {
        return noteRepository.save(archivedNote);
    }

    @Override
    public Optional<ArchivedNote> read(Integer integer) {
        return noteRepository.findById(integer);
    }

    @Override
    public ArchivedNote update(ArchivedNote archivedNote) {

        Optional<ArchivedNote> noteInDB = read(archivedNote.getNoteId());

        //if the note exists we edit it
        if(noteInDB.isPresent()){

            noteInDB.get().setNoteTitle(archivedNote.getNoteTitle());
            noteInDB.get().setNoteContent(archivedNote.getNoteContent());
        }

        //then save it. if it doesn't exist it will just save.
        return noteRepository.save(archivedNote);
    }

    @Override
    public void delete(Integer integer) {
        noteRepository.deleteById(integer);
    }

    public List<ArchivedNote> getAll(){

        List<ArchivedNote> notes = (List<ArchivedNote>) noteRepository.findAll();

        //sort in descending order then send to client
        List<ArchivedNote> reversed = notes.stream()
                .sorted(Comparator.comparing(ArchivedNote::getNoteId).reversed()).collect(Collectors.toList());

        return reversed;

    }
}
