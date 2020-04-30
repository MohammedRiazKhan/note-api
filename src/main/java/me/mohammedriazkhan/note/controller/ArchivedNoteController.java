package me.mohammedriazkhan.note.controller;

import me.mohammedriazkhan.note.domain.ArchivedNote;
import me.mohammedriazkhan.note.service.ArchiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/archivednotes")
@CrossOrigin(origins = "http://localhost:4200")
public class ArchivedNoteController {

    @Autowired
    private ArchiveService archiveService;

    @PostMapping("/addArchived")
    public void addNote(@RequestBody ArchivedNote note){

        archiveService.create(note);

    }

    @GetMapping(path="/findArchived/{id}")
    public Optional<ArchivedNote> findNote(@PathVariable int id){

        return archiveService.read(id);

    }

    @PutMapping("/updateArchived")
    public void updateNote(@RequestBody ArchivedNote note){

        archiveService.update(note);

    }

    @DeleteMapping(path = "/deleteArchived/{id}")
    public void deleteNote(@PathVariable int id){

        archiveService.delete(id);

    }

    @GetMapping("/getAllArchived")
    public List<ArchivedNote> getAllArchived(){

        return archiveService.getAll();

    }
}
