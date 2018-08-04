import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];

  constructor(private noteService: NoteService) { }



  delete(note) {
    // console.log(note);
    // console.log(typeof note);
    this.noteService.delete(note)
  }

  ngOnInit() {
    this.noteService.load().subscribe(result => {
      console.log(result);
      this.notes = result;
    })
  }

}
