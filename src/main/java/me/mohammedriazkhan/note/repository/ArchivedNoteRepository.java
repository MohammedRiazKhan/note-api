package me.mohammedriazkhan.note.repository;

import me.mohammedriazkhan.note.domain.ArchivedNote;
import org.springframework.data.repository.CrudRepository;

public interface ArchivedNoteRepository extends CrudRepository<ArchivedNote, Integer> {
}
