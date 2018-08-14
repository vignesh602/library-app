import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayIssuedBooksComponent } from './display-issued-books.component';

describe('DisplayIssuedBooksComponent', () => {
  let component: DisplayIssuedBooksComponent;
  let fixture: ComponentFixture<DisplayIssuedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayIssuedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIssuedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
