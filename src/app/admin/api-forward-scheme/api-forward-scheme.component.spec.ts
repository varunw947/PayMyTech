import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiForwardSchemeComponent } from './api-forward-scheme.component';

describe('ApiForwardSchemeComponent', () => {
  let component: ApiForwardSchemeComponent;
  let fixture: ComponentFixture<ApiForwardSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiForwardSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiForwardSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
