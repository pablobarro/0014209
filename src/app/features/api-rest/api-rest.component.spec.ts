import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestComponent } from './api-rest.component';

describe('ApiRestComponent', () => {
  let component: ApiRestComponent;
  let fixture: ComponentFixture<ApiRestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiRestComponent]
    });
    fixture = TestBed.createComponent(ApiRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
