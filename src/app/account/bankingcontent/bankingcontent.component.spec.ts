import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingcontentComponent } from './bankingcontent.component';

describe('BankingcontentComponent', () => {
  let component: BankingcontentComponent;
  let fixture: ComponentFixture<BankingcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
