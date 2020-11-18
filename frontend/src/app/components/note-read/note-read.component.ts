import { Router, } from '@angular/router';
import { RestApiService } from '../../shared/rest-api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table/table-data-source'
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-note-read',
  templateUrl: './note-read.component.html',
  styleUrls: ['./note-read.component.css']
})

export class NoteReadComponent implements OnInit {

  notes: any = []
  
  displayedColumns = ['name', 'email', 'note', 'action']

  @ViewChild(MatSort) sort: MatSort;

  constructor(public restApi: RestApiService,
              public router: Router) { }

  ngOnInit(): void {
    this.restApi.read()
    .subscribe((notes: {}) =>{
       this.notes = notes})
}

/*delete(id){
this.restApi.delete(id).subscribe(data => {
  this.router.navigate([''])
})
}*/}
