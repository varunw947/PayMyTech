import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiplDetailComponent } from './cipl-detail.component';

describe('CiplDetailComponent', () => {
  let component: CiplDetailComponent;
  let fixture: ComponentFixture<CiplDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiplDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiplDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
