import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteReadComponent } from './note-read.component';

describe('NoteReadComponent', () => {
  let component: NoteReadComponent;
  let fixture: ComponentFixture<NoteReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
