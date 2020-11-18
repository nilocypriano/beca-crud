import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../../shared/rest-api.service';
import { Note } from '../../shared/Note';
@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.css']
})

export class NoteCreateComponent implements OnInit {

  note: Note={
    name: '',
    email: '',
    note: ''
  }

  constructor(private restApi: RestApiService, public router: Router){ }

  ngOnInit(): void {
    
  }

  createNote(): void{
    this.restApi.create(this.note).subscribe(()=>{
      alert('Tarefa criada com sucesso!');
      this.router.navigate([''])    
    });
  }
}
