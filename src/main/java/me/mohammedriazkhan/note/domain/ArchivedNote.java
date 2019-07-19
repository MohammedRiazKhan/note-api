package me.mohammedriazkhan.note.domain;

import javax.persistence.*;

@Entity
@Table(name="ArchivedNotes")
public class ArchivedNote {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int noteId;
    @Column(name="title")
    private String noteTitle;
    @Column(name="content")
    private String noteContent;
    @Column(name="isArchived")
    private boolean isArchived;

    public ArchivedNote(){

    }

    public ArchivedNote(ArchivedNoteBuilder builder){
        this.noteId = builder.noteId;
        this.noteTitle = builder.noteTitle;
        this.noteContent = builder.noteContent;
        this.isArchived = builder.isArchived;
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

    public boolean isArchived() {
        return isArchived;
    }

    public void setArchived(boolean archived) {
        isArchived = archived;
    }

    public static class ArchivedNoteBuilder{

        private int noteId;
        private String noteTitle;
        private String noteContent;
        private boolean isArchived;

        public ArchivedNoteBuilder(){

        }

        public ArchivedNoteBuilder noteId(int noteId){
            this.noteId = noteId;
            return this;
        }

        public ArchivedNoteBuilder noteTitle(String noteTitle){
            this.noteTitle = noteTitle;
            return this;
        }

        public ArchivedNoteBuilder noteContent(String noteContent){
            this.noteContent = noteContent;
            return this;
        }

        public ArchivedNoteBuilder isArchived(boolean isArchived){
            this.isArchived = isArchived;
            return this;
        }

        public ArchivedNote build(){
            return new ArchivedNote(this);
        }

    }

}
