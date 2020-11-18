import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from './../../shared/rest-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-update',
  templateUrl: './note-update.component.html',
  styleUrls: ['./note-update.component.css']
})
export class NoteUpdateComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  newNote: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }
  
  ngOnInit() {
    this.restApi.getById(this.id).subscribe((nNote: {}) => {
      this.newNote = nNote;
    })
  }

  updateNote() {
      this.restApi.update(this.id,
        this.newNote).subscribe(data => {
          this.router.navigate([''])
        })
  }
}
