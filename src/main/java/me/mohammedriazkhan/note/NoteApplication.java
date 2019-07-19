package me.mohammedriazkhan.note;

import me.mohammedriazkhan.note.domain.ArchivedNote;
import me.mohammedriazkhan.note.domain.Note;
import me.mohammedriazkhan.note.factory.ArchivedNoteFactory;
import me.mohammedriazkhan.note.factory.NoteFactory;
import me.mohammedriazkhan.note.service.ArchiveService;
import me.mohammedriazkhan.note.service.NoteService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class NoteApplication {

    public static void main(String[] args) {
        SpringApplication.run(NoteApplication.class, args);
    }

    /*
    @Bean
    CommandLineRunner init(NoteService service, ArchiveService archivedService) {
        return args -> {
            int i = 1;
            String title = "Title";
            String content = "Content";

            while(i <= 10){

                Note note = NoteFactory.getNote(i, title+ " " + i, content+ " " +i);
                service.create(note);
                i++;

            }

            int i2 = 1;
            String title2 = "Archived Title";
            String content2 = "Archived Content";

            while(i2 <= 10){

                ArchivedNote note2 = ArchivedNoteFactory.getNote(i2, title+ " " + i2, content+ " " +i2, false);
                archivedService.create(note2);
                i2++;

            }
        };
    }

     */

}
