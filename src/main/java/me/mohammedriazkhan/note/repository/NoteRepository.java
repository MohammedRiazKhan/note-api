package me.mohammedriazkhan.note.repository;

import me.mohammedriazkhan.note.domain.Note;
import org.springframework.data.repository.CrudRepository;

public interface NoteRepository extends CrudRepository<Note, Integer> {
}
