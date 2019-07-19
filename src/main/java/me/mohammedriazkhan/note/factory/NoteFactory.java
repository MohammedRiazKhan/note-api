package me.mohammedriazkhan.note.factory;

import me.mohammedriazkhan.note.domain.Note;

public class NoteFactory {

    public static Note getNote(int id, String title, String content) {
        return new Note.NoteBuilder()
                .noteId(id)
                .noteTitle(title)
                .noteContent(content)
                .build();
    }

}
