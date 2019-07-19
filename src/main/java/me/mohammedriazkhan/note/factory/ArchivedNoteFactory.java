package me.mohammedriazkhan.note.factory;

import me.mohammedriazkhan.note.domain.ArchivedNote;

public class ArchivedNoteFactory {

    public static ArchivedNote getNote(int id, String title, String content, boolean isArchived) {
        return new ArchivedNote.ArchivedNoteBuilder()
                .noteId(id)
                .noteTitle(title)
                .noteContent(content)
                .isArchived(isArchived)
                .build();
    }
}
