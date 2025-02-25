import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTestResultsComponent } from './view-my-test-results.component';

describe('ViewMyTestResultsComponent', () => {
  let component: ViewMyTestResultsComponent;
  let fixture: ComponentFixture<ViewMyTestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMyTestResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
