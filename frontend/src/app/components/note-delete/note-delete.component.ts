import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from './../../shared/rest-api.service';
import { Note } from './../../shared/Note';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css']
})

export class NoteDeleteComponent implements OnInit {

  note: Note

  constructor(public router: Router, public restApi: RestApiService, public route: ActivatedRoute) { }

  ngOnInit(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.restApi.getById(id).subscribe(note =>{
    this.note = note
  })
  }

  deleteNote(id): void{
    this.restApi.delete(id).subscribe(data => {
    this.router.navigate([''])
    })
  }

}
