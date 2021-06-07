import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperaorUpdateComponent } from './operaor-update.component';

describe('OperaorUpdateComponent', () => {
  let component: OperaorUpdateComponent;
  let fixture: ComponentFixture<OperaorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperaorUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperaorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
