import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialComponent } from './view/initial/initial.component'
import { NoteCreateComponent } from './components/note-create/note-create.component';
import { NoteReadComponent } from './components/note-read/note-read.component';
import { NoteUpdateComponent } from './components/note-update/note-update.component';
import { NoteDeleteComponent } from './components/note-delete/note-delete.component';


const routes: Routes = [
  {path: "", component: InitialComponent},
  {path: "create", component: NoteCreateComponent},
  {path: "read", component: NoteReadComponent},
  {path: "update/:id", component: NoteUpdateComponent},
  {path: "delete/:id", component: NoteDeleteComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }