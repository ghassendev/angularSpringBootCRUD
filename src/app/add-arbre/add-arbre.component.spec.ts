import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArbreComponent } from './add-arbre.component';

describe('AddArbreComponent', () => {
  let component: AddArbreComponent;
  let fixture: ComponentFixture<AddArbreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArbreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArbreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
