import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewcompComponent } from './mynewcomp.component';

describe('MynewcompComponent', () => {
  let component: MynewcompComponent;
  let fixture: ComponentFixture<MynewcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynewcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
