import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcontentComponent } from './travelcontent.component';

describe('TravelcontentComponent', () => {
  let component: TravelcontentComponent;
  let fixture: ComponentFixture<TravelcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
