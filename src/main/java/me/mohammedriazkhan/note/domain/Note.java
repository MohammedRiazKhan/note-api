package me.mohammedriazkhan.note.domain;

import javax.persistence.*;

@Entity
@Table(name="Notes")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int noteId;
    @Column(name="title")
    private String noteTitle;
    @Column(name="content")
    private String noteContent;

    public Note(){

    }

    public Note(NoteBuilder builder){
        this.noteId = builder.noteId;
        this.noteTitle = builder.noteTitle;
        this.noteContent = builder.noteContent;
    }

    public int getNoteId() {
        return noteId;
    }

    public void setNoteId(int noteId) {
        this.noteId = noteId;
    }

    public String getNoteTitle() {
        return noteTitle;
    }

    public void setNoteTitle(String noteTitle) {
        this.noteTitle = noteTitle;
    }

    public String getNoteContent() {
        return noteContent;
    }

    public void setNoteContent(String noteContent) {
        this.noteContent = noteContent;
    }

    public static class NoteBuilder{

        private int noteId;
        private String noteTitle;
        private String noteContent;

        public NoteBuilder(){

        }

        public NoteBuilder noteId(int noteId){
            this.noteId = noteId;
            return this;
        }

        public NoteBuilder noteTitle(String noteTitle){
            this.noteTitle = noteTitle;
            return this;
        }

        public NoteBuilder noteContent(String noteContent){
            this.noteContent = noteContent;
            return this;
        }

        public Note build(){
            return new Note(this);
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NoteBuilder that = (NoteBuilder) o;

            if (noteId != that.noteId) return false;
            if (noteTitle != null ? !noteTitle.equals(that.noteTitle) : that.noteTitle != null) return false;
            return noteContent != null ? noteContent.equals(that.noteContent) : that.noteContent == null;

        }

        @Override
        public int hashCode() {
            int result = noteId;
            result = 31 * result + (noteTitle != null ? noteTitle.hashCode() : 0);
            result = 31 * result + (noteContent != null ? noteContent.hashCode() : 0);
            return result;
        }

        @Override
        public String toString() {
            return "NoteBuilder{" +
                    "noteId=" + noteId +
                    ", notTitle='" + noteTitle + '\'' +
                    ", noteContent='" + noteContent + '\'' +
                    '}';
        }
    }

}
