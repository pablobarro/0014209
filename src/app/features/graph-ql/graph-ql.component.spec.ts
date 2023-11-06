import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQlComponent } from './graph-ql.component';

describe('GraphQlComponent', () => {
  let component: GraphQlComponent;
  let fixture: ComponentFixture<GraphQlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphQlComponent]
    });
    fixture = TestBed.createComponent(GraphQlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
