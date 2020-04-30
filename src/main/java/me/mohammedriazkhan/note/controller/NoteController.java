package me.mohammedriazkhan.note.controller;

import me.mohammedriazkhan.note.domain.Note;
import me.mohammedriazkhan.note.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/api/notes")
@CrossOrigin(origins = "http://localhost:4200")
public class NoteController {

    @Autowired
    private NoteService service;

    @PostMapping("/add")
    public void addNote(@RequestBody Note note){

        service.create(note);

    }

    @GetMapping(path="/find/{id}")
    public Optional<Note> findNote(@PathVariable  int id){

        return service.read(id);

    }

    @PutMapping("/update")
    public void updateNote(@RequestBody Note note){

        service.update(note);

    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteNote(@PathVariable int id){

        service.delete(id);

    }

    @GetMapping("/getAll")
    public List<Note> getAll(){

        return service.getAll();

    }

}
