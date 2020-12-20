import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbresComponent } from './arbres.component';

describe('ArbresComponent', () => {
  let component: ArbresComponent;
  let fixture: ComponentFixture<ArbresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
