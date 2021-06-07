import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDistributerComponent } from './edit-distributer.component';

describe('EditDistributerComponent', () => {
  let component: EditDistributerComponent;
  let fixture: ComponentFixture<EditDistributerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDistributerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDistributerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
