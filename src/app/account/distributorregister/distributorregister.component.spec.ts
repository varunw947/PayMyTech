import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorregisterComponent } from './distributorregister.component';

describe('DistributorregisterComponent', () => {
  let component: DistributorregisterComponent;
  let fixture: ComponentFixture<DistributorregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributorregisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
